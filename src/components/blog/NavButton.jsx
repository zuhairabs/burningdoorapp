import { truncate } from "lodash";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

const Wrapper = styled.div`
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
  opacity: ${({ disabled }) => (disabled ? "0" : "1")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "unset")};
`;

const NavButton = ({
  disabled,
  theme,
  title,
  handleClick,
  isBackArrow,
  isNextArrow,
}) => {
  return (
    <Wrapper
      disabled={disabled}
      className="nav-buttons"
      bg={theme.lightBg}
      color={theme.color}
      onClick={handleClick}
    >
      {isBackArrow && <BsArrowLeft size={18} />}
      {truncate(title, { length: 8 })}
      {isNextArrow && <BsArrowRight size={18} />}
    </Wrapper>
  );
};

export default NavButton;
