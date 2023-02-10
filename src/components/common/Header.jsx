import React from "react";
import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import { Link } from "framework7-react";
import LogoImg from "../../assets/logo.png";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  width: 95%;
  margin-top: 1rem;
  padding-left: 1rem;

  > svg {
    stroke-width: 1;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  width: 98.5%;
  align-items: center;
  gap: 0.3rem;
`;

const HeaderRight = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 18%;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const SettingsIcon = styled(FiSettings)`
  background: ${({ theme }) => theme.settingsIconBg};
  padding: 0.5rem;
  border-radius: 30px;
  color: ${({ theme }) => theme.settingsIcon};
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderLeft>
      <Link transition="f7-parallax" href="/about/">
        <Logo />
      </Link>
    </HeaderLeft>
    <HeaderRight transition="f7-parallax" href="/settings/">
      <SettingsIcon size={24} />
    </HeaderRight>
  </HeaderWrapper>
);

export default Header;
