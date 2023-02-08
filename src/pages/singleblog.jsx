import React, { useEffect, useState } from "react";
import { Button, Link, Page, useStore } from "framework7-react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { FiShare } from "react-icons/fi";
import AboutLogo from "../assets/logo_large.jpg";
import store from "../js/store";
import { getLink } from "../lib/utlis";
import { isEmpty, truncate } from "lodash";
import Toast from "../components/Toast/Toast";

const Wrapper = styled.div`
  min-height: ${window.innerHeight / 2.2}px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5px;
  font-size: 16px;
  color: #3d3d3d;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
`;

const ImageWrapper = styled.div`
  position: relative;
  min-height: 50%;
  background: #212121;
  background-image: url(${({ src }) => (src ? src : AboutLogo)});
  background-repeat: no-repeat;
  background-size: 400% 200%;
  background-position: center;
`;

const Image = styled.div`
  position: absolute;
  top: 26%;
  left: 22%;
  width: 200px;
  height: 200px;
  border-radius: 25px;
  background-image: url(${({ src }) => (src ? src : AboutLogo)});
  background-repeat: no-repeat;
  background-size: 210% 110%;
  background-position: 47%;
  z-index: 9;
  border: 4px solid white;
`;

const ContentWrapper = styled.div`
  position: relative;
  background: white;
  max-width: 100%;
  min-height: ${window.innerHeight / 2.3}px;
  max-height: 50%;
  padding: 0 1.5rem 0 1.5rem;

  @media (prefers-color-scheme: dark) {
    &::after {
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 10%,
        rgba(0, 0, 0, 0.7667436489607391) 58%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }

  &::after {
    content: "";
    width: 100%;
    height: 130px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 10%,
      rgba(255, 255, 255, 0.7667436489607391) 58%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 4;
  }
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 0.9rem !important;
  color: #7d7d7d;
  text-align: justify;

  span {
    font-size: 0.9rem !important;
  }
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
`;

const MainWrapper = styled.div`
  max-height: ${window.innerHeight}px;
  overflow: hidden;
`;

const Pill = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: max-content;
  background: ${({ bg }) => (bg ? bg : "#eee")};
  border-radius: 30px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ color }) => (color ? color : "#7d7d7d")};
  margin-bottom: 0.5rem;
`;

const PillWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 80%;
  margin: auto;
  padding: 1.5rem 0;
  border-radius: 30px;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 1.1rem;
  z-index: 6;
`;

const LeftArrow = styled(BsArrowLeft)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  padding: 0.8rem;
  border-radius: 50%;
`;

const BookmarkIcon = styled(IoBookmarkOutline)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  padding: 0.8rem;
  border-radius: 50%;
`;

const BookmarkFillIcon = styled(IoBookmark)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  padding: 0.8rem;
  border-radius: 50%;
`;

const SingleBlogPage = ({ f7router, id }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const isLoading = useStore("isLoading");
  const bookmarks = useStore("getBookmarks");
  const blog = useStore("getSingleBlog");
  const blogUrl = `https://theburningdoor.com/single.php?title=${blog.title
    ?.split(" ")
    ?.join("_")}&id=${blog.id}`;

  const shareData = {
    title: blog.title,
    text: blog.content,
    url: blogUrl,
  };

  const shareApp = async () => {
    if (window.navigator.share) {
      window.navigator.share(shareData);
    } else {
      setToastMessage();
      setShowToast(true);
    }
  };

  const bookmarkBlog = () => {
    if (isBookmarked().marked) {
      setToastMessage("Removed from bookmarks");
      setShowToast(true);
      store.dispatch("removeBookmarks", blog);
    } else {
      setToastMessage("Added to bookmarks");
      setShowToast(true);
      store.dispatch("setBookmarks", blog);
    }
  };

  const isBookmarked = () => {
    const item = bookmarks.filter((mark) => mark.id === id)[0];
    return { item, marked: !isEmpty(item) };
  };

  useEffect(() => {
    store.dispatch("getSingleBlog", id);
  }, []);

  useEffect(() => {
    if (showToast) {
      setTimeout(() => setShowToast(false), 3000);
    }
  }, [showToast]);

  return (
    <Page name="singleblog">
      <MainWrapper>
        <ImageWrapper src={getLink(blog.photo)}>
          <Wrapper>
            <LeftArrow
              onClick={() => f7router.back()}
              color="white"
              size={20}
            />
            {isBookmarked().marked ? (
              <BookmarkFillIcon
                onClick={bookmarkBlog}
                color="rgba(255,255,255,0.8)"
                size={20}
              />
            ) : (
              <BookmarkIcon
                onClick={bookmarkBlog}
                color="rgba(255,255,255,0.8)"
                size={20}
              />
            )}
          </Wrapper>
          <Image src={getLink(blog.photo)} />
        </ImageWrapper>
        <ContentWrapper>
          <Title>{blog.title}</Title>
          <Pill
            color="#fff"
            bg="linear-gradient( 90deg, rgba(255,185,105,1) 25%, rgba(242,138,16,1) 100% )"
            noLinkClass
            transition="f7-parallax"
            href={`/category/${blog.category_id}`}
          >
            {blog.category_name}
          </Pill>
          <PillWrapper>
            <Pill noLinkClass transition="f7-dive" external href={blogUrl}>
              <BsGlobe size={15} /> Website
            </Pill>
            <Pill noLinkClass transition="f7-dive" href="" onClick={shareApp}>
              <FiShare size={15} /> Share
            </Pill>
          </PillWrapper>
          {isLoading ? (
            "Loading"
          ) : (
            <Text
              dangerouslySetInnerHTML={{
                __html: truncate(blog.content, { length: 450 }),
              }}
            />
          )}
          <StyledButton
            transition="f7-push"
            href={`/blog/details/${blog.id}`}
            fill
          >
            Read More
          </StyledButton>
        </ContentWrapper>
      </MainWrapper>
      <Toast showToast={showToast} text={toastMessage} />
    </Page>
  );
};
export default SingleBlogPage;
