import React from 'react';
import coverImage from '../../assets/cover/pexels.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Full-Stack Devolper</h1>
      <img src={coverImage} alt="mountains"></img>
      {props.children}
    </header>
  );
}

export default Header;