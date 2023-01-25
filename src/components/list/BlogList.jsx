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

const BlogList = ({
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
  listPadding = "",
}) => {
  return (
    <BlogCardListWrapper padding={listPadding}>
      {list.map((item, index) => (
        <BlogCard item={item} key={index} />
      ))}
    </BlogCardListWrapper>
  );
};

export default BlogList;
