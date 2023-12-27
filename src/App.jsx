import {
  Routes,
  Route,
  NavLink,
  useRoutes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import BookRoutes from "./pages/BookRoutes";
const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/contacts",
      element: <Contacts />,
    },
    {
      path: "/books/*",
      element: <BookRoutes />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              {({ isActive }) => (isActive ? "Active Home" : "Home")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
      {element}
      {/* Or
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  */}
    </>
  );
};

export default App;
