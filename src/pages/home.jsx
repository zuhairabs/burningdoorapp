import React, { useEffect, useState } from "react";
import { Link, Page, useStore } from "framework7-react";
import Header from "../components/common/Header";
import SmallCardList from "../components/list/SmallCardList";
import BlogList from "../components/list/BlogList";
import SearchInput from "../components/Input/SearchInput";
import styled from "styled-components";
import { FiTrendingUp } from "react-icons/fi";
import CategoryList from "../components/list/CategoryList";
import BookBanner from "../components/banner/BookBanner";
import BlogCardLoader from "../components/loading/BlogCardLoader";
import CategoryListLoader from "../components/loading/CategoryListLoader";
import SmallCardLoader from "../components/loading/SmallCardLoader";
import BottomTabs from "../components/Tabs/BottomTabs";
import Stories from "../components/Stories";
import {
  checkStatus,
  loadAsyncData,
  loadLocalData,
  setBlogControls,
  setBookmarkState,
  setNotesState,
} from "../lib/utils";
import { useTheme } from "../context/ThemeContext";
import OfflineToast from "../components/Toast/OfflineToast";
import NoWifi from "../assets/no-wifi.gif";
import { Network } from "@capacitor/network";
import store from "../js/store";

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

const OfflineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;

  h1 {
    color: #2b2b2b;
    font-weight: 900;
    font-size: 1.4rem;
    margin: 0;
  }

  p {
    color: #777;
    font-weight: 900;
    font-size: 1.2rem;
    text-align: center;
  }

  img {
    height: 250px;
  }
`;

const StyledPage = styled(Page)`
  background-color: ${({ theme }) => theme.primary};
  .page-content {
    overflow-x: hidden;
  }
`;

const iconColor = "#f28a10";

const HomePage = ({ f7router }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const isLoading = useStore("isLoading");
  const recentBlogs = useStore("getRecentBlogs");
  const topTenBlogs = useStore("getTopTenBlogs");
  const categories = useStore("getCategories");
  const stories = useStore("getStories");
  const { hideBanner, hideStory } = useTheme();

  const networkStatus = async () => {
    const status = await checkStatus();
    setIsOnline(status);
    setShowToast(!status);
    store.dispatch("setIsLoading", false);
  };

  useEffect(() => {
    setBookmarkState();
    setNotesState();
    setBlogControls();
    networkStatus();
  }, []);

  useEffect(() => {
    if (!isOnline) {
      loadLocalData();
    }

    if (isOnline) {
      loadAsyncData();
    }
  }, [isOnline]);

  useEffect(() => {
    Network.addListener("networkStatusChange", (status) => {
      setShowToast(!status.connected);
      setIsOnline(status.connected);
    });
  }, []);

  useEffect(() => {
    if (showToast) {
      setTimeout(() => setShowToast(false), 5000);
    }
  }, [showToast]);

  return (
    <StyledPage name="home">
      <OfflineToast showToast={showToast} />
      <Header />
      <BottomTabs router={f7router} />
      {!isOnline && recentBlogs.length <= 0 && !isLoading && <BookBanner />}
      {!isOnline && recentBlogs.length <= 0 && !isLoading ? (
        <OfflineWrapper>
          <img src={NoWifi} alt="no-internet" />
          <h1>It seems you're offline!</h1>
          <p>Please open this app once with internet connection to load data</p>
        </OfflineWrapper>
      ) : (
        <>
          <SearchWrapper onClick={() => f7router.navigate("/search/")}>
            <SearchInput disabled value={""} setValue={() => {}} />
          </SearchWrapper>
          {!hideStory && isOnline && <Stories data={stories} />}
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
            <CategoryList
              data={categories?.filter((_, index) => index <= 10)}
            />
          )}
          <TitleWrapper>
            <Text>
              {" "}
              <FiTrendingUp color={iconColor} /> Recents
            </Text>
          </TitleWrapper>
          {isLoading ? <BlogCardLoader /> : <BlogList data={recentBlogs} />}
        </>
      )}
    </StyledPage>
  );
};
export default HomePage;
