import React from "react";
import { BiWifiOff } from "react-icons/bi";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 6rem;
  left: 0;
  right: 0;
  margin: auto;
  background: #2b2b2b;
  padding: 0.6rem 1rem;
  width: max-content;
  border-radius: 35px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
  z-index: 5000;
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: all 0.3s ease-in-out;
  pointer-events: none;

  h2 {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    margin: 0;
  }

  p {
    font-size: 12px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }
`;

const Icon = styled(BiWifiOff)`
  color: #fff;
  margin-right: 0.8rem;
  width: 30px;
  height: 30px;
`;

const OfflineToast = ({ showToast }) => {
  return (
    <Wrapper show={showToast}>
      <Icon />
      <div>
        <h2>It seems that you're offline!</h2>
        <p>Please check your internet connection</p>
      </div>
    </Wrapper>
  );
};

export default OfflineToast;
