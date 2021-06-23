interface IOwnProps {
  title: string | boolean | Array<string>;
  name?: string;
}

// This is a printstatement
console.log('Test');
console.log('Test');
// New pull from CMD
console.log('test');
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
