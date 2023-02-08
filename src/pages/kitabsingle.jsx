import { Page, Sheet, f7 } from "framework7-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogContent from "../components/blog/BlogContent";
import BlogControls from "../components/blog/BlogControls";
import { getTitle } from "../constants/kitab_titles";
import { getBookContent } from "../constants/kitab_content";
import BlogControlsAltButton from "../components/blog/BlogControlsAlt";
import NotesModal from "../components/Modal/NotesModal";
import NavButton from "../components/blog/NavButton";
import Toast from "../components/Toast/Toast";

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

const NavbButtons = styled.div`
  position: fixed;
  bottom: 2rem;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-around;
  transition: all 0.3s ease-in-out;
  opacity: ${({ opacity }) => (opacity ? opacity : "0")};
`;

const KitabSinglePage = ({ f7router, id }) => {
  const store = f7.store;
  const [theme, setTheme] = useState(null);
  const [size, setSize] = useState(null);
  const [style, setStyle] = useState(null);
  const [refetch, setRefetch] = useState(null);
  const [contentText, setContentText] = useState(null);
  const [showNavButtons, setShowNavButtons] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(false);

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

  const title = getTitle(parseInt(id));
  const page = getBookContent(parseInt(id));

  const handleShare = () => {
    const shareData = {
      title: title.title,
      text: contentText,
      url: `https://theburningdoor.com/book/${page.page_no}`,
    };
    console.log({ shareData });
    if (window.navigator.share) {
      window.navigator.share();
    } else {
      setToastMessage("Your device do not support native share");
      setShowToast(true);
    }
  };

  useEffect(() => {
    if (document) {
      setContentText(document.querySelector(".html-content").innerText);
    }

    const body = document.querySelector("body");
    body.addEventListener("click", (e) => {
      if (!e.target.classList.value.includes("nav-buttons")) {
        setShowNavButtons((prev) => !prev);
      }
    });
    return () => {
      body.removeEventListener("click", setShowNavButtons(false));
    };
  }, [document]);

  useEffect(() => {
    if (showToast) {
      setTimeout(() => setShowToast(false), 3000);
    }
  }, [showToast]);

  return (
    <Page
      style={{ background: getTheme().bg ? getTheme().bg : "#f7f7f7" }}
      name="kitab-single"
    >
      <Wrapper bg={getTheme().bg}>
        <Header shade={getTheme().shadeColor} bg={getTheme().bg}>
          <NavButton
            isBackArrow
            theme={getTheme()}
            title="Chapters"
            handleClick={() =>
              f7router.navigate("/kitab/", {
                transition: "f7-parallax",
              })
            }
          />
          <BlogControlsAltButton
            popupClass={`.add-note-popup-${page.page_no}`}
            handleShare={handleShare}
            theme={getTheme()}
          />
        </Header>
        <ContentWrapper>
          <BlogContent
            noTitle
            content={page.content}
            subtitle={`Page ${title.id <= 10 ? "0" : ""}${title.id}`}
            style={getStyle()}
            fontSize={size?.value}
            theme={getTheme()}
          />
        </ContentWrapper>
        <NavbButtons opacity={showNavButtons ? "1" : "0"}>
          <NavButton
            disabled={page.page_no === 1}
            isBackArrow
            theme={getTheme()}
            title="Prev"
            handleClick={() =>
              f7router.navigate(`/kitab/${page.page_no - 1}`, {
                transition: "f7-parallax",
              })
            }
          />
          <NavButton
            disabled={page.page_no === 530}
            isNextArrow
            theme={getTheme()}
            title="Next"
            handleClick={() =>
              f7router.navigate(`/kitab/${page.page_no + 1}`, {
                transition: "f7-parallax",
              })
            }
          />
        </NavbButtons>
      </Wrapper>

      <div
        className="html-content"
        dangerouslySetInnerHTML={{ __html: page.content }}
        hidden
      />
      <Sheet
        className="blog-controls-sheet"
        style={{ height: "auto", "--f7-sheet-bg-color": "#fff" }}
        swipeToClose
        backdrop
      >
        <BlogControls setRefetch={setRefetch} />
      </Sheet>
      <NotesModal
        setShowToast={setShowToast}
        setToastMessage={setToastMessage}
        popupClass={`add-note-popup-${page.page_no}`}
        id={page.page_no}
        content={contentText}
      />
      <Toast showToast={showToast} text={toastMessage} />
    </Page>
  );
};

export default KitabSinglePage;
