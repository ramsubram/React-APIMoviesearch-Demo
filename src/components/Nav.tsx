interface IOwnProps {
  title: string | boolean | Array<string>;
  name?: string;
}

const Nav = ({ title, name = 'Ram' }: IOwnProps) => {
  return (
    <nav>
      <a href="" className="title">
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
