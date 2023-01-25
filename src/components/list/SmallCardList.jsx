import React from "react";
import styled from "styled-components";
import SmallCard from "../cards/SmallCard";

const SmallCardListWrapper = styled.div`
  display: flex;
  gap: ${({ isPopular }) => (isPopular ? "4rem" : "0.8rem")};
  width: 85%;
  margin-top: 1rem;
  overflow-y: scroll;
  padding: 2rem 1rem 1rem 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SmallCardList = ({
  list = [
    "Why Aisha (la) poisoned the Prophet (saws) and not the Jewish woman",
    "Why Aisha (la) poisoned the Prophet (saws) and not the Jewish woman",
    "Why Aisha (la) poisoned the Prophet (saws) and not the Jewish woman",
    "Why Aisha (la) poisoned the Prophet (saws) and not the Jewish woman",
    "Why Aisha (la) poisoned the Prophet (saws) and not the Jewish woman",
    "Why Aisha (la) poisoned the Prophet (saws) and not the Jewish woman",
    "Why Aisha (la) poisoned the Prophet (saws) and not the Jewish woman",
    "Why Aisha (la) poisoned the Prophet (saws) and not the Jewish woman",
  ],
  isPopular = false,
}) => {
  return (
    <SmallCardListWrapper isPopular={isPopular}>
      {list.map((item, index) => (
        <SmallCard isPopular={isPopular} item={item} index={index} />
      ))}
    </SmallCardListWrapper>
  );
};

export default SmallCardList;
