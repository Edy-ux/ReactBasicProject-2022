import React from 'react';
import ReactDOM from 'react-dom';
import { data } from './components/Books'; //quando se usar export deve-se o {data}
import SpecificBook from './components/Book';

//CSS
import './index.css';

function BookList() {
  return (
    <section className="booklist">
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));
