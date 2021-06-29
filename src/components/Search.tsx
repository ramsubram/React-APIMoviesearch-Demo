/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface searchProps {
  value?: string;

  onChange: (value: string) => void;
  onKeyDown: (value: any) => void;
}

const input = css`
  margin: 35px;
  padding: 20px;
  width: 50rem;
  text-align: left;
`;

const Search = ({ value, onChange, onKeyDown }: searchProps) => {
  return (
    <input
      css={input}
      type="text"
      name="search-form"
      placeholder="Search for a movie..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
    />
  );
};
export default Search;
