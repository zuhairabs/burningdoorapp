import React from "react";
import { Page, useStore } from "framework7-react";
import styled from "styled-components";
import BlogList from "../components/list/BlogList";
import BackButton from "../components/common/BackButton";
import PageTitle from "../components/Text/PageTitle";

const Fixed = styled.div`
  width: 100%;
  background: white;
  position: fixed;
  z-index: 4;
`;

const ListWrapper = styled.div`
  transform: translateY(90px);
  z-index: 2;
`;
const PopularPage = ({ f7router }) => {
  const isLoading = useStore("isLoading");
  const topTenBlogs = useStore("getTopTenBlogs");

  return (
    <Page name="popular">
      <Fixed>
        <BackButton router={f7router} />
        <PageTitle title={"Popular"} />
      </Fixed>
      <ListWrapper>
        {isLoading ? (
          "Loading"
        ) : (
          <BlogList data={topTenBlogs} listPadding="5rem 0" />
        )}
      </ListWrapper>
    </Page>
  );
};
export default PopularPage;
