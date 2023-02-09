import React, { useEffect, useRef } from "react";
import { CgSearch } from "react-icons/cg";
import styled from "styled-components";

const SearchInputWrapper = styled.div`
  background: ${({ theme }) => theme.searchBg};
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
    color: ${({ theme }) => theme.inputColor};
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
  }

  > input::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.searchPlaceholder};
  }
`;

const SearchIcon = styled(CgSearch)`
  color: ${({ theme }) => theme.searchIcon};
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
      <SearchIcon size={22} />
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
