import React from "react";
import { useTabs } from "../../hooks/useTabs";
import styled from "styled-components";
import BlogList from "../list/BlogList";

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const TabButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 360px;
  overflow-y: scroll;
  margin: 0rem 1rem 1.5rem 1.2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TabContent = styled.div``;

const TabButton = styled.div`
  min-width: max-content;
  height: 40px;
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${({ isActive }) => (isActive ? "black" : "darkgrey")};
  position: relative;
  transition: all 0.3s ease-in-out;
  ${
    ({ isActive }) => {
      console.log({ isActive });
      return `
        &::after {
            position: absolute;
        content: '';
        height: 6px;
        border-radius: 8px;
        bottom: 2px; 
		  left: 0;
        right: 0;
		  width: ${isActive ? "50%" : "0%"};
		  background: var(--f7-theme-color);
		  
		  -o-transition: all .3s ease-in-out;
  		  -ms-transition: all .3s ease-in-out;
        -moz-transition: all .3s ease-in-out;
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        }
    `;
    }
    //   (isActive ? "text-decoration: underline" : "")
  }
`;

const content = [
  {
    id: 0,
    tab: "Recent",
    content: "I'm the content of the Section 1",
  },
  {
    id: 1,
    tab: "Tabarrah",
    content: "I'm the content of the Section 2",
  },
  {
    id: 2,
    tab: "Objections Answered",
    content: "I'm the content of the Section 2",
  },
  {
    id: 3,
    tab: "Hadith Analysis",
    content: "I'm the content of the Section 2",
  },
  {
    id: 4,
    tab: "Fadak",
    content: "I'm the content of the Section 2",
  },
  {
    id: 5,
    tab: "Batriyyah",
    content: "I'm the content of the Section 2",
  },
];

const HomeTabs = () => {
  const { curTab, changeTab } = useTabs(0, content);
  return (
    <Tab>
      <TabContent>
        <BlogList />
      </TabContent>
    </Tab>
  );
};

export default HomeTabs;
