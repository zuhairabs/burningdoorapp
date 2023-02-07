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

  &::after {
    content: "";
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 10%,
      rgba(255, 255, 255, 0.7667436489607391) 58%,
      rgba(255, 255, 255, 0) 100%
    );
    height: 45px;
    position: absolute;
    top: 100%;
    width: 100%;
  }
`;

const ListWrapper = styled.div`
  transform: translateY(90px);
  z-index: 2;
`;

const BookmarkPage = ({ f7router }) => {
  const bookmarks = useStore("getBookmarks");

  return (
    <Page name="bookmark">
      <Fixed>
        <BackButton router={f7router} />
        <PageTitle title={"Saved"} />
      </Fixed>
      <ListWrapper>
        <BlogList data={bookmarks} listPadding="5rem 0" />
      </ListWrapper>
    </Page>
  );
};
export default BookmarkPage;
