import { isEmpty } from "lodash";
import React from "react";
import styled from "styled-components";
import BlogCard from "../cards/BlogCard";
import NoItemFound from "../../assets/search-not-found.png";

const BlogCardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: ${({ padding }) => (padding ? padding : "0.5rem 0 4rem 0")};

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NoDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 300px;
    height: 300px;
    opacity: 0.3;
  }

  span {
    font-weight: 900;
    font-size: ${({ noItemFontSize }) => noItemFontSize};
    color: #ddd;
    text-align: center;
  }
`;

const BlogList = ({
  data = [],
  listPadding = "",
  noItemTitle = "No Data",
  noItemFontSize = "2.5rem",
}) => {
  return (
    <BlogCardListWrapper padding={listPadding}>
      {isEmpty(data) ? (
        <NoDataWrapper noItemFontSize={noItemFontSize}>
          <img src={NoItemFound} alt="no-item" />
          <span>{noItemTitle}</span>
        </NoDataWrapper>
      ) : (
        data.map((item) => <BlogCard item={item} key={item.id} />)
      )}
    </BlogCardListWrapper>
  );
};

export default BlogList;
