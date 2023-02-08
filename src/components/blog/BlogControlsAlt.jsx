import React from "react";
import styled from "styled-components";
import { BsShareFill, BsThreeDotsVertical } from "react-icons/bs";
import { Button, Link } from "framework7-react";
import { AiOutlineFileAdd } from "react-icons/ai";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  font-size: 12px;
  font-weight: 600;
  background: ${({ bg }) => (bg ? bg : "#fff")};
  padding: 0.8rem 1.8rem;
  border-radius: 30px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
`;

const IconWrapper = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ color }) => (color ? color : "#3d3d3d")};
`;

const BlogControlsAltButton = ({ theme, handleShare, popupClass }) => {
  return (
    <Wrapper bg={theme.lightBg}>
      <IconWrapper
        color={theme.color}
        noLinkClass
        sheetOpen=".blog-controls-sheet"
      >
        Aa <BsThreeDotsVertical />
      </IconWrapper>
      <Link noLinkClass popupOpen={popupClass}>
        <AiOutlineFileAdd
          color={theme.color ? theme.color : "#3d3d3d"}
          size={20}
        />
      </Link>
      <BsShareFill
        onClick={handleShare}
        color={theme.color ? theme.color : "#3d3d3d"}
        size={16}
      />
    </Wrapper>
  );
};

export default BlogControlsAltButton;
