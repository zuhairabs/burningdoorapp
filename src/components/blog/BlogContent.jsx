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
  margin-top: 2rem;
`;

const Title = styled.h1`
  margin: -0.6rem 0 0 0;
  font-size: 24px;
  font-weight: 800;
  color: ${({ color }) => (color ? color : "#111")};
`;

const Content = styled.div`
  margin-top: ${({ contentMargin }) => contentMargin};
  font-weight: 600;
  font-size: ${({ size }) => (size ? `${size}px` : "15px")};
  color: ${({ color }) => (color ? color : "rgb(90, 90, 90)")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "inherit")} > h6 {
    font-size: 15px;
  }

  .chapter-title a {
    margin: -0.6rem 0 0 0;
    font-size: 20px;
    font-weight: 800;
    color: ${({ color }) => (color ? color : "#111")};
  }

  .chapter-title-decoration-below,
  .chapter-title-decoration-above,
  .chapter-title-corner-decorations {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
  }

  iframe {
    width: 100%;
    height: 100%;
  }

  video {
    width: 100%;
    height: 100%;
  }

  p > span {
    font-size: ${({ size }) =>
      size ? `${size}px !important` : "15px !important"};
  }

  a {
    color: ${({ color }) => (color ? color : "rgb(90, 90, 90)")};
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

const BlogContent = ({
  theme,
  style,
  fontSize,
  title = "The Burning Door",
  subtitle = "About",
  content = appDetails.description,
  noTitle = false,
  contentMargin = "-1.5rem",
}) => {
  return (
    <Wrapper>
      <Subtitle>{subtitle}</Subtitle>
      {!noTitle && <Title color={theme.color}>{title}</Title>}
      <Content
        contentMargin={contentMargin}
        fontFamily={style}
        size={fontSize}
        bg={theme.bg}
        color={theme.lightColor}
        quoteColor={theme.quoteColor}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Wrapper>
  );
};

export default BlogContent;
