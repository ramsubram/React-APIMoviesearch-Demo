/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface searchProps {
  value?: string;

  onChange: (value: string) => void;
  onKeyDown: (value: any) => void;
}

const input = css`
  margin: 30px;
  padding: 20px;
  height: 2px;
  width: calc(80% - 35px - 20px);
  font-size: 14px;
`;

const div = css`
  text-align: center;
`;

const Search = ({ value, onChange, onKeyDown }: searchProps) => {
  return (
    <div css={div}>
      <input
        css={input}
        type="text"
        name="search-form"
        placeholder="Search for a movie..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
export default Search;
