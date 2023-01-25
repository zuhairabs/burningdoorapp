import React from "react";
import { Page } from "framework7-react";
import SearchInput from "../components/Input/SearchInput";
import styled from "styled-components";
import { FiTrendingUp } from "react-icons/fi";
import BlogList from "../components/list/BlogList";
import BackButton from "../components/common/BackButton";
import PageTitle from "../components/Text/PageTitle";

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

const SearchPage = ({ f7router }) => {
  const [searchValue, setSearchValue] = React.useState("");

  const trendingList = ["fadak", "fatima", "shahadat"];

  const keywords = ["fadak", "fatima", "shahadat"];

  const iconColor = "#f28a10";

  return (
    <Page name="search">
      <BackButton router={f7router} />
      <PageTitle title={"Search"} />
      <SearchInput value={searchValue} setValue={setSearchValue} />
      <Text>Try searching...</Text>
      <CategoryListWrapper>
        {keywords.map((item) => (
          <CategoryListPill onClick={() => setSearchValue(item)}>
            {item}
          </CategoryListPill>
        ))}
      </CategoryListWrapper>

      <Text>Trending</Text>
      {trendingList.map((item) => (
        <ListItem>
          <FiTrendingUp color={iconColor} />
          {item}
        </ListItem>
      ))}
      <Text>Popular</Text>
      <BlogList />
    </Page>
  );
};
export default SearchPage;
