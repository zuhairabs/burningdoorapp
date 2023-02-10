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
  background: ${({ theme }) => theme.pill};
  color: ${({ theme }) => theme.pillText};
  font-weight: 600;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
`;

const CategoryList = ({ data = [] }) => {
  return (
    <CategoryListWrapper>
      {data.map((item) => (
        <CategoryListPill
          transition="f7-parallax"
          href={`/category/${item.id}`}
          key={item.id}
        >
          {item.name}
        </CategoryListPill>
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
