import { books } from './books';
import Book from './Book';

function BookList() {
  return (
    <>
      <h1>ספרים מומלצים על מדינתנו</h1>
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
}

export default BookList;
