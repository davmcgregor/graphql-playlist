import React from "react";
import { useQuery } from "@apollo/client";

import { getBooksQuery } from "../queries/queries";

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>"Loading..."</p>;
  if (error) return <p>`Error! ${error.message}`</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map(book => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
