/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { IPost } from '../App';

interface propsContent {
  contents: IPost[];
  onSort: any;
  onClick: Function;
}

const Contents = ({ contents, onSort, onClick }: propsContent) => {
  const renderItem = (item: IPost) => {
    return (
      <tr onClick={() => onClick(item)} className="item" key={item.imdbID}>
        <td>
          <img src={item.Poster} alt="" />
        </td>
        <td>{item.Title}</td>
        <td>{item.Year}</td>
      </tr>
    );
  };

  const table = css`
    width: 100%;
    padding: 5px;
  `;

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
