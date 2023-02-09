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
  color: ${({ theme }) => theme.seeMore};
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 2rem;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const CategoryListPill = styled.div`
  background: ${({ theme }) => theme.pill};
  color: ${({ theme }) => theme.pillText};
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
  background: ${({ theme }) => theme.primary};
  z-index: 10;
  padding-bottom: 10px;
  padding-top: 5px;

  &::after {
    content: "";
    background: rgb(${({ theme }) => theme.shade});
    background: linear-gradient(
      180deg,
      rgba(${({ theme }) => theme.shade}, 1) 10%,
      rgba(${({ theme }) => theme.shade}, 0.7667436489607391) 58%,
      rgba(${({ theme }) => theme.shade}, 0) 100%
    );
    height: 45px;
    position: absolute;
    top: 100%;
    width: 100%;
  }
`;

const StyledPage = styled(Page)`
  background-color: ${({ theme }) => theme.primary};
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
    <StyledPage name="search">
      <HeaderWrapper>
        <BackButton router={f7router} />
        <PageTitle title={"Search"} />
        <SearchInput value={searchValue} setValue={setSearchValue} />
      </HeaderWrapper>
      {searchValue.length > 0 ? (
        <>
          <BlogList
            noItemFontSize="1.5rem"
            noItemTitle="Try again with diferent keyword"
            data={searchedBlogs}
          />
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
    </StyledPage>
  );
};
export default SearchPage;
