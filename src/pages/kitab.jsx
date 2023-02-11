import React, { useCallback, useEffect } from "react";
import { Link, Page } from "framework7-react";
import styled from "styled-components";
import { BsArrowLeft, BsFiles, BsFillPenFill } from "react-icons/bs";
import { capitalize, isEmpty, truncate } from "lodash";
import { BOOK_TOC, getTitle } from "../constants/kitab_titles";
import { BOOK_CONTENT } from "../constants/kitab_content";
import BookImg from "../assets/kitab.jpg";
import NoItemFound from "../assets/search-not-found.png";
import { CgSearch } from "react-icons/cg";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
  background: #fff;
  z-index: 10;
  padding-bottom: 1rem;
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
  padding-top: 1rem;
  color: #000;
`;

const BookDetails = styled.h2`
  display: flex;
  align-items: flex-start;
  padding: 1rem 0 1rem 1rem;
  border-radius: 10px;
  margin: 1rem 1rem;

  position: sticky;
  top: 85px;
  background: #ffffb6;
  border: 2px solid #000;
  z-index: 10;
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
    color: #000;
    font-weight: 600;
  }
`;

const Author = styled.p`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #000;
  font-size: 0.8rem;
  margin: -0.5rem 1rem;
`;

const List = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 0 2rem;
  border: 4px solid #000;
  border-radius: 10px;
  height: calc(100vh - 290px);
  overflow-y: scroll;
  background: #fff;
`;

const Item = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background: #fff;
  padding: 1rem 0.2rem;
  border-bottom: 2px solid #000;
`;

const Numbers = styled.div`
  width: 20px;
  height: 20px;
  background: #000;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  margin-right: 1rem;

  span {
    color: #fff;
    font-size: 24px;
    font-weight: 900;
    margin-left: -5px;
    text-shadow: rgb(0 0 0) 3px 0px 0px, rgb(0 0 0) 2.83487px 0.981584px 0px,
      rgb(0 0 0) 2.35766px 1.85511px 0px, rgb(0 0 0) 1.62091px 2.52441px 0px,
      rgb(0 0 0) 0.705713px 2.91581px 0px, rgb(0 0 0) -0.287171px 2.98622px 0px,
      rgb(0 0 0) -1.24844px 2.72789px 0px, rgb(0 0 0) -2.07227px 2.16926px 0px,
      rgb(0 0 0) -2.66798px 1.37182px 0px, rgb(0 0 0) -2.96998px 0.42336px 0px,
      rgb(0 0 0) -2.94502px -0.571704px 0px,
      rgb(0 0 0) -2.59586px -1.50383px 0px, rgb(0 0 0) -1.96093px -2.27041px 0px,
      rgb(0 0 0) -1.11013px -2.78704px 0px,
      rgb(0 0 0) -0.137119px -2.99686px 0px,
      rgb(0 0 0) 0.850987px -2.87677px 0px, rgb(0 0 0) 1.74541px -2.43999px 0px,
      rgb(0 0 0) 2.44769px -1.73459px 0px, rgb(0 0 0) 2.88051px -0.838247px 0px;
  }
`;

const Text = styled.div`
  color: #000;
  font-weight: 800;
  font-size: 0.9rem;
  margin-left: 5px;
  width: 100%;
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

  img {
    opacity: 0.5;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 2rem;
    font-weight: 800;
    opacity: 0.5;
  }
`;

const SearchInputWrapper = styled.div`
  background: #fff;
  padding: 1rem;
  margin: 1rem auto 0 auto;
  width: 70%;
  border-color: #000;
  border-style: solid;
  border-top-width: 2px;
  border-bottom-width: 5px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;

  > input {
    border: none;
    background: transparent;
    font-size: 16px;
    color: #000;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    margin-left: 1rem;
  }

  > input::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 14px;
    color: #000;
  }
`;

const KitabPage = ({ f7router }) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [searchedContentArray, setSearchedContentArray] = React.useState([]);

  const getSearchedContentList = useCallback(() => {
    return BOOK_CONTENT.filter((item) =>
      item.content.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue]);

  useEffect(() => {
    if (searchValue.length > 0) {
      setIsSearching(true);
      const filteredContents = getSearchedContentList();
      setSearchedContentArray(filteredContents);
    } else {
      setIsSearching(false);
    }
  }, [searchValue]);

  return (
    <Page style={{ background: "#fff0de" }} name="kitab">
      <HeaderWrapper>
        <Link onClick={() => f7router.navigate("/", { transition: "f7-dive" })}>
          <LeftArrow strokeWidth={2} size={22} />
        </Link>
        <SearchInputWrapper>
          <CgSearch color="#000" strokeWidth={2} size={22} />
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search this book..."
          />
        </SearchInputWrapper>
      </HeaderWrapper>
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
              <BsFiles strokeWidth={2} style={{ marginRight: "0.5rem" }} /> 530
            </SubTitle>
          </div>
        </TitleWrapper>
      </BookDetails>
      {isSearching ? (
        <>
          {isEmpty(searchedContentArray) ? (
            <ImgWrapper>
              <Img src={NoItemFound} alt="no-item" />
              <p>Not found!</p>
            </ImgWrapper>
          ) : (
            <>
              <List>
                {searchedContentArray.map((item) => (
                  <Item
                    transition="f7-parallax"
                    href={`/kitab/${item.page_no}`}
                    key={item.page_no}
                  >
                    <Numbers>
                      <span>
                        {item.page_no < 10 ? `0${item.page_no}` : item.page_no}
                      </span>
                    </Numbers>
                    <Text>
                      {capitalize(
                        truncate(getTitle(item.page_no).title, { length: 60 })
                      )}
                    </Text>
                  </Item>
                ))}
              </List>
            </>
          )}
        </>
      ) : (
        <List>
          {BOOK_TOC.map((item) => (
            <Item
              transition="f7-parallax"
              href={`/kitab/${item.id}`}
              key={item.id}
            >
              <Numbers>
                <span>{item.id < 10 ? `0${item.id}` : item.id}</span>
              </Numbers>
              <Text>{capitalize(truncate(item.title, { length: 60 }))}</Text>
            </Item>
          ))}
        </List>
      )}
    </Page>
  );
};
export default KitabPage;
