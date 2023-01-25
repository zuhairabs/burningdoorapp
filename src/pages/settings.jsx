import React from "react";
import { Page } from "framework7-react";
import styled from "styled-components";
import BackButton from "../components/common/BackButton";
import PageTitle from "../components/Text/PageTitle";

const Fixed = styled.div`
  width: 100%;
  background: white;
  position: fixed;
  z-index: 4;
`;

const SettingsPage = ({ f7router }) => {
  return (
    <Page name="settings">
      <Fixed>
        <BackButton router={f7router} />
        <PageTitle title={"Settings"} />
      </Fixed>
    </Page>
  );
};
export default SettingsPage;
