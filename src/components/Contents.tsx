/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { IPost } from '../App';

interface propsContent {
  contents: IPost[];
  onSort: any;
  onClick: Function;
}

const table = css`
  width: 100%;
  padding: 20px;
  border-spacing: 0px;
`;

const tableRow = css`
  &:hover {
    background-color: #d5d5d3;
  }
`;

const Contents = ({ contents, onSort, onClick }: propsContent) => {
  const renderItem = (item: IPost) => {
    return (
      <tr
        css={tableRow}
        onClick={() => onClick(item)}
        className="item"
        key={item.imdbID}
      >
        <td>
          <img src={item.Poster} alt="" />
        </td>
        <td>{item.Title}</td>
        <td>{item.Year}</td>
      </tr>
    );
  };

  if (!Array.isArray(contents) || contents.length === 0) {
    return null;
  }

  return (
    <div>
      <table css={table}>
        <tr>
          <th onClick={() => onSort('Poster')} className="header">
            Poster
          </th>
          <th onClick={() => onSort('Title')} className="header">
            Title
          </th>
          <th onClick={() => onSort('Year')} className="header">
            Year
          </th>
        </tr>
        {/* If there is content map the items */}
        {contents?.map((content: any) => renderItem(content))}
      </table>
    </div>
  );
};

export default Contents;
