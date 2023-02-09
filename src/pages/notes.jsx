import React, { useEffect, useState } from "react";
import { Page, useStore } from "framework7-react";
import styled from "styled-components";
import BackButton from "../components/common/BackButton";
import PageTitle from "../components/Text/PageTitle";
import NotesList from "../components/list/NotesList";
import Toast from "../components/Toast/Toast";

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

const NotesPage = ({ f7router }) => {
  const [toastMessage, setToastMessage] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const notes = useStore("getNotes");

  useEffect(() => {
    if (showToast) {
      setTimeout(() => setShowToast(false), 3000);
    }
  }, [showToast]);

  return (
    <StyledPage name="notes">
      <Fixed>
        <BackButton router={f7router} />
        <PageTitle title={"Notes"} />
      </Fixed>
      <ListWrapper>
        <NotesList
          noItemTitle="No Notes"
          setShowToast={setShowToast}
          setToastMessage={setToastMessage}
          data={notes}
          listPadding="4rem 0"
        />
      </ListWrapper>
      <Toast showToast={showToast} text={toastMessage} />
    </StyledPage>
  );
};
export default NotesPage;
