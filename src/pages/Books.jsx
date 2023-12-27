import { useOutletContext, useParams } from "react-router-dom";

const Books = () => {
  const { id } = useParams();
  const obj = useOutletContext();

  return (
    <>
      <h1>Book {id}</h1>
      <p>{obj.More}</p>
    </>
  );
};
export default Books;
