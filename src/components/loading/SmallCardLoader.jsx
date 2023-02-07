import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: white;
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
    content: "${index}";
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
  background: #dddddd;
  border-radius: 15px;
  border: 3px solid white;
  box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  color: #2d2d2d;
  background: #eee;
  padding: 0.5rem 3rem;
  border-radius: 10px;
`;

const SmallCardListWrapper = styled.div`
  display: flex;
  /* gap: ${({ isPopular }) => (isPopular ? "4rem" : "0.8rem")}; */
  width: 85%;
  margin-top: 1rem;
  overflow-y: scroll;
  padding: 2rem 1rem 1rem 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SmallCardLoader = ({ isPopular }) => {
  return (
    <SmallCardListWrapper isPopular>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <Wrapper key={item} isPopular={isPopular} index={item}>
          <ImageWrapper src={""} />
          <Title />
        </Wrapper>
      ))}
    </SmallCardListWrapper>
  );
};

export default SmallCardLoader;
