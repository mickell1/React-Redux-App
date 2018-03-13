import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component{
  constructor(props){
    super(props);

    this.submitBook = this.submitBook.bind(this);
  }

  submitBook(input){
    this.props.createBook(input);
  }

  render(){
    let titleInput;
    return(
      <div className="row">
        <div className="col-md-6">
          <h3>Books</h3>
          <table className="table">
            <thead>
              <th>
                <td>Title</td>
                <td></td>
              </th>
            </thead>
            <tbody>
              {this.props.books.map((book, index) =>
              <tr key={index}>
                <td>{book.title}</td>
                <td><Link to={`/books/${book.id}`}>View</Link></td>
              </tr>)}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h3>New Book</h3>
          <BookForm submitBook={this.submitBook}/>
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  createBook: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: book => dispatch(bookActions.createBook(book))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
