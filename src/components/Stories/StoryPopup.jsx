import { Link, Page, Popup } from "framework7-react";
import React, { useRef } from "react";
import styled from "styled-components";
import { InstaStory } from "./InstaStory";

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  height: 100%;
  background-color: #000;
  border-radius: 10px;
`;

const StoryPopup = ({ popupClass }) => {
  const linkRef = useRef(null);

  return (
    <Popup className={popupClass} swipeToClose>
      <Page style={{ background: "#fff0de" }}>
        <div hidden>
          <Link ref={linkRef} popupClose>
            close popup
          </Link>
        </div>

        <ContentWrapper>
          <InstaStory closeRef={linkRef} />
        </ContentWrapper>
      </Page>
    </Popup>
  );
};

export default StoryPopup;
