import React from "react";
import { Button, Link, Page, useStore } from "framework7-react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { shareData } from "../constants/about";
import AboutLogo from "../assets/logo_large.jpg";

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
  background-image: url(${AboutLogo});
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
  background-image: url(${AboutLogo});
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
  font-size: 0.9rem;
  color: #7d7d7d;
  text-align: justify;
`;

const Title = styled.h1`
  font-size: 1.5rem;
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
  background: #eee;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #7d7d7d;
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

const AboutPage = ({ f7router }) => {
  const shareApp = async () => {
    if (window.navigator.share) {
      window.navigator.share(shareData);
    } else {
      // TODO: Change alert to snackbar
      alert("Your device do not support native share");
    }
  };

  const appDetails = useStore("getAppDetails");

  return (
    <Page name="about">
      <MainWrapper>
        <ImageWrapper>
          <Wrapper>
            <LeftArrow
              onClick={() => f7router.back()}
              color="white"
              size={20}
            />
          </Wrapper>
          <Image />
        </ImageWrapper>
        <ContentWrapper>
          <Title>{appDetails.name}</Title>
          <PillWrapper>
            <Pill
              noLinkClass
              transition="f7-dive"
              external
              href={appDetails.url}
            >
              <BsGlobe size={15} /> {appDetails.tag}
            </Pill>
            <Pill noLinkClass transition="f7-dive" href="" onClick={shareApp}>
              <FiShare size={15} /> Share App
            </Pill>
          </PillWrapper>
          <Text>{appDetails.shortDesc}</Text>
          <StyledButton transition="f7-push" href="/about-more/" fill>
            Read More
          </StyledButton>
        </ContentWrapper>
      </MainWrapper>
    </Page>
  );
};
export default AboutPage;
