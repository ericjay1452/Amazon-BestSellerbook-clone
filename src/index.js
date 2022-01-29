import React from 'react';
import ReactDom from 'react-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// /import bootstrap from 'bootstrap';
import IntroHeader from './Components/introheader/IntroHeader';
import Mainpage from './Components/MainPage/Mainpage';
import Sublink from './Components/Sublink/Sublink';
import Allheader from './Components/AllHeader/Allheader';
import Header from "./Components/Header/Header";
import FilteredBooks from './Components/FilteredBooks/FilteredBooks';
import FirstFooter from './Components/FirstFooter/FirstFooter';
// All CSS structured !
import './index.css';
// import "./Components/introheader/IntroHeader.css"

function Main() {
  return (
    <>
    <Header />
    <Allheader />
    <Sublink />
   <IntroHeader />
   <Mainpage />
  <FilteredBooks />
<FirstFooter />
    </>
  )

}

ReactDom.render(<Main />, document.getElementById("root"));
