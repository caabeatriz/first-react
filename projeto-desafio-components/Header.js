import React from 'react';
import './App.css';

const Header = (props) => {
  return (
   <nav>
     <a href='wwww.google.com'>
     {props.texto}
     </a>
   </nav>
)
}

export default Header;
