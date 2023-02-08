import React, { useEffect, useState } from "react";
import { Page, useStore } from "framework7-react";
import styled from "styled-components";
import BackButton from "../components/common/BackButton";
import PageTitle from "../components/Text/PageTitle";
import NotesList from "../components/list/NotesList";
import Toast from "../components/Toast/Toast";

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
    <Page name="notes">
      <Fixed>
        <BackButton router={f7router} />
        <PageTitle title={"Notes"} />
      </Fixed>
      <ListWrapper>
        <NotesList
          setShowToast={setShowToast}
          setToastMessage={setToastMessage}
          data={notes}
          listPadding="4rem 0"
        />
      </ListWrapper>
      <Toast showToast={showToast} text={toastMessage} />
    </Page>
  );
};
export default NotesPage;
