import React from "react";
import styled from "styled-components";

const Heading = styled.div`
  margin: 0 1.5rem 2rem 1.5rem;
  font-size: 40px;
  font-weight: 800;

  background-color: #4d4d4d;
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #f28a10, #ffeeda);
`;

const PageTitle = ({ title }) => {
  return <Heading>{title}</Heading>;
};

export default PageTitle;
