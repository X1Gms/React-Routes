import { useRoutes } from "react-router-dom";
import Books from "./ListBooks";
import Book from "./Books";
import NewBook from "./NewBook";
import List from "./List";
const BookRoutes = () => {
  const element = useRoutes([
    {
      element: <List />,
      children: [
        {
          index: true,
          element: <Books />,
        },
        {
          path: ":id",
          element: <Book />,
        },
        {
          path: "new",
          element: <NewBook />,
        },
      ],
    },
  ]);

  return element;

  /*<Routes>
      <Route element={<List />}>
        <Route index element={<Books />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />
      </Route>
  </Routes>*/
};
export default BookRoutes;
