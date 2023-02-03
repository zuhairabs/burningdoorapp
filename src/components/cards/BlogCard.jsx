import { truncate } from "lodash";
import React from "react";
import styled from "styled-components";
import { CgTime, CgEye } from "react-icons/cg";
import { BiBookmarkAlt } from "react-icons/bi";
import { Link } from "framework7-react";
import { getLink, readingTime } from "../../lib/utlis";
import store from "../../js/store";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1.2rem 1rem;
`;

const BlogCardWrapper = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
  width: 96%;
  height: 120px;
  background: white;
  box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);
  border-radius: 10px;
  border: 5px solid white;
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 130px;
  margin-left: 0.5rem;
  padding-bottom: 1rem;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: #dddddd;
  background-image: url(${({ src }) =>
    src ? src : "https://theburningdoor.com/assets/img/instagram/5.jpg"});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 13px;
  padding-top: 0.5rem;
  color: #2d2d2d;
`;

const TitleWrapper = styled.div`
  width: 205px;
  padding-right: 1rem;
`;

const Badge = styled.span`
  padding: 0.3rem 0.6rem;
  background: #ffe8ce;
  font-size: 0.8rem;
  border-radius: 10px;
  font-weight: 500;
  color: #4f2c03;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 0.5rem;
`;

const Minutes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  color: #9d9d9d;
  font-size: 0.7rem;
  font-weight: 500;
`;

const Bookmark = styled(BiBookmarkAlt)`
  position: absolute;
  top: 1.8rem;
  right: 1.8rem;
  z-index: 9;
  color: #ababab;
`;

const ViewCount = styled(Minutes)``;

const BlogCard = ({ item }) => {
  const bookmarkBlog = (blog) => {
    store.dispatch("setBookmarks", blog);
  };

  return (
    <Wrapper>
      <BlogCardWrapper noLinkClass transition="f7-parallax" href="/blog/1">
        <ImageWrapper>
          <Image src={getLink(item.photo)} />
        </ImageWrapper>
        <TitleWrapper>
          <Badge>{item.name}</Badge>
          <Title>{truncate(item.title, { length: 45 })}</Title>
          <InfoWrapper>
            <Minutes>
              <CgTime size={20} />
              {readingTime(item.content)} minutes
            </Minutes>
            <ViewCount>
              <CgEye size={18} /> {item.count}
            </ViewCount>
          </InfoWrapper>
        </TitleWrapper>
      </BlogCardWrapper>
      <Bookmark onClick={() => bookmarkBlog(item)} size={26} />
    </Wrapper>
  );
};

export default BlogCard;
