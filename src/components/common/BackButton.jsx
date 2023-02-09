import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.seeMore};
  margin: 1.5rem 1rem 0.5rem 1rem;
  background: ${({ theme }) => theme.pill};
  padding: 0.5rem 1rem;
  width: max-content;
  border-radius: 30px;
`;

const BackButton = ({ router }) => {
  return (
    <Wrapper onClick={() => router.back()}>
      <BsArrowLeft size={18} />
      back
    </Wrapper>
  );
};

export default BackButton;
