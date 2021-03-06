/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IPost } from '../App';

interface propsContent {
  contents: IPost[];
  onSort: any;
  selected: number;
  onClick: Function;
  setSelected: Function;
}

const table = css`
  .header {
    font-size: 16px;
  }
  width: 90%;
  border-spacing: 0px;
  margin-left: auto;
  margin-right: auto;
`;

const head = css`
  height: 30px;
  padding: 20px;
`;

const Contents = ({
  contents,
  onSort,
  onClick,
  selected,
  setSelected,
}: propsContent) => {
  const renderItem = (item: IPost, index: number) => {
    const tableRow = css`
      ${index === selected ? 'background-color: #d5d5d3;' : null}
    `;
    return (
      <tr
        css={[tableRow, head]}
        onClick={() => onClick(item)}
        onMouseEnter={() => setSelected(index)}
        onMouseLeave={() => setSelected(-1)}
        className="item"
        key={item.imdbID}
      >
        <td>
          <img className="image" alt="No Image" src={item.Poster} />
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
        {contents?.map((content: any, index: number) =>
          renderItem(content, index)
        )}
      </table>
    </div>
  );
};

export default Contents;
