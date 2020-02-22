import React from "react";
import MenuPage from '../pages/menupage';

import {Home} from '../pages/home/homepage';
import {Route, Switch} from 'react-router-dom';
import {Container} from "../pages/container";

const Catalog = function() {
  return (<MenuPage text="Каталог товаров"/>);
}

const Delivery = function() {
  return (<MenuPage text="Доставка товаров"/>);
}

const PriceList = function() {
  return (<MenuPage text="Прайс-лист"/>);
}

const Contacts = function() {
  return (<MenuPage text="Контакты"/>);
}

//subcatalog
const Categories = function(props) {
  return (<Home location={props.location.pathname}/>);
}

const Product = (props) => {
  
  const prodId = props.match.params.number;

  return(
    <Container> 
      <h2>Товар № {prodId}</h2>
    </Container>
  )
}

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Categories} />
        <Route path='/delivery' component={Delivery}/>
        <Route path='/pricelist' component={PriceList}/>
        <Route path='/contacts' component={Contacts}/>


        <Route path='/catalog/:id' component={Categories}/>
        <Route path='/catalog' component={Catalog}/>

        <Route path="/:number" component={Product}/>

      </Switch>
    </main>
  )
}


export default Main;