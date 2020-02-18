import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import paragraph from '../assets/fonts/Open_Sans/OpenSans-Regular.ttf';

export const Myfooter = styled.footer`
  width: 100%;
  background: #464646;
  padding-top: 30px;
  padding-bottom: 60px;
  margin-top: 200px;

  font-family: 'paragraph';
  
  @font-face {
    font-family: 'paragraph';
    src: url(${paragraph});
  }


  a,p, .ul-foot {
    color: #ccc;
    font-size: 14px;
    letter-spacing: 1px;

    line-height: 28px;
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none; /* Убираем маркеры */
  }

  a:hover, li:hover {
    color: red;
  }

`;

export const Container = styled.div`
  padding-left: 150px;
  padding-right: 150px;

  padding-bottom: 20px;
  padding-top: 20px;

  max-width: 1200px;
  position: relative;
  margin: 0 auto;

  display: flex;

  .trademark {
    justify-content: flex-start;
    flex-grow: 1;
  }

  .trademark p {
    width: inherit;
  }

  .links {
    justify-content: center;
    flex-grow: 3;
  }

  .development {
    justify-content: flex-end;
  }

  @media (max-width: 740px) {
    #new-flex {
      flex-direction: column;
    }
  }

  @media (max-width: 669px) {
    padding-left: 50px;
    padding-right: 50px;
    
  }
`;

const Footer = () => {
  return (
    <Myfooter>
      <Container>
        <div className="trademark category">
          <p>&#169; 2012-2013 ЗАО "Компания"</p>
          <Link to='/contacts'>info@name.ru</Link>
        </div>

        <div className="links">
          <ul className="category ul-foot">
            <li><Link  to='/'>Главная</Link></li>
            <li><Link  to='/catalog'>Каталог</Link></li>
            <li><Link  to='/delivery'>Доставка и оплата</Link></li>
            <li><Link  to='/pricelist'>Прайс лист</Link></li>
            <li><Link  to='/contacts'>Контакты</Link></li>
          </ul>
        </div>

        <div className="development category">
          <a href="">Разработка сайта</a>
          <p>компания  "Пиксель плюс"</p>
        </div>
      </Container>
    </Myfooter>
  )
}

export default Footer;

