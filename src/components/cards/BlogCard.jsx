import { truncate } from "lodash";
import React from "react";
import styled from "styled-components";
import { CgTime, CgEye } from "react-icons/cg";
import { Link } from "framework7-react";
import { getLink, readingTime } from "../../lib/utils";
import Placeholder from "../../assets/placeholder.jpg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1.2rem 0 1.2rem 1rem;
`;

const BlogCardWrapper = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
  width: 96%;
  height: 120px;
  background: ${({ theme }) => theme.card};
  box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);
  border-radius: 10px;
  border: 5px solid ${({ theme }) => theme.card};
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 130px;
  margin-left: 0.5rem;
  padding-bottom: 0.5rem;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: ${({ theme }) => theme.cardImage};
  background-image: url(${({ src }) => (src ? src : Placeholder)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 13px;
  padding-top: 0.8rem;
  padding-left: 0.2rem;
  color: ${({ theme }) => theme.textCard};
`;

const TitleWrapper = styled.div`
  width: 205px;
  padding-right: 1rem;
`;

const Badge = styled.span`
  padding: 0.3rem 0.6rem;
  background: #ffe8ce;
  font-size: 0.8rem;
  border-radius: 10px;
  font-weight: 500;
  color: #4f2c03;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 0.5rem;
`;

const Minutes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.textCardLight};
  font-size: 0.7rem;
  font-weight: 500;
`;

const ViewCount = styled(Minutes)``;

const BlogCard = ({ item }) => {
  return (
    <Wrapper>
      <BlogCardWrapper transition="f7-parallax" href={`/blog/${item.id}`}>
        <ImageWrapper>
          <Image src={getLink(item.photo)} />
        </ImageWrapper>
        <TitleWrapper>
          <Badge>{item.category_name}</Badge>
          <Title>{truncate(item.title, { length: 45 })}</Title>
          <InfoWrapper>
            <Minutes>
              <CgTime size={20} />
              {readingTime(item.content)} minutes
            </Minutes>
            <ViewCount>
              <CgEye size={18} /> {item.count}
            </ViewCount>
          </InfoWrapper>
        </TitleWrapper>
      </BlogCardWrapper>
    </Wrapper>
  );
};

export default BlogCard;
