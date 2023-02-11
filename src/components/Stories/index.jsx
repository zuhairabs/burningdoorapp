import { Link } from "framework7-react";
import { truncate } from "lodash";
import React from "react";
import styled from "styled-components";
import store from "../../js/store";
import StoryPopup from "./StoryPopup";

const StoriesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 2rem 0 0 1rem;
  width: 100%;
  overflow-x: scroll;
`;
const StoryWrapper = styled(Link)`
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(255, 185, 105, 1) 25%,
    rgba(242, 138, 16, 1) 100%
  );
  padding: 0.2rem;
`;

const Story = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.iconBg};
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.primary};

  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    z-index: 2;
    border-radius: 50%;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 90px;
  flex-grow: 0;
  flex-shrink: 0;
`;

const Text = styled.div`
  margin-top: 8px;
  color: ${({ theme }) => theme.pillText};
  font-size: 10px;
  font-weight: 600;
`;

const Video = styled.video`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const VideoWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.primary};
  position: relative;
  z-index: 1;
  background: ${({ theme }) => theme.iconBg};

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    z-index: 2;
    border-radius: 50%;
  }
`;

const Stories = ({ data = [] }) => {
  const updateCurrentStory = (index) => {
    store.dispatch("setCurrentStory", index);
  };

  return (
    <StoriesWrapper>
      {data.map((item, index) => (
        <Flex key={item?.id}>
          <StoryWrapper
            onClick={() => updateCurrentStory(index)}
            popupOpen={".story-popup"}
            key={item?.id}
          >
            {item?.stories?.[0]?.story?.type === "image" ? (
              <Story img={item?.stories?.[0]?.story?.img} />
            ) : (
              <VideoWrapper>
                <Video src={item?.stories?.[0]?.story?.video} muted />
              </VideoWrapper>
            )}
          </StoryWrapper>
          <Text>{truncate(item?.title, { length: 16 })}</Text>
        </Flex>
      ))}
      {data.length > 0 && <StoryPopup popupClass="story-popup" />}
    </StoriesWrapper>
  );
};

export default Stories;
