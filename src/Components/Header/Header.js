import React from "react";
import Logo from "..//amazon-dark.png"
import {MdLocationOn} from "react-icons/md"
import { BsSearch } from "react-icons/bs";
import "./Header.css" 

const Header = () => {
    return (
        <header className="header">
            <div className="container-flui d-flex">

                <div className="imgContainer">
                  <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/https://www.amazon.com/ref=nav_logo">
    <img src={Logo} alt="" className="img-fluid" width={"50px"} height={"50px"}/>
    </a>
    </nav>
      </div>

                <div className="location">
                    <div className="location-details d-flex">
                        <p>Deliver to</p>
                        <p><span><MdLocationOn /></span>
                        Nigeria</p>
                    </div>
                </div>


                <div>
                <nav className="navbar">
  <form className="d-flex">
  <div className="input-group">
      <div className="input-group-text">

      <select className="" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option value={"All Department"}>All Department</option>
    <option value={"All Department"}>One</option>
    <option value={"All Department"}>Two</option>
    <option value={"All Department"}>Three</option>
  </select>
      </div>
      <input type="text" placeholder="Search.." name="search" className="form-control example"/>
  <button type="submit"><BsSearch /></button>
</div>
    </form>
</nav>
       </div>
            
            <div className="country">
              
            </div>

</div>
        </header>
    )
}

export default Header;