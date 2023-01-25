import { PageContent, Range, f7 } from "framework7-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 1rem;
`;

const Subtitle = styled.span`
  font-weight: 700;
  color: rgb(180, 180, 180);
  margin: 0.8rem 0;
  font-size: 0.6rem;
  text-transform: uppercase;
`;

const Text = styled.span`
  text-transform: capitalize;
  color: ${({ color }) => (color ? color : "#3d3d3d")};
  font-weight: 700;
  font-size: ${({ size }) => (size ? size : "16px")};
  margin: ${({ margin }) => (margin ? margin : "unset")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "inherit")};
  transition: all 0.3s ease-in-out;
`;

const Flex = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledRange = styled(Range)`
  width: 70% !important;

  .range-bar .range-bar-active,
  .range-knob-label:before,
  .range-knob {
    background-color: #363636;
  }

  .range-knob-wrap {
    width: 16px;
    height: 16px;
    top: 40%;
  }
  .range-bar {
    height: 4px;
    border-radius: 25px;
  }
`;

const StyleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ThemeColor = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 30px;
  background: ${({ color }) => (color ? color : "#eee")};
  margin: 0 0 1rem 0;
  box-shadow: 0px 5px 10px 0px rgb(69 67 96 / 30%);
  transition: all 0.3s ease-in-out;
`;

const Ring = styled.span`
  position: absolute;
  top: -7px;
  left: -8px;
  width: 30px;
  height: 30px;
  background: transparent;
  border: 3px solid rgb(180, 180, 180);
  border-radius: 30px;
  transition: all 0.5s ease-in-out;
`;

const BlogControls = ({ setRefetch }) => {
  const store = f7.store;

  const [size, setSize] = useState();
  const [style, setStyle] = useState();
  const [theme, setTheme] = useState();

  useEffect(() => {
    const blogControls = f7.store.state.blogControls;
    setSize(blogControls[0]);
    setStyle(blogControls[1]);
    setTheme(blogControls[2]);
  }, [store]);

  const updateSize = (value) => {
    store.dispatch("updateSize", value);
    setRefetch(true);
  };

  const updateStyle = (id) => {
    setStyle((prev) => {
      const list = prev.options.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isSelected: true,
          };
        } else {
          return {
            ...item,
            isSelected: false,
          };
        }
      });
      const newValues = { ...prev, options: list };
      store.dispatch("updateStyle", newValues);
      return newValues;
    });
    setRefetch(true);
  };

  const updateTheme = (id) => {
    setTheme((prev) => {
      const list = prev.options.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isSelected: true,
          };
        } else {
          return {
            ...item,
            isSelected: false,
          };
        }
      });
      const newValues = { ...prev, options: list };
      store.dispatch("updateTheme", newValues);
      return newValues;
    });
    setRefetch(true);
  };

  return (
    <PageContent style={{ padding: "0 1rem 2rem 1rem" }}>
      <ControlWrapper>
        <Subtitle>{size?.name}</Subtitle>
        <Flex>
          <Text size="12px">Aa</Text>
          <StyledRange
            label
            min={10}
            max={25}
            step={1}
            value={size?.value}
            onRangeChange={updateSize}
          />
          <Text size="18px">Aa</Text>
        </Flex>
      </ControlWrapper>
      <ControlWrapper>
        <Subtitle>{style?.name}</Subtitle>
        <Flex>
          {style?.options.map((option) => (
            <StyleWrap onClick={() => updateStyle(option.id)} key={option.id}>
              <Text
                fontFamily={option?.value}
                margin="0 0 0.4rem 0"
                color={
                  option?.isSelected ? "rgb(40, 40, 40)" : "rgb(170, 170, 170)"
                }
                size="28px"
              >
                Aa
              </Text>
              <Text
                fontFamily={option?.value}
                color={
                  option?.isSelected ? "rgb(40, 40, 40)" : "rgb(170, 170, 170)"
                }
                size="12px"
              >
                {option?.name}
              </Text>
            </StyleWrap>
          ))}
        </Flex>
      </ControlWrapper>
      <ControlWrapper>
        <Subtitle>{theme?.name}</Subtitle>
        <Flex>
          {theme?.options.map((option) => (
            <StyleWrap key={option.id} onClick={() => updateTheme(option.id)}>
              <ThemeColor color={option?.bg}>
                {option?.isSelected && <Ring />}
              </ThemeColor>
              <Text
                color={
                  option?.isSelected ? "rgb(40, 40, 40)" : "rgb(170, 170, 170)"
                }
                size="12px"
              >
                {option?.name}
              </Text>
            </StyleWrap>
          ))}
        </Flex>
      </ControlWrapper>
    </PageContent>
  );
};

export default BlogControls;
