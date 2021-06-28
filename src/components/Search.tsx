/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';

interface searchProps {
  value?: string;

  onChange: (value: string) => void;
}

// const input = css``;

const Search = ({ value, onChange }: searchProps) => {
  return (
    <input
      type="search"
      name="search-form"
      placeholder="Search for a movie..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
export default Search;
