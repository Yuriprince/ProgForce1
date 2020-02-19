import React from "react";

import rounds from'../../../assets/img/Rounds.jpg';
import banner3 from'../../../assets/img/banner3.jpg';
import banner2 from'../../../assets/img/banner2.jpg';
import left from '../../../assets/img/left.png';
import right from '../../../assets/img/right.png';

import {Container} from "../../container";

import styled from 'styled-components';

//use of slide functions
import{ clickLeft, clickRight} from '../..//../scripts/slide';

const link  = React.createRef();
const link2 = React.createRef();
const link3 = React.createRef();

const scrollLeft = () => {
  const sliderImages = [link.current, link2.current, link3.current];
  clickLeft(sliderImages);
}

const scrollRight = () =>  {
  const sliderImages = [link.current, link2.current, link3.current];
  clickRight(sliderImages);
}

const Banner = (props) => {

  return(
    <Wrap img1={rounds} img2={banner2} img3={banner3} leftimg={left} rightimg={right}>
      <div id="slider">

        <div className="slide slide1" ref={link}>
          <div className="slide-content"></div>
        </div>

        <div className="slide slide2" ref={link2}>
          <div className="slide-content"></div>
        </div>

        <div className="slide slide3" ref={link3}>
          <div className="slide-content"></div>
        </div>

        <Container>
          <div className="imgbanbtn imgbanbtn-prev" 
            id="imgbanbtn-prev" onClick={scrollLeft}></div>

          <div className="imgbanbtn imgbanbtn-next" 
            id="imgbanbtn-next" onClick={scrollRight}></div>
        </Container>
      </div>
    </Wrap>
  );
}

export default Banner;


const Common = styled.div`
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const Wrap = styled(Common)`
  position: relative;
  background: black;
  
  #slider {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    height: 400px;
    overflow: hidden;
    background: red;
  }

  .slide {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: inherit;
  }

  .slide1 {
    background-image: url(${props => props.img1});
  }
  .slide2 {
    display: none;
    background-image: url(${props => props.img2});
  }
  .slide3 {
    display: none;
    background-image: url(${props => props.img3});
  }

  .slide-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 400px;
  }


  .imgbanbtn {
    width: 30px;
    height: 50px;
    position: absolute;
    z-index: 2000;
    top: 180px;
    background-color: gray;
    border-radius: 4px;
    opacity: 0.8;
    cursor: pointer;
  }

  .imgbanbtn:hover {
    opacity: 0.9;

  }

  .imgbanbtn-prev {
    left: 150px;
    background-image: url(${props => props.leftimg});
    background-size: 120%;
    background-position: center;
    background-repeat: no-repeat;
    top: -222px;
  }

  .imgbanbtn-next {
    right: 150px;
    background-image: url(${props => props.rightimg});
    background-size: 120%;
    background-position: center;
    background-repeat: no-repeat;
    top: -222px;
  }

  @media (max-width: 669px) {
    .imgbanbtn-prev {
      left: 50px;
    }

    .imgbanbtn-next {
      right: 50px;
    }
  }
`;