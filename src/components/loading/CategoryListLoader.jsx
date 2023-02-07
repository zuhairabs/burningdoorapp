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
  padding: 0.8rem 2rem;
  font-size: 0.8rem;
`;

const CategoryListLoader = ({}) => {
  return (
    <CategoryListWrapper>
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <CategoryListPill
          transition="f7-parallax"
          noLinkClass
          href={`/category/${item.id}`}
          key={item.id}
        />
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryListLoader;
