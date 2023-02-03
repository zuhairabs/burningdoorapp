import React, { useEffect } from "react";
import { Link, Page, useStore } from "framework7-react";
import styled from "styled-components";
import BackButton from "../components/common/BackButton";
import PageTitle from "../components/Text/PageTitle";
import store from "../js/store";

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
  background: #eee;
  background: #dddddd;
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
  background: white;
  position: fixed;
  z-index: 4;
`;

const ListWrapper = styled.div`
  transform: translateY(90px);
  z-index: 2;
`;

const CategoriesPage = ({ f7router }) => {
  const isLoading = useStore("isLoading");
  const categories = useStore("getCategories");

  return (
    <Page name="categories">
      <Fixed>
        <BackButton router={f7router} />
        <PageTitle title={"Categories"} />
      </Fixed>
      <ListWrapper>
        {isLoading ? (
          "Loading"
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
    </Page>
  );
};
export default CategoriesPage;
