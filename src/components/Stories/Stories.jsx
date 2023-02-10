import { Link } from "framework7-react";
import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  padding: 0;
  color: #fff;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const CustomSeeMore = styled(Link)`
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1001;
  text-align: center;
  font-size: 1rem;
  bottom: 20px;
  position: absolute;
  padding: 1rem;
  left: 0;
  right: 0;
  margin: auto;
  font-weight: 600;
  width: 50%;
  border-radius: 35px;
`;

const CustomHeader = styled.div`
  max-width: 50%;
  position: absolute;
  top: 40px;
  z-index: 98;
  padding: 0 1rem;
  left: 0;
  right: 0;
  margin: auto;
  width: max-content;

  p {
    font-weight: 600;
    font-size: 1rem;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    padding: 0.5rem 1rem;
    border-radius: 35px;
  }
`;

const Icon = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  position: absolute;
  top: 58px;
  z-index: 1001;
  right: 2rem;
`;

const Story = ({ story }) => {
  return (
    <ContentWrapper>
      <Image src={story.data.img} />
      <CustomHeader>
        <p>{story.data.title}</p>
      </CustomHeader>
      <Icon popupClose>
        <IoClose size={22} strokeWidth={4} />
      </Icon>
      <CustomSeeMore href={story.data.url} external>
        Read More →
      </CustomSeeMore>
    </ContentWrapper>
  );
};

export const stories = [
  {
    content: Story,
    data: {
      title: "Who Killed Fatima",
      img: "https://thumbs.dreamstime.com/b/scenery-mobile-wallpaper-nature-background-bamboo-river-portrait-view-scenery-mobile-wallpaper-nature-background-113640850.jpg",
      url: "",
    },
  },
  {
    content: Story,
    data: {
      title: "Who Killed Fatima",
      img: "https://thumbs.dreamstime.com/b/scenery-mobile-wallpaper-nature-background-bamboo-river-portrait-view-scenery-mobile-wallpaper-nature-background-113640850.jpg",
      url: "",
    },
  },
  {
    content: Story,
    data: {
      title: "Who Killed Fatima",
      img: "https://thumbs.dreamstime.com/b/scenery-mobile-wallpaper-nature-background-bamboo-river-portrait-view-scenery-mobile-wallpaper-nature-background-113640850.jpg",
      url: "",
    },
  },
];

export const STORIES = [
  {
    id: 1,
    title: "something",
    data: stories,
  },
  {
    id: 2,
    title: "something 2",
    data: stories,
  },
  {
    id: 3,
    title: "something 3",
    data: stories,
  },
];
