import { css } from '@emotion/react';

interface IProp {
  title: string;
  content: string | number;
}

const table = css``;

const info = ({ title, content }: IProp) => {
  return (
    <div>
      <p>
        <b>{title}:</b>
        <div>{content}</div>
      </p>
    </div>
  );
};

export default info;
