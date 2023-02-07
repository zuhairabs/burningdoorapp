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
import { isEmpty } from "lodash";
import BlogCardLoader from "../components/loading/BlogCardLoader";
import CategoryListLoader from "../components/loading/CategoryListLoader";
import SmallCardLoader from "../components/loading/SmallCardLoader";
import BottomTabs from "../components/Tabs/BottomTabs";

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

const HomePage = ({ f7router }) => {
  const isLoading = useStore("isLoading");
  const recentBlogs = useStore("getRecentBlogs");
  const topTenBlogs = useStore("getTopTenBlogs");
  const bookmarks = useStore("getBookmarks");
  const categories = useStore("getCategories");

  useEffect(() => {
    store.dispatch("getRecentBlogs");
    store.dispatch("getTopTenBlogs");
    store.dispatch("getCategories");
    store.dispatch("getAppDetails");
  }, []);

  return (
    <Page name="home">
      <Header />
      <BottomTabs router={f7router} />
      <SearchWrapper onClick={() => f7router.navigate("/search/")}>
        <SearchInput disabled value={""} setValue={() => {}} />
      </SearchWrapper>
      {!isEmpty(bookmarks) && (
        <TitleWrapper>
          <Text>Saved</Text>
          <AllLink transition="f7-push" noLinkClass href="/bookmarks/">
            See All
          </AllLink>
        </TitleWrapper>
      )}
      {!isEmpty(bookmarks) && <SmallCardList data={bookmarks} />}
      <BookBanner />
      <TitleWrapper>
        <Text>Popular</Text>
        <AllLink transition="f7-push" noLinkClass href="/popular/">
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
        <AllLink transition="f7-push" noLinkClass href="/categories/">
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
    </Page>
  );
};
export default HomePage;
