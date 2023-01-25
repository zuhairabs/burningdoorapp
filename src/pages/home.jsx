import React from "react";
import { Link, Page } from "framework7-react";
import Header from "../components/common/Header";
import SmallCardList from "../components/list/SmallCardList";
import BlogList from "../components/list/BlogList";
import SearchInput from "../components/Input/SearchInput";
import styled from "styled-components";
import { FiTrendingUp } from "react-icons/fi";
import CategoryList from "../components/list/CategoryList";

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 1rem 1.5rem 2rem;
`;

const AllLink = styled(Link)`
  font-weight: 500;
  font-size: 15px;
  color: #7d7d7d;
`;

const iconColor = "#f28a10";

const HomePage = ({ f7router }) => (
  <Page name="home">
    <Header />
    <SearchWrapper onClick={() => f7router.navigate("/search/")}>
      <SearchInput disabled value={""} setValue={() => {}} />
    </SearchWrapper>
    <TitleWrapper>
      <Text>Saved</Text>
      <AllLink transition="f7-push" noLinkClass href="/bookmarks/">
        See All
      </AllLink>
    </TitleWrapper>
    <SmallCardList />
    <TitleWrapper>
      <Text>Popular</Text>
      <AllLink transition="f7-push" noLinkClass href="/popular/">
        See All
      </AllLink>
    </TitleWrapper>
    <SmallCardList isPopular />
    <TitleWrapper>
      <Text>Categories</Text>
      <AllLink transition="f7-push" noLinkClass href="/categories/">
        See All
      </AllLink>
    </TitleWrapper>
    {/* Page content */}
    <CategoryList />
    <TitleWrapper>
      <Text>
        {" "}
        <FiTrendingUp color={iconColor} /> Recents
      </Text>
    </TitleWrapper>
    <BlogList />
  </Page>
);
export default HomePage;
