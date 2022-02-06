import React from 'react';
import Logo from "../amazon-dark.png";
import "./SecondFooter.css"

 const  SecondFooter = ()=> {
    return  (
    <>
       <section className='section1'>
            <footer className="footer">
        <div className="containerfirst">

            <div className="first">
            <a href="/" className="bottomLogo">
                  <img src={Logo} alt="pix" width="50" height= "50"/>
              </a>
            </div>

            <article className="second">
            
             <button type='button' className='globe'>
             <i className="fas fa-globe" style={{display : "block"}}></i>
             <p className='english'>English</p>
             <i className="fas fa-sort-up" style={{display: "block"}}></i>
             </button>

             <button type='button'> 
             
             <span>$ USD - U.S. Dollar</span></button>

             <button type='button'>
                 <p>United States</p>
             </button>
                
            </article>
             

        </div>
           </footer> 
       </section>
        </> );
}
export default SecondFooter