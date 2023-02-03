import React from "react";
import styled from "styled-components";
import BlogCard from "../cards/BlogCard";

const BlogCardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: ${({ padding }) => (padding ? padding : "0.5rem 0 4rem 0")};

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BlogList = ({ data = [], listPadding = "" }) => {
  return (
    <BlogCardListWrapper padding={listPadding}>
      {data.map((item) => (
        <BlogCard item={item} key={item.id} />
      ))}
    </BlogCardListWrapper>
  );
};

export default BlogList;
