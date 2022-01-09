import React from 'react';

const Book = ({ img, title, author }) => {
  return (
    <div>
      <article className="book">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
      </article>
    </div>
  );
};

export default Book;
