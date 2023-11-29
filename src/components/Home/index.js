import React from "react";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Mainhead from "../layout/mainhead";
import Main from "../layout/main";

function Home() {
  return (
    <div>
      <Header />
      <div className="main-wrapper">
        <Mainhead />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
