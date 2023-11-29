import React from "react";
import Navigation from "../navigation";
function Header() {
  return (
    <div>
      <header className="header text-center">
        <h1 className="blog-name pt-lg-4 mb-0">
          <a className="no-text-decoration" href="index.html">
            Dev Cat's Blog
          </a>
        </h1>
        <Navigation></Navigation>
      </header>
    </div>
  );
}

export default Header;
