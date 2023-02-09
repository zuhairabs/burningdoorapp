import React from "react";
import { Page, useStore } from "framework7-react";
import styled from "styled-components";
import BlogList from "../components/list/BlogList";
import BackButton from "../components/common/BackButton";
import PageTitle from "../components/Text/PageTitle";

const Fixed = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.primary};
  position: fixed;
  z-index: 4;

  &::after {
    content: "";
    background: rgb(${({ theme }) => theme.shade});
    background: linear-gradient(
      180deg,
      rgba(${({ theme }) => theme.shade}, 1) 10%,
      rgba(${({ theme }) => theme.shade}, 0.7667436489607391) 58%,
      rgba(${({ theme }) => theme.shade}, 0) 100%
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

const StyledPage = styled(Page)`
  background-color: ${({ theme }) => theme.primary};
`;

const BookmarkPage = ({ f7router }) => {
  const bookmarks = useStore("getBookmarks");

  return (
    <StyledPage name="bookmark">
      <Fixed>
        <BackButton router={f7router} />
        <PageTitle title={"Saved"} />
      </Fixed>
      <ListWrapper>
        <BlogList
          noItemTitle="No Bookmarks"
          data={bookmarks}
          listPadding="5rem 0"
        />
      </ListWrapper>
    </StyledPage>
  );
};
export default BookmarkPage;
