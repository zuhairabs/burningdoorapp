import React from "react";
import styled from "styled-components";
import NoteCard from "../cards/NoteCard";
import NoItemFound from "../../assets/search-not-found.png";
import { isEmpty } from "lodash";

const NoteCardListWrapper = styled.div`
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
    font-size: 2.5rem;
    color: ${({ theme }) => theme.cardImage};
  }
`;

const NotesList = ({
  data = [],
  listPadding = "",
  noItemTitle = "No Data",
  setShowToast,
  setToastMessage,
}) => {
  return (
    <NoteCardListWrapper padding={listPadding}>
      {isEmpty(data) ? (
        <NoDataWrapper>
          <img src={NoItemFound} alt="no-item" />
          <span>{noItemTitle}</span>
        </NoDataWrapper>
      ) : (
        data.map((item) => (
          <NoteCard
            setShowToast={setShowToast}
            setToastMessage={setToastMessage}
            item={item}
            key={item.id}
          />
        ))
      )}
    </NoteCardListWrapper>
  );
};

export default NotesList;
