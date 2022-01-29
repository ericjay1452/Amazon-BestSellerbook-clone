import React from "react";
import "./Sublink.css"

const Sublink = () => {
return (
    <div className="conatiner top ps-3">
        <ul className="nav position-relative">

  <li className="nav-item sublink-li">
    <a className="nav-link-1 sublink firstlink" aria-current="page" href="/">Books</a>
  </li>

  <li className="nav-item sublink-li">
    <a className="nav-link-1 sublink" href="/">Advanced Search</a>
  </li>
  
  <li className="nav-item sublink-li">
    <a className="nav-link-1 sublink" href="/">New Releases</a>
  </li>

  <li className="nav-item sublink-li">
    <a className="nav-link-1 sublink" href="/">Best Sellers and More</a>
  </li>

  <li className="nav-item sublink-li">
    <a className="nav-link-1 sublink" href="/">Children's Books</a>
  </li>

  <li className="nav-item sublink-li">
    <a className="nav-link-1 sublink" href="/">Textbooks</a>
  </li>

  <li className="nav-item sublink-li">
    <a className="nav-link-1 sublink" href="/">Textbook Rentals</a>
  </li>

  <li className="nav-item sublink-li">
    <a className="nav-link-1 sublink" href="/">Best Books of the Month</a>
  </li>
</ul>
    </div>
)
}

export default Sublink