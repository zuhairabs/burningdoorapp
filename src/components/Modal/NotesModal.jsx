import { Link, Page, Popup } from "framework7-react";
import React, { useEffect, useState } from "react";
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

  &::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 14px;
    color: #666;
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
  font-weight: 800;
  margin-left: 1rem;

  &::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 14px;
    color: #666;
  }
`;

const Button = styled.button`
  width: 50%;
  padding: 1rem;
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

const NotesModal = ({ id, content }) => {
  const [titleInput, setTitleInput] = useState(null);
  const [contentInput, setContentInput] = useState(null);

  useEffect(() => {
    if (content) {
      setTitleInput(`My Note ${id}`);
      setContentInput(content);
    }
  }, [content]);

  const onSaveNote = () => {
    const data = {
      id: Date.now(),
      title: titleInput,
      note: contentInput,
    };
    store.dispatch("setNotes", data);
  };

  return (
    <Popup className="demo-popup-swipe" swipeToClose>
      <Page style={{ background: "#fff0de" }}>
        <HeaderWrapper>
          <Title>Add Note</Title>
          <Link noLinkClass popupClose>
            <CgCloseO color="#3d3d3d" size={24} />
          </Link>
        </HeaderWrapper>

        <ContentWrapper>
          <Input
            placeholder="Note title here..."
            value={titleInput}
            onChange={setTitleInput}
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
            <Button onClick={onSaveNote}>Save Note</Button>
          </div>
        </ContentWrapper>
      </Page>
    </Popup>
  );
};

export default NotesModal;
