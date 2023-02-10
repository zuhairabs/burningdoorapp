import React, { useEffect } from "react";
import { Link, Page, useStore } from "framework7-react";
import Header from "../components/common/Header";
import SmallCardList from "../components/list/SmallCardList";
import BlogList from "../components/list/BlogList";
import SearchInput from "../components/Input/SearchInput";
import styled from "styled-components";
import { FiTrendingUp } from "react-icons/fi";
import CategoryList from "../components/list/CategoryList";
import BookBanner from "../components/banner/BookBanner";
import store from "../js/store";
import BlogCardLoader from "../components/loading/BlogCardLoader";
import CategoryListLoader from "../components/loading/CategoryListLoader";
import SmallCardLoader from "../components/loading/SmallCardLoader";
import BottomTabs from "../components/Tabs/BottomTabs";
import Stories from "../components/Stories";

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.textPrimary};
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
  color: ${({ theme }) => theme.seeMore};
`;

const StyledPage = styled(Page)`
  background-color: ${({ theme }) => theme.primary};
`;

const iconColor = "#f28a10";

const HomePage = ({ f7router }) => {
  const isLoading = useStore("isLoading");
  const recentBlogs = useStore("getRecentBlogs");
  const topTenBlogs = useStore("getTopTenBlogs");
  const categories = useStore("getCategories");
  const hideBanner = useStore("getHideBanner");
  const hideStory = useStore("getHideStory");
  const stories = useStore("getStories");

  useEffect(() => {
    store.dispatch("getRecentBlogs");
    store.dispatch("getTopTenBlogs");
    store.dispatch("getCategories");
    store.dispatch("getAppDetails");
    // store.dispatch("getStories");
  }, []);

  return (
    <StyledPage name="home">
      <Header />
      <BottomTabs router={f7router} />
      <SearchWrapper onClick={() => f7router.navigate("/search/")}>
        <SearchInput disabled value={""} setValue={() => {}} />
      </SearchWrapper>
      {!hideStory && <Stories data={stories} />}
      {!hideBanner && <BookBanner />}
      <TitleWrapper>
        <Text>Popular</Text>
        <AllLink transition="f7-push" href="/popular/">
          See All
        </AllLink>
      </TitleWrapper>
      {isLoading ? (
        <SmallCardLoader isPopular />
      ) : (
        <SmallCardList data={topTenBlogs} isPopular />
      )}
      <TitleWrapper>
        <Text>Categories</Text>
        <AllLink transition="f7-push" href="/categories/">
          See All
        </AllLink>
      </TitleWrapper>
      {isLoading ? (
        <CategoryListLoader />
      ) : (
        <CategoryList data={categories.filter((_, index) => index <= 10)} />
      )}
      <TitleWrapper>
        <Text>
          {" "}
          <FiTrendingUp color={iconColor} /> Recents
        </Text>
      </TitleWrapper>
      {isLoading ? <BlogCardLoader /> : <BlogList data={recentBlogs} />}
    </StyledPage>
  );
};
export default HomePage;
