import React from "react";
import styled from "styled-components";
import SmallCard from "../cards/SmallCard";

const SmallCardListWrapper = styled.div`
  display: flex;
  /* gap: ${({ isPopular }) => (isPopular ? "4rem" : "0.8rem")}; */
  width: calc(100vw - 45px);
  margin-top: 1rem;
  overflow-y: scroll;
  padding: 2rem 1rem 1rem 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SmallCardList = ({ data = [], isPopular = false }) => {
  return (
    <SmallCardListWrapper isPopular={isPopular}>
      {data.map((item, index) => (
        <SmallCard
          key={item.id}
          isPopular={isPopular}
          item={item}
          index={index}
        />
      ))}
    </SmallCardListWrapper>
  );
};

export default SmallCardList;
