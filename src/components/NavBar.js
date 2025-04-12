import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const mappedLinks = links.map((link, index) => {
    return <li key = {index}>{link}</li>
  })

  return <nav>{/* display an <a> tag for each link here */}
    <a href="#home">home</a>
      <a href="#about">about</a>
      <a href="#projects">projects</a>
  </nav>;
}

export default NavBar;
