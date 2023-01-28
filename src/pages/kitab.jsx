import React, { useCallback, useEffect } from "react";
import { Link, Page } from "framework7-react";
import SearchInput from "../components/Input/SearchInput";
import styled from "styled-components";
import { BsArrowLeft, BsFiles, BsFillPenFill } from "react-icons/bs";
import { capitalize, isEmpty, truncate } from "lodash";
import { BOOK_TOC, getTitle } from "../constants/kitab_titles";
import { BOOK_CONTENT } from "../constants/kitab_content";
import StarBG from "../assets/star_bg.png";
import BookImg from "../assets/kitab.jpg";
import NoItemGif from "../assets/no-item-found.gif";

const PageWrapper = styled.div`
  margin: 1rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
  background: #fff;
  z-index: 10;
`;

const BookCover = styled.div`
  background: #eee;
  background: url(${BookImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 80px;
  height: 100px;
  border-radius: 15px;
`;

const LeftArrow = styled(BsArrowLeft)`
  margin: 0 1rem;
`;

const BookDetails = styled.h2`
  display: flex;
  align-items: flex-start;
  padding: 1rem 0 1rem 1rem;
  border-radius: 10px;

  position: sticky;
  top: 85px;
  background: #eee;
  z-index: 10;

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

const Title = styled.h2`
  font-size: 1rem;
  margin-left: 1rem;
  font-weight: 800;
`;

const SubTitle = styled.p`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #7d7d7d;
  font-size: 0.8rem;
  margin: -0.5rem 1rem;
`;

const TitleWrapper = styled.div`
  p {
    margin-top: -0.5rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    font-size: small;
    color: #666;
  }
`;

const Author = styled.p`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #7d7d7d;
  font-size: 0.8rem;
  margin: -0.5rem 1rem;
`;

const Divider = styled.div`
  background-color: #eee;
  height: 2px;
  width: 96%;
  margin: auto;

  position: relative;
  z-index: 10;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: ${({ padding }) => (padding ? padding : "2rem 0")};
`;

const Item = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background: #eee;
  padding: 1rem 1.5rem;
  border-radius: 10px;
`;

const Numbers = styled.div`
  width: 70px;
  height: 65px;
  background: #eee;
  /* background-image: linear-gradient(45deg, #f28a10, #ffeeda); */
  background: url(${StarBG});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #212121;
    font-size: 1.5rem;
    font-weight: 500;
    margin-left: -5px;
  }
`;

const Text = styled.div`
  color: #333;
  font-weight: 600;
  font-size: 0.9rem;
  margin-left: 5px;
  width: 200px;
`;

const Img = styled.img`
  width: 60%;
  margin: auto;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 2rem;
    font-weight: 800;
  }
`;

const SearchTitle = styled.div`
  margin: 1.5rem 0.5rem;
  font-weight: 600;
  font-size: 1rem;
`;

const KitabPage = ({ f7router }) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [searchedArray, setSearchedArray] = React.useState([]);
  const [searchedContentArray, setSearchedContentArray] = React.useState([]);

  const getSearchedList = useCallback(() => {
    return BOOK_TOC.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue]);

  const getSearchedContentList = useCallback(() => {
    return BOOK_CONTENT.filter((item) =>
      item.content.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue]);

  useEffect(() => {
    if (searchValue.length > 0) {
      setIsSearching(true);
      const filteredTitles = getSearchedList();
      const filteredContents = getSearchedContentList();
      setSearchedArray(filteredTitles);
      setSearchedContentArray(filteredContents);
    } else {
      setIsSearching(false);
    }
  }, [searchValue]);

  return (
    <Page name="kitab">
      <HeaderWrapper>
        <LeftArrow onClick={() => f7router.back()} size={18} />
        <SearchInput
          placeholder="Search this book..."
          value={searchValue}
          setValue={setSearchValue}
        />
      </HeaderWrapper>
      <PageWrapper>
        <BookDetails>
          <BookCover />
          <TitleWrapper>
            <Title>Book of Sulaym Ibn Qays</Title>
            <p>Oldest Shia hadith collection</p>
            <div style={{ display: "flex" }}>
              <Author>
                <BsFillPenFill style={{ marginRight: "0.5rem" }} />
                Sulaym Ibn Qays
              </Author>
              <SubTitle>
                <BsFiles style={{ marginRight: "0.5rem" }} /> 530
              </SubTitle>
            </div>
          </TitleWrapper>
        </BookDetails>
        <Divider />
        <SearchTitle>Table of Contents</SearchTitle>
        {isSearching ? (
          <>
            {isEmpty(searchedArray) && isEmpty(searchedContentArray) && (
              <ImgWrapper>
                <Img src={NoItemGif} alt="no-item" />
                <p>Not found!</p>
              </ImgWrapper>
            )}
            <List padding="0">
              {searchedArray.map((item) => (
                <Item
                  noLinkClass
                  transition="f7-parallax"
                  href={`/kitab/${item.id}`}
                  key={item.id}
                >
                  <Numbers>
                    <span>{item.id}</span>
                  </Numbers>
                  <Text>
                    {capitalize(truncate(item.title, { length: 40 }))}
                  </Text>
                </Item>
              ))}
            </List>
            {searchedContentArray.length !== 0 && (
              <SearchTitle>Inside Book</SearchTitle>
            )}
            <List padding="0">
              {searchedContentArray.map((item) => (
                <Item
                  noLinkClass
                  transition="f7-parallax"
                  href={`/kitab/${item.page_no}`}
                  key={item.page_no}
                >
                  <Numbers>
                    <span>{item.page_no}</span>
                  </Numbers>
                  <Text>
                    {capitalize(
                      truncate(getTitle(item.page_no).title, { length: 40 })
                    )}
                  </Text>
                </Item>
              ))}
            </List>
          </>
        ) : (
          <List padding="0">
            {BOOK_TOC.map((item) => (
              <Item
                noLinkClass
                transition="f7-parallax"
                href={`/kitab/${item.id}`}
                key={item.id}
              >
                <Numbers>
                  <span>{item.id}</span>
                </Numbers>
                <Text>{capitalize(truncate(item.title, { length: 40 }))}</Text>
              </Item>
            ))}
          </List>
        )}
      </PageWrapper>
    </Page>
  );
};
export default KitabPage;
