import React from "react";
import "./Book.css";
import { AiOutlineRight } from "react-icons/ai";

const   Book = (props) => {
    const {Img, Author, Price, Title, Rating, Type, index} = props;
    return (
        <>
             <div className="layer" style={{width : "100% !important"}}>     
        <div className="box pad position-relative">
             <span className="ranking text-light"> # {
            index + 1 
            }
            </span>
            <div className="img">
            <img src={Img} alt=""/>
            </div>
            
            <p style={{paddingTop : "3px"}}>
            <a className="nav-link" href="/">{Title}</a>
                </p>          
               <a href="/" className="nav-link"> <AiOutlineRight />{Author}</a> <br />
               <a href="/" className="nav-link">{Rating}{Rating}{Rating}{Rating}{Rating} <span>567900</span></a>
               <p>{Type}</p>
               <a href="/" className="nav-link">{Price}</a> 
        </div>
        </div>
        </>
    )
}

export default Book;