import { Link } from "framework7-react";
import { truncate } from "lodash";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ color }) => (color ? color : "#3d3d3d")};
  background: ${({ bg }) => (bg ? bg : "#fff")};
  padding: 0.8rem 1.8rem;
  width: max-content;
  border-radius: 30px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
`;

const BackButton = ({ theme, title, router }) => {
  return (
    <Wrapper
      bg={theme.lightBg}
      color={theme.color}
      onClick={() => router.back()}
    >
      <BsArrowLeft size={18} />
      {truncate(title, { length: 8 })}
    </Wrapper>
  );
};

export default BackButton;
