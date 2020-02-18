import React from "react";
import MenuPage from '../pages/menupage';

import {Home} from '../pages/home/homepage';
import {Route, Switch} from 'react-router-dom';
import {Container} from "../pages/container";


const HomePage = function(props) {
  return (<Home currentcategory="Автомобили" currentloc={props.location}/>);
}

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


//catalog
const Autos = function() {
  return (<Home currentcategory="Автомобили"/>);
}

const Appliances = function() {
  return (<Home currentcategory="Быт"/>);
}

const Mobiletech = function() {
  return (<Home currentcategory="Мобильная техника"/>);
}

const Computers = function() {
  return (<Home currentcategory="Компьютеры"/>);
}

const Clothes = function() {
  return (<Home currentcategory="Одежда"/>);
}

const Property = function() {
  return (<Home currentcategory="Недвижимость"/>);
}


//subcatalog
const MicroWaves = function() {
  return (<Home currentcategory="Микроволновки"/>);
}

const Freezers = function() {
  return (<Home currentcategory="Холодильники"/>);
}

const Washes = function() {
  return (<Home currentcategory="Посудомойки"/>);
}

const Boilers = function() {
  return (<Home currentcategory="Чайники"/>);
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
        <Route exact path="/" component={HomePage} />
        <Route path='/delivery' component={Delivery}/>
        <Route path='/pricelist' component={PriceList}/>
        <Route path='/contacts' component={Contacts}/>



        <Route path='/catalog/autos' component={Autos}/>

        <Route path='/catalog/appliances/microwaves' component={MicroWaves}/>
        <Route path='/catalog/appliances/freezers' component={Freezers}/>
        <Route path='/catalog/appliances/washes' component={Washes}/>
        <Route path='/catalog/appliances/boilers' component={Boilers}/>

        <Route path='/catalog/appliances' component={Appliances}/>

        <Route path='/catalog/mobiletech' component={Mobiletech}/>
        <Route path='/catalog/computers' component={Computers}/>
        <Route path='/catalog/clothes' component={Clothes}/>
        <Route path='/catalog/property' component={Property}/>

        <Route path='/catalog' component={Catalog}/>
        <Route path="/:number" component={Product}/>

      </Switch>
    </main>
  )
}


export default Main;