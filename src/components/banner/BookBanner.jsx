import { Link } from "framework7-react";
import React from "react";
import styled from "styled-components";
import BannerImg from "../../assets/banner.png";
import BookImg from "../../assets/kitab.jpg";

const Banner = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 70% 30%;
  justify-content: center;
  align-items: center;
  background: #eee;
  background: url(${BannerImg});
  background-size: cover;
  background-position: center;
  margin: 2rem 1rem 1rem 1rem;
  width: 90%;
  height: 150px;
  border-radius: 10px;
`;

const TextWrapper = styled.div`
  padding: 1rem;
  color: #212121;

  p {
    font-weight: 600;
    margin: -0.5rem 0 0.5rem 0;
  }

  h2 {
    font-size: 1rem;

    font-weight: 800;
    color: #212121;
    margin-top: -0.2rem;
  }
`;

const Cover = styled.div`
  border-radius: 5px;
  position: absolute;
  background: url(${BookImg});
  background-size: cover;
  background-position: center;
  width: 90px;
  height: 120px;
  bottom: -6px;
  right: 2rem;
  transform: rotate(10deg);
  z-index: 0;
`;

const Button = styled.div`
  background: #212121;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  width: max-content;
  border-radius: 8px;
`;

const BookBanner = () => {
  return (
    <Link style={{ width: "100%" }} transition="f7-dive" href="/kitab">
      <Banner>
        <TextWrapper>
          <h2>Book of Sulaym Ibn Qais</h2>
          <p>Oldest known Shia hadith collection.</p>
          <Button>Read Book</Button>
        </TextWrapper>
        <Cover />
      </Banner>
    </Link>
  );
};

export default BookBanner;
