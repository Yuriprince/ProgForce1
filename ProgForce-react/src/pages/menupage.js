import React, {useState, useEffect} from "react";
import {Container} from "./container";
import { ClipLoader } from "react-spinners";
import { css } from '@emotion/core';

const center = css`
  display: block;
  margin: 0 auto;
  margin-top: 100px;
`;

export const Spin = () => {
  return(
    <ClipLoader
      css={center}
      size={100}
      color={"#123abc"}
    />
  );
}

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