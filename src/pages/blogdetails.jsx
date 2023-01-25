import { Page, Sheet, f7 } from "framework7-react";
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
`;

const ContentWrapper = styled.div`
  transform: translateY(90px);
  padding-bottom: 3rem;
`;

const BlogDetailsPage = ({ f7router }) => {
  const store = f7.store;
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

  return (
    <Page
      style={{ background: getTheme().bg ? getTheme().bg : "#f7f7f7" }}
      name="about-more"
    >
      <Wrapper bg={getTheme().bg}>
        <Header bg={getTheme().bg}>
          <BackButton theme={getTheme()} title="Back" router={f7router} />
          <BlogControlsButton theme={getTheme()} />
        </Header>
        <ContentWrapper>
          <BlogContent
            style={getStyle()}
            fontSize={size?.value}
            theme={getTheme()}
          />
        </ContentWrapper>
      </Wrapper>
      <Sheet
        className="demo-sheet-swipe-to-close"
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
