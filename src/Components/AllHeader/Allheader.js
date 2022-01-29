import  React from "react";
import "./All_header.css";
import { GiHamburgerMenu } from "react-icons/gi"

const All_header = () => {
 return (
     <div className="container-fluid change">
         <div className="row">
             <div className="col-9">
                 <nav className="nav pad">
         <li className="nav-item effect">
          <a className="nav-link text pad" aria-current="page" href="/">
              <span className="ham"> <GiHamburgerMenu /></span>
              <span className="all">All</span> 
          </a>
        </li>

        <li className="nav-item effect">
        <a className="nav-link text pad" href="/">Today's Deals</a>
         </li>

        <li className="nav-item effect">
         <a className="nav-link text pad" href="/">Customers Service</a>
       </li>

       <li className="nav-item effect">
         <a className="nav-link text pad" href="/">Registry</a>
       </li>

       <li className="nav-item effect">
         <a className="nav-link text pad" href="/">Gifts Cards</a>
       </li>

       <li className="nav-item effect">
         <a className="nav-link text pad" href="/">Sell</a>
       </li>
       </nav>

             </div>

             <div className="col-3 m-auto">
             <ul className="nav justify-content-end pe-3">
  <li className="nav-item text-hover">
  <a href="/" className="nav-link text">New Year, new deals</a>
  </li>
</ul>
             </div>
         </div>
     </div>
     )}

export default All_header;