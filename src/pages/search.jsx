import React, { useEffect } from "react";
import { Page, useStore } from "framework7-react";
import SearchInput from "../components/Input/SearchInput";
import styled from "styled-components";
import { FiTrendingUp } from "react-icons/fi";
import BlogList from "../components/list/BlogList";
import BackButton from "../components/common/BackButton";
import PageTitle from "../components/Text/PageTitle";
import store from "../js/store";
import BlogCardLoader from "../components/loading/BlogCardLoader";

const Text = styled.div`
  margin: 2rem 1rem 1.5rem 2rem;
  font-size: 16px;
  font-weight: 600;
  color: #666;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 2rem;
  font-size: 18px;
  font-weight: 600;
`;

const CategoryListPill = styled.div`
  background: #eee;
  color: #4d4d4d;
  font-weight: 600;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
`;

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 1rem 2rem 1.5rem;
`;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
  padding-bottom: 10px;
  padding-top: 5px;

  &::after {
    content: "";
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 10%,
      rgba(255, 255, 255, 0.7667436489607391) 58%,
      rgba(255, 255, 255, 0) 100%
    );
    height: 45px;
    position: absolute;
    top: 100%;
    width: 100%;
  }
`;

const SearchPage = ({ f7router }) => {
  const [searchValue, setSearchValue] = React.useState("");
  const isLoading = useStore("isLoading");
  const topTenBlogs = useStore("getTopTenBlogs");
  const searchedBlogs = useStore("getSearchedBlogs");

  const trendingList = ["fadak", "fatima", "ali"];

  const keywords = ["ayesha", "batri", "shahadat"];

  const iconColor = "#f28a10";

  useEffect(() => {
    if (searchValue.length > 0) {
      store.dispatch("getSearchedBlogs", searchValue);
    }
  }, [searchValue]);

  return (
    <Page name="search">
      <HeaderWrapper>
        <BackButton router={f7router} />
        <PageTitle title={"Search"} />
        <SearchInput value={searchValue} setValue={setSearchValue} />
      </HeaderWrapper>
      {searchValue.length > 0 ? (
        <>
          <BlogList data={searchedBlogs} />
        </>
      ) : (
        <>
          <Text>Try searching...</Text>
          <CategoryListWrapper>
            {keywords.map((item) => (
              <CategoryListPill key={item} onClick={() => setSearchValue(item)}>
                {item}
              </CategoryListPill>
            ))}
          </CategoryListWrapper>

          <Text>Trending</Text>
          {trendingList.map((item) => (
            <ListItem key={item}>
              <FiTrendingUp color={iconColor} />
              {item}
            </ListItem>
          ))}
          <Text>Popular</Text>
          {isLoading ? <BlogCardLoader /> : <BlogList data={topTenBlogs} />}
        </>
      )}
    </Page>
  );
};
export default SearchPage;
