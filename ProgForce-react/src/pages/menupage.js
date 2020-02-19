import React, {useState} from "react";
import {Container} from "./container";
import Spin from './home/components/spinner';
const MenuPage = (props) => {

  const [isload, setLoad] = useState(true);

  setTimeout(()=>{setLoad(false);}, 1000);

  return ( 
    <Container>
      {isload ? <Spin/> : <h2>{props.text}</h2>}
    </Container>
  )
}

export default MenuPage;