import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

const NavBar = (props) => {
  return (
    <div>
      <h3>This is sample text</h3>
    </div>
  )
}

export default NavBar

// <SVG
// src="../../../assets/images/books-light.svg"
// preloader={<Loader />}
// onLoad={(src) => {
  //   myOnLoadHandler(src);
  // }}
  // >
  // Here's some optional content for browsers that don't support XHR or inline
  // SVGs. You can use other React components here too. Here, I'll show you.
  // <img src="../../../assets/images/pixabay_book-1773756.png" />
  // </SVG>
