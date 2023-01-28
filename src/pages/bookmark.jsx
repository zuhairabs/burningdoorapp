import React from "react";
import { Page } from "framework7-react";
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

const BookmarkPage = ({ f7router }) => {
  return (
    <Page name="bookmark">
      <Fixed>
        <BackButton router={f7router} />
        <PageTitle title={"Saved"} />
      </Fixed>
      <ListWrapper>
        <BlogList listPadding="5rem 0" />
      </ListWrapper>
    </Page>
  );
};
export default BookmarkPage;