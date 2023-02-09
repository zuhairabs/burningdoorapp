import React, { useState } from "react";
import { Link, Page, Toggle } from "framework7-react";
import styled from "styled-components";
import BackButton from "../components/common/BackButton";
import PageTitle from "../components/Text/PageTitle";
import { MdDarkMode, MdHelpOutline, MdArrowForwardIos } from "react-icons/md";
import { BiRectangle, BiDonateBlood } from "react-icons/bi";
import { CgStories } from "react-icons/cg";
import { useTheme } from "../context/ThemeContext";
import QRCode from "../assets/qrcode.png";

const Fixed = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.primary};
  position: fixed;
  z-index: 4;

  &::after {
    content: "";
    background: rgb(${({ theme }) => theme.shade});
    background: linear-gradient(
      180deg,
      rgba(${({ theme }) => theme.shade}, 1) 10%,
      rgba(${({ theme }) => theme.shade}, 0.7667436489607391) 58%,
      rgba(${({ theme }) => theme.shade}, 0) 100%
    );
    height: 45px;
    position: absolute;
    top: 100%;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  transform: translateY(150px);
  padding: 0 1rem;
  z-index: 2;
`;

const Flex = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "unset"};
  margin-left: 0.5rem;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
`;

const LinkFlex = styled(Link)`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "unset"};
  margin-left: 0.5rem;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1rem;
  font-weight: 600;
  flex: 1;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-radius: 50%;
  background: ${({ theme }) => theme.pill};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
`;

const DarkIcon = styled(MdDarkMode)`
  width: 60%;
  height: 60%;
  color: ${({ theme }) => theme.iconColor};
`;

const BannerIcon = styled(BiRectangle)`
  width: 60%;
  height: 60%;
  color: ${({ theme }) => theme.iconColor};
`;

const StoriesIcon = styled(CgStories)`
  width: 60%;
  height: 60%;
  color: ${({ theme }) => theme.iconColor};
`;

const HelpIcon = styled(MdHelpOutline)`
  width: 60%;
  height: 60%;
  color: ${({ theme }) => theme.iconColor};
`;

const DonateIcon = styled(BiDonateBlood)`
  width: 60%;
  height: 60%;
  color: ${({ theme }) => theme.iconColor};
`;

const StyledToggle = styled(Toggle)`
  --f7-toggle-width: 60px;
  --f7-toggle-height: 30px;
  --f7-toggle-inactive-color: ${({ theme }) => theme.toggleInactiveColor};

  .toggle-icon {
    border-radius: 25px;
  }
`;

const QRCodeImage = styled.img`
  height: 200px;
  border: 4px solid #f28a10;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
  margin-top: 2rem;
`;

const Version = styled.p`
  color: ${({ theme }) => theme.pillText};
  font-weight: 600;
  margin: 0;
  margin-top: 1rem;
`;

const Managed = styled.p`
  color: ${({ theme }) => theme.pillText};
  font-weight: 600;
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

const ArrowIcon = styled(MdArrowForwardIos)`
  background: ${({ theme }) => theme.pill};
  color: ${({ theme }) => theme.pillText};
  padding: 0.8rem 1.2rem;
  border-radius: 10px;
`;

const StyledPage = styled(Page)`
  background-color: ${({ theme }) => theme.primary};
`;

const SettingsPage = ({ f7router }) => {
  const { isDarkTheme, setIsDarkTheme } = useTheme();
  const [isHideBanner, setIsHideBanner] = useState();
  const [isHideStories, setIsHideStories] = useState();

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const toggleBanner = () => {
    setIsHideBanner((prev) => !prev);
  };

  const toggleStories = () => {
    setIsHideStories((prev) => !prev);
  };

  return (
    <StyledPage name="settings">
      <Fixed>
        <BackButton router={f7router} />
        <PageTitle title={"Settings"} />
      </Fixed>
      <Wrapper>
        <Flex marginBottom="1rem" justifyContent="space-between">
          <Flex justifyContent="flex-start">
            <IconWrapper>
              <DarkIcon />
            </IconWrapper>
            <Text>Dark Mode</Text>
            <StyledToggle checked={isDarkTheme} onToggleChange={toggleTheme} />
          </Flex>
        </Flex>
        <Flex marginBottom="1rem" justifyContent="space-between">
          <Flex justifyContent="flex-start">
            <IconWrapper>
              <BannerIcon />
            </IconWrapper>
            <Text>Hide Banner</Text>
            <StyledToggle
              checked={isHideBanner}
              onToggleChange={toggleBanner}
            />
          </Flex>
        </Flex>
        <Flex marginBottom="1rem" justifyContent="space-between">
          <Flex justifyContent="flex-start">
            <IconWrapper>
              <StoriesIcon />
            </IconWrapper>
            <Text>Hide Stories</Text>
            <StyledToggle
              checked={isHideStories}
              onToggleChange={toggleStories}
            />
          </Flex>
        </Flex>
        <LinkFlex
          href="https://theburningdoor.com/contact.php"
          external
          marginBottom="1rem"
          justifyContent="space-between"
        >
          <Flex justifyContent="flex-start">
            <IconWrapper>
              <HelpIcon />
            </IconWrapper>
            <Text>Help</Text>
            <ArrowIcon size={18} />
          </Flex>
        </LinkFlex>
        <LinkFlex
          href="https://theburningdoor.com/contribute.php"
          external
          marginBottom="1rem"
          justifyContent="space-between"
        >
          <Flex justifyContent="flex-start">
            <IconWrapper>
              <DonateIcon />
            </IconWrapper>
            <Text>Contribute</Text>
            <ArrowIcon size={18} />
          </Flex>
        </LinkFlex>
        <Flex justifyContent="center">
          <QRCodeImage src={QRCode} alt="qrcode" />
        </Flex>
        <Flex flexDirection="column" justifyContent="center">
          <Version>The Burning Door v1.0.0</Version>
          <Managed>
            Developed and Managed By{" "}
            <StyledLink external>Shia Channel</StyledLink>
          </Managed>
        </Flex>
      </Wrapper>
    </StyledPage>
  );
};
export default SettingsPage;
