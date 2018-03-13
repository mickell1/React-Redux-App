import React from 'react';
import {Link} from 'react-router';

const BookDetails = ({book, addToCart}) => {
  return (
    <div className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src="http://placehold.it/200/450" alt="placehold" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{book.title}</h4>
        <ul>
          <li><strong>Author: </strong>{book.author}</li>
          <li><strong>Price: </strong>£{book.price}</li>
          <li><strong>Year: </strong>{book.year}</li>
          <br/>
          <button className="btn btn-primary" onClick={event => addToCart(book)}>Buy</button>
        </ul>
      </div>
      <a href="/">Back to Home</a><br/>
      <a href="/books">Back to Books</a>
    </div>
  );
};

export default BookDetails;
