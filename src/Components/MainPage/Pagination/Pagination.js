import React from "react";
import  { BsArrowLeft } from "react-icons/bs";
import "./pagination.css";

const Pagination = () => {
    return (
<nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-link">
      <BsArrowLeft  className="arrowLeft"/>
      Previous
    </li>
    <li className="page-item"><a className="page-link" href="/">1</a></li>
    <li className="page-item"><a className="page-link" href="/">2</a></li>
    <li className="page-item">
      <a className="page-link" href="/">Next page</a>
    </li>
  </ul>
</nav>
    )
}

export default Pagination