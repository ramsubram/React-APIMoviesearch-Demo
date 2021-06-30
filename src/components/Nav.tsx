/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface IOwnProps {
  title: string | boolean | Array<string>;
  name?: string;
}

// This is a printstatement
console.log('Test');
console.log('Test');
// New pull from CMD
console.log('test');
const Nav = ({ title, name }: IOwnProps) => {
  const nav = css`
    padding: 20px;
    width: 100%;
    text-align: center;
    background-color: grey;
  `;

  const nav_a = css`
    list-style-type: none;
    color: white;
    margin: 12px;
    padding: 2px;
    text-decoration: none;
  `;

  return (
    <nav css={nav}>
      <a css={nav_a} href="" className="title">
        <b>Movie DataBase</b>
      </a>
      {/* <a href="">Home</a>
      <a href="">About us</a>
      <a href="">Tools</a>
      <a href="">Contact us</a> */}
    </nav>
  );
};

export default Nav;
