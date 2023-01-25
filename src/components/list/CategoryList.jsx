import { Link } from "framework7-react";
import React from "react";
import styled from "styled-components";

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 1rem 2rem 1.5rem;
`;

const CategoryListPill = styled(Link)`
  background: #eee;
  color: #4d4d4d;
  font-weight: 600;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
`;

const CategoryList = ({
  list = [
    "Batriyyah",
    "Fadak",
    "Kitab Sulaym ",
    "Authentic Narrations",
    "Tabarrah",
    "Editor's Choice",
    "Wahabism",
    "Hadith Analysis",
  ],
}) => {
  return (
    <CategoryListWrapper>
      {list.map((item, index) => (
        <CategoryListPill
          transition="f7-parallax"
          noLinkClass
          href={`/category/${item}`}
          key={index}
        >
          {item}
        </CategoryListPill>
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
