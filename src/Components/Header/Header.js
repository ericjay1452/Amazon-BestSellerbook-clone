import React from "react";
import Logo from "..//amazon-dark.png"
import {MdLocationOn} from "react-icons/md"
import { BsSearch } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import "./Header.css" 

const Header = () => {
    return (
        <header className="header">
            <div className="container-fluid flexcontainer">

                <div className="imgContainer">
                  <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/https://www.amazon.com/ref=nav_logo">
    <img src={Logo} alt="" className="img-fluid" width={"50px"} height={"50px"}/>
    </a>
    </nav>
      </div>

                <div className="location">
                    <div className="location-details d-flex flex-column">
                        <p>Deliver to</p>
                        <p><span><MdLocationOn /></span>
                        Nigeria</p>
                    </div>
                </div>


                <div className="form-controller">
                <nav className="navbar">
  <form className="d-flex lap">
  <div className="input-group">
      <div className="input-group-text">

      <select className="select" id="select" aria-label="Example select with button addon">
    <option value={"All Department"}>All Department</option>
    <option value={"Arts"}>Arts & Crafts</option>
    <option value={"Automotive"}>Automotive</option>
    <option value={"Baby"}>Baby</option>
    <option value={"Beauty"}>Beauty & Personal Care</option>
    <option value={"Books"}>Books</option>
    <option value={"Baby"}>Baby</option>
  </select>
      </div>

  <input type="text" className="form-control form text-center" placeholder="" name="Search" />
  <button className="input-group-text" id="button"><BsSearch /></button>

</div>
    </form>
</nav>
       </div>
            
            <div className="country">
              <p> U.S.A</p>
            </div>

            <div className="Hello">
                <p>Hello, sign in <br></br>
                 Account & Sign in
                </p>
            </div>

            <div className="return">
                <p>Return & <br></br> Orders</p>
            </div>

            <div className="cart">
                <GiShoppingCart /> <span>Cart</span>
            </div>

</div>
        </header>
    )
}

export default Header;