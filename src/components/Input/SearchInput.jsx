import React, { useEffect, useRef } from "react";
import { CgSearch } from "react-icons/cg";
import styled from "styled-components";

const SearchInputWrapper = styled.div`
  background: #eee;
  padding: 1rem;
  margin: 0 auto;
  width: 76%;
  border: transparent;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > input {
    border: none;
    background: transparent;
    font-size: 16px;
    color: black;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
  }

  > input::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #adadad;
  }
`;

const SearchInput = ({
  value,
  setValue,
  disabled = false,
  placeholder = "Search blogs...",
}) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <SearchInputWrapper>
      <CgSearch color="#adadad" size={22} />
      <input
        disabled={disabled}
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </SearchInputWrapper>
  );
};

export default SearchInput;
