import React from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "framework7-react";

const Wrapper = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ color }) => (color ? color : "#3d3d3d")};
  background: ${({ bg }) => (bg ? bg : "#fff")};
  padding: 0.8rem 1.8rem;
  border-radius: 30px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
`;

const BlogControlsButton = ({ theme }) => {
  return (
    <Wrapper
      bg={theme.lightBg}
      color={theme.color}
      noLinkClass
      sheetOpen=".blog-controls-sheet"
    >
      Aa <BsThreeDotsVertical />
    </Wrapper>
  );
};

export default BlogControlsButton;
