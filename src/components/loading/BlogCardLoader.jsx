import React from "react";
import styled from "styled-components";
import { CgTime, CgEye } from "react-icons/cg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1.2rem 1rem;
`;

const BlogCardWrapper = styled.div`
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
  padding-bottom: 1rem;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: ${({ theme }) => theme.cardImage};
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 13px;
  color: ${({ theme }) => theme.textCard};
  background: ${({ theme }) => theme.textCard};
  border-radius: 10px;
  padding: 0.9rem;
  margin-top: 1rem;
`;

const TitleWrapper = styled.div`
  width: 205px;
  padding-right: 1rem;
`;

const Badge = styled.span`
  padding: 0.3rem 3rem;
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

const SmallBox = styled.div`
  background: ${({ theme }) => theme.textCardLight};
  padding: 0.4rem 1.5rem;
  border-radius: 10px;
`;

const ViewCount = styled(Minutes)``;

const BlogCardLoader = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((item) => (
        <Wrapper key={item}>
          <BlogCardWrapper>
            <ImageWrapper>
              <Image src={""} />
            </ImageWrapper>
            <TitleWrapper>
              <Badge />
              <Title />
              <InfoWrapper>
                <Minutes>
                  <CgTime size={20} />
                  <SmallBox />
                </Minutes>
                <ViewCount>
                  <CgEye size={18} />
                  <SmallBox />
                </ViewCount>
              </InfoWrapper>
            </TitleWrapper>
          </BlogCardWrapper>
        </Wrapper>
      ))}
    </>
  );
};

export default BlogCardLoader;
