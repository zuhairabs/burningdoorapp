import React, { useEffect, useState } from "react";
import { Page, useStore } from "framework7-react";
import styled from "styled-components";
import BlogList from "../components/list/BlogList";
import BackButton from "../components/common/BackButton";
import PageTitle from "../components/Text/PageTitle";
import store from "../js/store";
import BlogCardLoader from "../components/loading/BlogCardLoader";

const Fixed = styled.div`
  width: 100%;
  background: white;
  position: fixed;
  z-index: 4;

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

const ListWrapper = styled.div`
  transform: translateY(90px);
  z-index: 2;
`;

const CategoryPage = ({ f7router, id }) => {
  const [title, setTitle] = useState("Loading");
  const isLoading = useStore("isLoading");
  const categoryBlogs = useStore("getCategoryBlogs");
  const categories = useStore("getCategories");

  const getCategoryName = () => {
    const name = categories.filter((c) => c.id === id)[0]?.name;
    setTitle(name);
  };

  useEffect(() => {
    store.dispatch("getCategory", id);
    getCategoryName();
  }, []);

  return (
    <Page name="singlecategory">
      <Fixed>
        <BackButton router={f7router} />
        <PageTitle title={title} />
      </Fixed>
      <ListWrapper>
        {isLoading ? (
          <div style={{ paddingTop: "4rem" }}>
            <BlogCardLoader />
          </div>
        ) : (
          <BlogList
            data={categoryBlogs}
            listPadding={title?.length > 12 ? "9rem 0" : "5rem 0"}
          />
        )}
      </ListWrapper>
    </Page>
  );
};
export default CategoryPage;
