import { Link } from "framework7-react";
import { truncate } from "lodash";
import React from "react";
import styled from "styled-components";
import { getLink } from "../../lib/utlis";
import Placeholder from "../../assets/placeholder.jpg";

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.card};
  min-width: 170px;
  height: 150px;
  border-radius: 18px;
  box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);
  position: relative;
  margin-left: ${({ isPopular }) => (isPopular ? "4rem" : "0.8rem")};

  &:last-child {
    margin-left: ${({ isPopular }) => (isPopular ? "7rem" : "0.8rem")};
  }

  ${({ isPopular }) =>
    isPopular &&
    `&:first-child {
    margin-left: 4rem;
  }`}

  ${({ isPopular }) =>
    isPopular &&
    `&:last-child::before {
      left: -5.5rem;
  }`}

  ${({ isPopular, index }) =>
    isPopular &&
    `&::before {
    content: "${index + 1}";
    position: absolute;
    top: -1.5rem;
    left: -2.5rem;
    font-size: 100px;
    font-family: 'Paytone One', sans-serif;
    z-index: -1;

    background-color: #4d4d4d;
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(45deg, #f28a10, #ffeeda);
  }`}
`;

const ImageWrapper = styled.div`
  width: 80%;
  height: 120px;
  margin-top: -2rem;
  background: ${({ theme }) => theme.cardImage};
  background-image: url(${({ src }) => (src ? src : Placeholder)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  border: 3px solid ${({ theme }) => theme.cardImage};
  box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 12px;
  padding: 0 0.5rem;
  text-align: center;
  color: ${({ theme }) => theme.textCard};
`;

const SmallCard = ({ isPopular, item, index }) => {
  return (
    <Wrapper
      isPopular={isPopular}
      index={index}
      transition="f7-parallax"
      href={`/blog/${item.id}`}
    >
      <ImageWrapper src={getLink(item.photo)} />
      <Title>{truncate(item.title, { length: 36 })}</Title>
    </Wrapper>
  );
};

export default SmallCard;
