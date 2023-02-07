import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 12px;
  font-weight: 600;
  color: #3d3d3d;
  background: #fff;
  padding: 0.8rem 1.8rem;
  width: max-content;
  border-radius: 30px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
  z-index: 99;
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: all 0.3s ease-in-out;
  pointer-events: none;
`;

const Toast = ({ text = "", showToast }) => {
  return <Wrapper show={showToast}>{text}</Wrapper>;
};

export default Toast;
