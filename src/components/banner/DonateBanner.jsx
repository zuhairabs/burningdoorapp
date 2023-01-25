import React from "react";
import styled from "styled-components";
import BannerImg from "../../assets/banner.jpg";

const Banner = styled.div`
  background: #dddddd;
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 2.5rem 1rem;
  width: 360px;
  height: 100px;
  border-radius: 10px;
`;

const DonateBanner = () => {
  return <Banner />;
};

export default DonateBanner;
