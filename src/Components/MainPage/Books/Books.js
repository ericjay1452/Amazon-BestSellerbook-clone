import React from "react";
import "./Books.css"
import BookList from "../../BookList/Booklist";
import Book from "../../Book/Book";
import Pagination from "../Pagination/Pagination";

const Books = ()=> {
    return (
        <>
         <h4 className="p-3">Best Sellers in Books</h4>
         <div className="container2">
         <div className="gridContainer">                  
                   {
                     BookList.map((book, index) =>{
                       return <Book  key = {book.id} {...book} index = {index}/>
                     })
                   }

                   </div>
                   </div>

                  <Pagination />
   </>
    )
}

export default Books