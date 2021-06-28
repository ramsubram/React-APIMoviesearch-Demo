interface IProp {
  title: string;
  content: string;
}

const info = ({ title, content = '' }: IProp) => {
  return (
    <div>
      <p>{title}</p>
      <p>{content}</p>)
    </div>
  );
};

export default info;
