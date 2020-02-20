import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import Products from'../../../db_imitation/products.json';
import {Link} from 'react-router-dom';
import ParagraphAboutCompany from './paragraphs';
import tovar from '../../../assets/img/nofoto2.jpg'
import Spin from '../components/spinner';

const checkCategory = (cat,item,data_sampling) => {
  if(cat === 'Быт')
    {
      if(item.category === "Микроволновки" ||
         item.category === "Холодильники" ||
         item.category === "Посудомойки" ||
         item.category === "Чайники") {
        data_sampling.push(item);
      }
    }

    else if(item.category === cat) {
      data_sampling.push(item);
    }
}


const getPages = (cat) => {

  let data_sampling = [];

  Products.products.forEach(function(item, i) {
    checkCategory(cat, item, data_sampling);
  });

  let elements = data_sampling.length / 10;
  let mypages  = [];

  if(!Number.isInteger(elements))
  {
    elements = Math.trunc(elements);
    elements++;
  }

  for(let i = 1; i <= elements; i++) {
    mypages.push(i);
  }
  return mypages;
}

const getPagingProducts = (koef, cat) => { 

  let numbers = Products.products.length / 10;
  let start   = koef*10;
  let end     = Products.products.length - ((numbers - koef - 1)*10);
  let data_sampling  = [];
  let final_sampling = [];

  Products.products.forEach(function(item, i) {
    checkCategory(cat, item, data_sampling);
  });

  data_sampling.forEach(function(item, i) {
    if((i >= start) && (i< end))  {
      final_sampling.push(item);
    }
  });

  let prodarray = {products : final_sampling};

  return prodarray.products;
}

const LoadingData = (props) => {
  const [isload, setLoad] = useState(true);
  const [currentpage, setPage] = useState(0);

  setTimeout(()=>{setLoad(false);}, 500);

  if(isload) {
    return (
      <Spin/>
    );
  }
  else {
    return (
      <div className="cards" id="cards">
        { 
          getPagingProducts(currentpage, props.category).length > 0 ?

          getPagingProducts(currentpage, props.category).map(p => ( /*убрать all() */
            <div className="product-card category" key={p.id}>
              <div className="tovar"></div>
              <p className="tovar-desc">{p.decription} id: {p.id}</p>
              <p className="price">{p.price} p.<Link to={`/${p.id}`}>
              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
              </Link></p>
            </div>
          )) :
          <div>Товары отсутствуют по данной категории</div>
        }
      </div>
    );
  }

}



const ContainerWithCards = (props) => {

  const [currentpage, setPage] = useState(0);
  //const [isload, setLoad] = useState(true);

  //setTimeout(()=>{setLoad(false);}, 500);

  return (
    <CardContainer img={tovar}>

      <div id="numbers" /*ref={cards}*/>
        {   
          getPages(props.category).map(p => ( 
            <a key={p} href="" className={currentpage === p-1 ? "lined" : ""}
              onClick={(event) => {
                event.preventDefault();
                setPage(p-1);
              }}
              >{p}
            </a>
          ))
        }
      </div> 

      <div>
        <LoadingData category={props.category}/>
      </div>


      <div id="description">
        <hr/>
        <ParagraphAboutCompany/>
      </div>

    </CardContainer>
  );
}

export default ContainerWithCards;

const CardContainer = styled.div`
  margin: 0;
  padding: 0;

  .cards {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0;
    padding: 0;
  }

  .cards div {
    padding: 15px;
    margin: 7px;
  }

  .cards div.tovar {
    padding: 0px;
    margin: 0px;
  }

  .cards i {
    float:right;
    color: white;
  }
  
  .product-card {
    margin: 5px;
    background-color: #a0a0a0;
    width: 200px;
    min-height: 325px;
    margin: 7px;
  }

  .category {
    list-style-type: none;
    font-size: 14px;
    letter-spacing: 0px;
    color: #464646;
  }

  .cards .category {
    color: black;
  }

  .tovar {
    background-image: url(${props => props.img});
    width: 200px;
    height: 200px;
    background-size: cover;
  }

  .tovar-desc {
    margin-top: 20px;
    font-size: 14px;
    line-height: 15px;
    font-weight: 500;
  }

  .price {
    margin-top: 50px;
    margin-bottom: 0px;
    font-size: 26px;
    font-weight: 700;
  }

  #numbers {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
  }

  #numbers a {
    text-decoration: none;
    padding-right: 5px;
    font-family: 'paragraph';
    color: black;
  }

  #numbers a:hover, .cards i:hover {
    color:red;
  }

  .lined {
    font-weight: 700;
  }

  #description {
    padding-top: 35px;
  }

  .richtext {
    font-size: 14px;
    flex-grow: 1;
  }

  @media (max-width: 740px) {
    #new-flex {
      flex-direction: column;
    }

    #content-products {
      display: flex;
      justify-content: center;
    }

    .cards {
      justify-content: center;
    }
  }
`;
