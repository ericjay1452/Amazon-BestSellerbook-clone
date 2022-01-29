import React from "react";
import Book from "./Books/Books" 
import Anchor from "./BestSellinglink/Anchor";

const Mainpage = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
               <Anchor />
               
                <div className="col-lg-10 border-left">
                <Book />
                </div>

            </div>
        </div>
        </>
        )
}

export default Mainpage