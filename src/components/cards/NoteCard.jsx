import { truncate } from "lodash";
import React from "react";
import styled from "styled-components";
import { Link } from "framework7-react";
import { IoNewspaperOutline } from "react-icons/io5";
import NotesModal from "../Modal/NotesModal";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 1rem;
`;

const NoteCardWrapper = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  height: 120px;
  background: ${({ theme }) => theme.card};
  box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);
  border-radius: 15px;
  border: 5px solid ${({ theme }) => theme.primary};
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin-left: 0.5rem;
  margin-top: 1rem;
  border-radius: 50%;
  border-radius: 50%;
  background: ${({ theme }) => theme.iconBg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled(IoNewspaperOutline)`
  width: 60%;
  height: 60%;
  color: ${({ theme }) => theme.iconColor};
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  padding-top: 0.8rem;
  padding-left: 0.2rem;
  color: ${({ theme }) => theme.textCard};
`;

const TitleWrapper = styled.div`
  width: 70%;
  padding-right: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 0.5rem;
  margin-top: -10px;
`;

const SubTitle = styled.p`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.textCardLight};
  font-size: 0.8rem;
  font-weight: 600;
`;

const NoteCard = ({ item, setShowToast, setToastMessage }) => {
  return (
    <Wrapper>
      <NoteCardWrapper popupOpen={`.note-popup-${item.id}`}>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <TitleWrapper>
          <Title>{truncate(item.title, { length: 27 })}</Title>
          <InfoWrapper>
            <SubTitle>{truncate(item.note, { length: 90 })}</SubTitle>
          </InfoWrapper>
        </TitleWrapper>
      </NoteCardWrapper>
      <NotesModal
        setShowToast={setShowToast}
        setToastMessage={setToastMessage}
        title={item.title}
        isEditing
        popupClass={`note-popup-${item.id}`}
        id={item.id}
        content={item.note}
      />
    </Wrapper>
  );
};

export default NoteCard;
