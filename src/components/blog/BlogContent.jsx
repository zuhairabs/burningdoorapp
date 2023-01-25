import React from "react";
import styled from "styled-components";
import { appDetails } from "../../constants/about";

const Wrapper = styled.div`
  width: 86%;
  padding: 0 1.5rem;
`;

const Subtitle = styled.p`
  font-weight: 600;
  color: rgb(130, 130, 130);
  font-size: 16px;
`;

const Title = styled.h1`
  margin: -0.6rem 0 0 0;
  font-size: 24px;
  font-weight: 800;
  color: ${({ color }) => (color ? color : "#111")};
`;

const Content = styled.div`
  margin-top: 1.5rem;
  font-weight: 600;
  font-size: ${({ size }) => (size ? `${size}px` : "15px")};
  color: ${({ color }) => (color ? color : "rgb(90, 90, 90)")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "inherit")} > h6 {
    font-size: 15px;
  }

  > .quote {
    background-color: ${({ quoteColor }) => (quoteColor ? quoteColor : "#fff")};
    padding: 20px;
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.01);

    > p {
      font-weight: 700;

      background-color: #1d1d1d;
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(45deg, #f28a10, #fbc586);

      > small {
        margin-top: 10px;
        font-size: 10px;
      }
    }
  }
`;

const BlogContent = ({ theme, style, fontSize }) => {
  return (
    <Wrapper>
      <Subtitle>About</Subtitle>
      <Title color={theme.color}>The Burning Door </Title>
      <Content
        fontFamily={style}
        size={fontSize}
        bg={theme.bg}
        color={theme.lightColor}
        quoteColor={theme.quoteColor}
        dangerouslySetInnerHTML={{ __html: appDetails.description }}
      />
    </Wrapper>
  );
};

export default BlogContent;
