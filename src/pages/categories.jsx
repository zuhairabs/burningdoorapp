import React from "react";
import { Link, Page, useStore } from "framework7-react";
import styled from "styled-components";
import BackButton from "../components/common/BackButton";
import PageTitle from "../components/Text/PageTitle";

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 5rem 0;
`;

const Category = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.cardImage};
  background-image: url("https://theburningdoor.com/assets/img/instagram/2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 90%;
  height: 150px;
  border-radius: 25px;

  font-size: 25px;
  font-weight: 800;
  color: white;
  position: relative;
  box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);

  > p {
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 25px;
    z-index: 0;
  }
`;

const Fixed = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.primary};
  position: fixed;
  z-index: 4;

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

const ListWrapper = styled.div`
  transform: translateY(90px);
  z-index: 2;
`;

const Loader = styled.div`
  background: ${({ theme }) => theme.pill};
  width: 90%;
  height: 150px;
  margin: auto;
  margin-top: 1rem;
  border-radius: 10px;
`;
const StyledPage = styled(Page)`
  background-color: ${({ theme }) => theme.primary};
`;

const CategoriesPage = ({ f7router }) => {
  const isLoading = useStore("isLoading");
  const categories = useStore("getCategories");

  return (
    <StyledPage name="categories">
      <Fixed>
        <BackButton router={f7router} />
        <PageTitle title={"Categories"} />
      </Fixed>
      <ListWrapper>
        {isLoading ? (
          <div style={{ paddingTop: "4rem" }}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Loader key={item} />
            ))}
          </div>
        ) : (
          <CategoryWrapper>
            {categories.map((item) => (
              <Category
                noLinkClass
                transition="f7-parallax"
                href={`/category/${item.id}`}
                key={item.id}
              >
                <p>{item.name}</p>
              </Category>
            ))}
          </CategoryWrapper>
        )}
      </ListWrapper>
    </StyledPage>
  );
};
export default CategoriesPage;
