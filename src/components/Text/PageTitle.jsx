import React from "react";
import styled from "styled-components";

const Heading = styled.div`
  margin: ${({ margin }) => margin};
  font-size: 40px;
  font-weight: 800;

  background-color: #4d4d4d;
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #f28a10, #ffeeda);
`;

const PageTitle = ({ title, margin = "0 1.5rem 0 1.5rem" }) => {
  return <Heading margin={margin}>{title}</Heading>;
};

export default PageTitle;
