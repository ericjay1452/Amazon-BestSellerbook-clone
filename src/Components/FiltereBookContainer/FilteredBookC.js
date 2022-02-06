import React, { Component } from 'react';
import Container from '../FilteredBooks/Container';
import BookList from '../BookList/Booklist';
import FilteredBooks from "../FilteredBooks/FilteredBooks"


class FilteredBookC extends Component {

  render() {
    return <>
      <section>
        <FilteredBooks>
          {
              BookList.map( (book, index) => {
                return (<Container key = {book.id}  {...book} /> )
              })
          }
          </FilteredBooks>
      </section>

    </>;
  }
}

export default FilteredBookC
