import React from "react";
import "./FilteredBook.css"
import Container from "./Container";

const FilteredBooks = () => {
           return (
               <>
                <section className="container-fluid row2">
                    <div className="row  py-3">
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

                           <div className="container mx-auto bg-warning">
                                 <Container />            
                           </div>
                    
                </section>
               </>
           )
}

export default  FilteredBooks