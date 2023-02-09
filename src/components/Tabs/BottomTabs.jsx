import React, { Fragment } from "react";
import styled from "styled-components";
import { FiHome } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BsBookmarkStar, BsInfoCircle, BsStickies } from "react-icons/bs";

const Tabs = styled.div`
  position: fixed;
  bottom: 0;
  background: ${({ theme }) => theme.tabMain};
  padding: 0.5rem 0.2rem;
  width: 100%;
  z-index: 99;
  box-shadow: rgb(0 0 0 / 8%) 0px -4px 10px;
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TabItem = styled.div`
  background: ${({ theme }) => theme.tabIconBg};
  color: ${({ theme }) => theme.tabIcon};
  padding: 0.8rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.3rem;
    margin-right: 8px;
  }

  span {
    font-weight: 600;
  }
`;

const BookIcon = styled.div`
  background: rgb(255, 185, 105);
  background: linear-gradient(
    90deg,
    rgba(255, 185, 105, 1) 25%,
    rgba(242, 138, 16, 1) 100%
  );
  width: 60px;
  height: 60px;
  font-size: 2.5rem;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
  box-shadow: 0px 0px 3.6px rgb(242 138 16 / 30%),
    0px 0px 10px rgb(242 138 16 / 30%), 0px 0px 24.1px rgb(242 138 16 / 50%),
    0px 0px 80px rgb(242 138 16 / 35%);

  svg {
    path {
      stroke-width: 1;
    }
  }
`;

const content = [
  {
    id: 0,
    tabname: "Home",
    icon: <FiHome size={24} strokeWidth={1.5} />,
    isHighlight: false,
    route: "/",
  },
  {
    id: 1,
    tabname: "Bookmarks",
    icon: <BsBookmarkStar />,
    isHighlight: false,
    route: "/bookmarks/",
  },
  {
    id: 2,
    tabname: "Book",
    icon: <HiOutlineBookOpen />,
    isHighlight: true,
    route: "/kitab/",
  },
  {
    id: 3,
    tabname: "Notes",
    icon: <BsStickies />,
    isHighlight: false,
    route: "/notes/",
  },
  {
    id: 4,
    tabname: "About",
    icon: <BsInfoCircle />,
    isHighlight: false,
    route: "/about/",
  },
];

const BottomTabs = ({ router }) => {
  const handleClick = (item) => {
    const el = document.querySelector(".page-content");

    if (item.id === 0) {
      if (el.scrollTop > 300) {
        el.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    } else {
      router.navigate(item.route);
    }
  };

  return (
    <Tabs>
      <TabWrapper>
        {content.map((item) => (
          <Fragment key={item.id}>
            {item.id === 2 ? (
              <BookIcon onClick={() => router.navigate(item.route)}>
                {item.icon}
              </BookIcon>
            ) : (
              <TabItem onClick={() => handleClick(item)} key={item.id}>
                {item.icon}
              </TabItem>
            )}
          </Fragment>
        ))}
      </TabWrapper>
    </Tabs>
  );
};

export default BottomTabs;
