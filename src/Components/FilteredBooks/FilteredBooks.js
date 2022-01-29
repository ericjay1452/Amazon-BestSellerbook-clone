import React from "react";
import "./FilteredBook.css"

const FilteredBooks = () => {
           return (
               <>
                <article className="container-fluid">
                    <div className="row row2 py-3">
                        <div className="col-10">
                        <div className="left ms-4">
                                 <h4>Inspired by your Browser History</h4>
                           </div>
                        </div>

                        <div className="col-2 text-center text-dark">
                        <div className="right"> 
                        page 1 of <span>8 </span>
                        </div>
                        </div>
                           </div>

                    
                </article>
               </>
           )
}

export default  FilteredBooks