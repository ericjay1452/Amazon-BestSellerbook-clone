import React from "react";
import "./FirstFooter.css";
import { AiOutlineRight } from "react-icons/ai";

const FirstFooter = () => {
  return (
      <>
        <a href="/" className="nav-link dblock changeBack">Back to top</a>

         <footer className="footer">
             <div className="container-fluid position-relative footer1 pt-5">
                 <div className="container text-white mx-auto">
                     <div className="row">
                         <div className="firstGrid col-3">
                             <p className="para">Get to Know Us</p>
                             <ul className="firstul position-relative">
                                 <li>
                                     <a href="/" className="nav-link text1">Careers</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Blog</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">About Amazon</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Investor Relations</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Amazon Devices</a>
                                 </li>
                             </ul>
                         </div>
                         <div className="secondGrid col-3">
                            <p className="para"> Make money with us</p>
                            <ul className="firstul position-relative">
                                 <li>
                                     <a href="/" className="nav-link text1">Sell products on Amazon</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Sell on Amazon Business</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Sell apps on Amazon</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Become an Affiliate</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Advertise your Products</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Self-Publish with Us</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Host an Amazon Hub</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1"> 
                                     <span style={{fontSize : "10px !important", fontWeight:" 200 !important"}}>< AiOutlineRight /></span>See More Make Money With Us</a>
                                 </li>
                             </ul>
                         </div>
                         <div className="thirdGrid col-3">
                             <p className="para">Amazon Payment Products</p>

                             <ul className="firstul position-relative">
                                 <li>
                                     <a href="/" className="nav-link text1">Amazon Business Card</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Shop with Points</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Reload Your Balance</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Amazon Currency Converter</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Advertise your Products</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Self-Publish with Us</a>
                                 </li>

                             </ul>
                         </div>
                         <div className="fourthGrid col-3">
                             <p className="para">Let us Help you</p>

                             <ul className="firstul position-relative">
                                 <li>
                                     <a href="/" className="nav-link text1">Amazon and COVID-19</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Your Account</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Your Orders</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Shipping Rate & Policies</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Returns & Replacements</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Manage Your Content and Devices</a>
                                 </li>

                                 <li>
                                     <a href="/" className="nav-link text1">Amazon Assistant</a>
                                 </li>
                                 <li>
                                     <a href="/" className="nav-link text1">Help</a>
                                 </li>
                            
                             </ul>
                         </div>
                     </div>
                 </div>
             </div>
         </footer>
             
      </>
  )
}

export default FirstFooter;