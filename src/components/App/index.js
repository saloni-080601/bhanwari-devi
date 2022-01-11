import React from "react";

import Routing from "../../routing";
import Header from "../New-Header";
import Footer from "../New-Footer";

import "./styles.scss";

function App() {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        {" "}
        <Routing />{" "}
      </div>
      <Footer />
    </div>
  );
}

export default App;
