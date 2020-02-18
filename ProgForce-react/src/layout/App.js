import React from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Modal from "./modalwindow";

const opeModal = () => {
  const body = document.getElementsByTagName('body')[0];
  body.style.overflow = "hidden";
}

const closeModal = () => {
  const body = document.getElementsByTagName('body')[0];
  body.style.overflow = "visible";
}

const App = () => {
  return ( //родительский тег всегда один
    <div id="appdiv">
      <Header open={opeModal}/>
      <Main/>
      <Footer/>
      <Modal close={closeModal}/>
    </div>
  )
}

export default App;