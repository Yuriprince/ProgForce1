import React from "react";
import {Link} from 'react-router-dom';

import styled from 'styled-components';
import phone from '../assets/fonts/Open_Sans_Condensed/OpenSansCondensed-Light.ttf';
import paragraph from '../assets/fonts/Open_Sans/OpenSans-Regular.ttf';

const Header = (props) => {
  return (
    <header>
      <Container>

        <div id="company-name">
          <div id="text_company">

            <div id="logo"></div>

            <div id="text">
              <h2 id="h2">Название компании</h2>
              <p>Самая клёвая компания</p>
            </div>

          </div>
        </div>

        <div id="phone">
          <p className="phone_number">+7(499) 777-77-77</p>
          <p className="phone_number">+7(499) 777-77-77</p>
          <a className="dot" onClick={props.open} 
          id="callback" href="#modalarea">Обратная связь</a>
        </div>

      </Container>

      <Menu>

        <div className="horizontal">
          <div className="">
            <Link className="linkmenu" to='/'>Главная</Link>
          </div>

          <Slash/>

          <div className="">
            <Link className="linkmenu" to='/catalog'>Каталог</Link>
          </div>

          <Slash/>

          <div className="linkmenu">
            <Link className="linkmenu" to='/delivery'>Доставка и оплата</Link>
          </div>

          <Slash/>

          <div className="">
            <Link className="linkmenu" to='/pricelist'>Прайс-лист</Link>
          </div>

          <Slash/>

          <div className="">
            <Link className="linkmenu" to='/contacts'>Контакты</Link>
          </div>
    
        </div>

      </Menu>
    </header>
  )
}

export default Header;

const AdaptiveSlash = styled.div`
  display : block;

  @media (max-width: 990px) {
    display : none;
  }
`;

export const Slash = () => {
  return <AdaptiveSlash> | </AdaptiveSlash>;
}

export const Container = styled.div`
  padding-left: 150px;
  padding-right: 150px;

  padding-bottom: 20px;
  padding-top: 20px;

  max-width: 1200px;
  position: relative;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  font-family: 'paragraph';

  @font-face {
    font-family: 'phone';
    src: url(${phone});
  }

  @font-face {
    font-family: 'paragraph';
    src: url(${paragraph});
  }

  @font-face {
    font-family: 'numlinks';
    src: url('../assets/fonts/Open_Sans/OpenSans-Light.ttf');
  }

  #company-name {
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    flex-grow: 1;
  }

  #phone {
    justify-content: flex-end;
    padding: 0;
    margin: 0;
  }

  #company-name #text_company h2, p{
    padding: 0;
    margin: 5px;
    width: 190px;
  }

  #company-name #text_company p{
    font-size: 14px;
    width: inherit;
    margin-left: 5px;
    margin-right: 5px;
  }

  #text_company, #text {
    padding: 0;
  }

  #text {
    padding-left: 5px;
  }

  #h2 {
    line-height: 24px;
  }

  #logo { 
    background-color: #464646;
    height: 70px;
    width: 70px;
  }


  #logo, #text {
    display: inline-block;
    vertical-align: top;

  }

  .phone_number {
    font-size: 36px;
    padding-top: 0px;
    width: inherit;
    font-family: 'phone';
    margin: 0;
  }

  #callback {
    font-size: 20px;
    color: black;
    font-weight: 700;
    float: right;
  }

  a.dot {
    text-decoration: none; /* Убираем подчеркивание */
    border-bottom: 2px dashed; /* Добавляем свою линию */ 
  }

  #callback:hover,a:hover {
    color: red;
  }

  .horizontal li,div {
    padding: 15px;
    font-size: 22px;
    list-style-type: none; /* Убираем маркеры */
  }


  @media (max-width: 669px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const Menu = styled.div`
  align-items: center;
  padding: 0;
  padding-top: 50px;
  font-family: 'paragraph';
  
  @font-face {
    font-family: 'paragraph';
    src: url(${paragraph});
  }

  .horizontal {
    display: flex;
    flex-direction: row;
    background-color: #464646;
    color: white;
    height: auto;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }

  .horizontal li,div {
    padding: 15px;
    font-size: 22px;
    list-style-type: none; /* Убираем маркеры */
  }

  .linkmenu {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 990px) {
    .horizontal {
      flex-direction: column;
    }
  }

  a:hover {
    color: red;
  }
`;
