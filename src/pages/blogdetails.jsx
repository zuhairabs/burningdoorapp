import { Page, Sheet, f7, useStore } from "framework7-react";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackButton from "../components/blog/BackButton";
import BlogContent from "../components/blog/BlogContent";
import BlogControls from "../components/blog/BlogControls";
import BlogControlsButton from "../components/blog/BlogControlsButton";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ bg }) => (bg ? bg : "#f7f7f7")};
`;

const Header = styled.div`
  width: 90%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1rem;
  background: ${({ bg }) => (bg ? bg : "#f7f7f7")};
  z-index: 10;
  padding-top: 1.5rem;
  padding-bottom: 1rem;

  &::after {
    content: "";
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(${({ shade }) => (shade ? shade : "247, 247, 247")}, 1) 10%,
      rgba(
          ${({ shade }) => (shade ? shade : "247, 247, 247")},
          0.7667436489607391
        )
        58%,
      rgba(${({ shade }) => (shade ? shade : "247, 247, 247")}, 0) 100%
    );
    height: 45px;
    position: absolute;
    top: 100%;
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  transform: translateY(90px);
  padding-bottom: 3rem;
`;

const BlogDetailsPage = ({ f7router, id }) => {
  const store = f7.store;
  const [blog, setSingleBlog] = useState({
    title: "",
    photo: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const allBlogs = useStore("getBlogs");
  const [theme, setTheme] = useState(null);
  const [size, setSize] = useState(null);
  const [style, setStyle] = useState(null);
  const [refetch, setRefetch] = useState(null);

  const getTheme = () => {
    const curTheme = theme?.options.filter((item) => item.isSelected)[0];
    return {
      bg: curTheme?.bg,
      color: curTheme?.color,
      lightBg: curTheme?.lightBg,
      lightColor: curTheme?.lightColor,
      quoteColor: curTheme?.quoteColor,
      shadeColor: curTheme?.shadeColor,
    };
  };

  const getStyle = () => {
    const curStyle = style?.options.filter((item) => item.isSelected)[0];
    return curStyle?.value;
  };

  useEffect(() => {
    setSize(store.state.blogControls[0]);
    setStyle(store.state.blogControls[1]);
    setTheme(store.state.blogControls[2]);
  }, []);

  useEffect(() => {
    if (refetch) {
      setSize(store.state.blogControls[0]);
      setStyle(store.state.blogControls[1]);
      setTheme(store.state.blogControls[2]);
      setRefetch(false);
    }
  }, [refetch]);

  const getSingleBlog = () => {
    const blog = allBlogs.filter((blog) => blog.id === id)[0];
    setSingleBlog(!isEmpty(blog) ? blog : {});
    setLoading(false);
  };

  useEffect(() => {
    getSingleBlog();
  }, []);

  return (
    <Page
      style={{ background: getTheme().bg ? getTheme().bg : "#f7f7f7" }}
      name="about-more"
    >
      <Wrapper bg={getTheme().bg}>
        <Header shade={getTheme().shadeColor} bg={getTheme().bg}>
          <BackButton theme={getTheme()} title="Back" router={f7router} />
          <BlogControlsButton theme={getTheme()} />
        </Header>
        <ContentWrapper>
          {loading ? (
            <>Loading</>
          ) : (
            <BlogContent
              contentMargin="0"
              title={blog.title}
              content={blog.content}
              subtitle={blog.category_name}
              style={getStyle()}
              fontSize={size?.value}
              theme={getTheme()}
            />
          )}
        </ContentWrapper>
      </Wrapper>
      <Sheet
        className="blog-controls-sheet"
        style={{ height: "auto", "--f7-sheet-bg-color": "#fff" }}
        swipeToClose
        backdrop
      >
        <BlogControls setRefetch={setRefetch} />
      </Sheet>
    </Page>
  );
};

export default BlogDetailsPage;
