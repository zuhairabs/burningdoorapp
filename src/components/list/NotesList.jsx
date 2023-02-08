import React from "react";
import styled from "styled-components";
import NoteCard from "../cards/NoteCard";

const NoteCardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: ${({ padding }) => (padding ? padding : "0.5rem 0 4rem 0")};

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NotesList = ({ data = [], listPadding = "" }) => {
  return (
    <NoteCardListWrapper padding={listPadding}>
      {data.map((item) => (
        <NoteCard item={item} key={item.id} />
      ))}
    </NoteCardListWrapper>
  );
};

export default NotesList;
