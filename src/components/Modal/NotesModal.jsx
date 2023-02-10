import { Link, Page, Popup } from "framework7-react";
import React, { useEffect, useRef, useState } from "react";
import { CgCloseO } from "react-icons/cg";
import styled from "styled-components";
import store from "../../js/store";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 1rem 2rem;
`;

const Title = styled.h1`
  font-weight: 800;
  color: #000;
  font-size: large;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 90%;
  height: calc(100vh - 200px);
  margin-top: 50px;
  border: 4px solid #000;
  background-color: white;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 80%;
  padding: 1rem;
  margin: 1rem;
  border-color: #000;
  border-style: solid;
  border-top-width: 2px;
  border-bottom-width: 6px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-radius: 30px;
  background: #ffffb6;

  font-size: 16px;
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  margin-left: 1rem;
  letter-spacing: 1px;

  &::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 14px;
    color: #666;
    letter-spacing: 1px;
  }
`;

const TextArea = styled.textarea`
  width: 90%;
  padding: 1rem;
  margin: 1rem;
  border-color: #000;
  border-style: solid;
  border-top-width: 2px;
  border-bottom-width: 8px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-radius: 20px;

  background: #ffffb6;
  font-size: 16px;
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin-left: 1rem;
  letter-spacing: 1px;

  &::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 14px;
    color: #666;
    letter-spacing: 1px;
  }
`;

const Button = styled.button`
  width: ${({ width }) => (width ? width : "50%")};
  padding: ${({ padding }) => (padding ? padding : "1rem")};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : "unset")};
  background: #ffffb6;
  border-top-width: 2px;
  border-bottom-width: 8px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-radius: 30px;
  font-size: 16px;
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotesModal = ({
  id,
  title,
  content,
  isEditing = false,
  popupClass,
  setToastMessage,
  setShowToast,
}) => {
  const linkRef = useRef(null);
  const [titleInput, setTitleInput] = useState(null);
  const [contentInput, setContentInput] = useState(null);

  useEffect(() => {
    if (!title) {
      setTitleInput(isEditing ? title : `My Note ${id}`);
    } else {
      setTitleInput(title);
    }
    if (content) {
      setContentInput(content);
    }
  }, [id]);

  const onSaveNote = () => {
    const data = {
      id: Date.now(),
      title: titleInput,
      note: contentInput,
    };
    store.dispatch("setNotes", data);
    setTitleInput("");
    setContentInput("");
    setToastMessage && setToastMessage("Note Saved Successully");
    setShowToast && setShowToast(true);
    linkRef.current.el.click();
  };

  const onEditNote = () => {
    const data = {
      id,
      title: titleInput,
      note: contentInput,
    };
    store.dispatch("editNote", data);
    setToastMessage && setToastMessage("Note Edited Successully");
    setShowToast && setShowToast(true);
    linkRef.current.el.click();
  };

  const onDeleteNote = () => {
    store.dispatch("removeNote", id);
    setToastMessage && setToastMessage("Note Deleted Successully");
    setShowToast && setShowToast(true);
    linkRef.current.el.click();
  };

  return (
    <Popup className={popupClass} swipeToClose>
      <Page style={{ background: "#fff0de" }}>
        <HeaderWrapper>
          <Title>Add Note</Title>
          <Link ref={linkRef} popupClose>
            <CgCloseO color="#3d3d3d" size={24} />
          </Link>
        </HeaderWrapper>

        <ContentWrapper>
          <Input
            placeholder="Note title here..."
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
          <TextArea
            placeholder="Note Content here..."
            rows="20"
            value={contentInput}
            onChange={(e) => setContentInput(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {isEditing ? (
              <>
                <Button
                  marginRight="12px"
                  width="40%"
                  padding="0.8rem"
                  onClick={onEditNote}
                >
                  Edit Note
                </Button>
                <Button
                  marginRight="12px"
                  width="40%"
                  padding="0.8rem"
                  onClick={onDeleteNote}
                >
                  Delete Note
                </Button>
              </>
            ) : (
              <Button onClick={onSaveNote}>Save Note</Button>
            )}
          </div>
        </ContentWrapper>
      </Page>
    </Popup>
  );
};

export default NotesModal;
