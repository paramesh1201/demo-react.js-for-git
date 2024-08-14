
import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function project1() {
  return(
    <div>
    
      <Header/>
      <Footer/>
      
    </div>  )
}
ReactDom.render(project1(),document.getElementById('root'));