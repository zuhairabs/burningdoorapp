import React from "react";
import styled from "styled-components";
import { BiBookmarkAlt } from "react-icons/bi";
import { Link } from "framework7-react";

const FabWrapper = styled(Link)`
  position: fixed;
  bottom: 3rem;
  right: 1.5rem;
  z-index: 99;
  background: #ffe8ce;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);
`;

const Fab = () => {
  return (
    <FabWrapper href="/bookmarks/">
      <BiBookmarkAlt color="#4f2c03" size={26} />
    </FabWrapper>
  );
};

export default Fab;
