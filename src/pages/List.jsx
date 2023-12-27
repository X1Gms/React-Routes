import { Link, Outlet } from "react-router-dom";

const List = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/books/1">Book 1</Link>
        </li>
        <li>
          <Link to="/books/2">Book 2</Link>
        </li>
        <li>
          <Link to="/books/new">New Book</Link>
        </li>
      </ul>
      <Outlet context={{ More: "Read More" }} />
    </>
  );
};
export default List;
