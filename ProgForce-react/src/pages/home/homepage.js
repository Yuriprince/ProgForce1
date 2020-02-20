//standart components
import React from "react";

//connecting styles
import {Container} from "../container";
import ListOfCategory from './components/categorylist';
import ContainerWithCards from './components/cardcontainer';
import Banner from './components/banner';
import { BreadCrumbs } from "./components/breadcrunbs";


let callForwarding = new Map();
callForwarding.set('/', 'Автомобили');
callForwarding.set('/catalog/autos', 'Автомобили');
callForwarding.set('/catalog/clothes', 'Одежда');
callForwarding.set('/catalog/mobiletech', 'Мобильная техника');
callForwarding.set('/catalog/computers', 'Компьютеры');
callForwarding.set('/catalog/property', 'Недвижимость');

callForwarding.set('/catalog/appliances/microwaves', 'Микроволновки');
callForwarding.set('/catalog/appliances/freezers', 'Холодильники');
callForwarding.set('/catalog/appliances/washes', 'Посудомойки');
callForwarding.set('/catalog/appliances/boilers', 'Чайники');


export const Home = (props) => {
  return(
    <div id="main-body">
      <Banner/>

      <Container>
        <BreadCrumbs currentcategory={props.currentcategory}/>
          
        <div id="new-flex">     
          <ListOfCategory location={props.location !== undefined ? props.location : ""}/>

          <ContainerWithCards category={callForwarding.get(props.location)}/>
        </div>
        
      </Container>

    </div>
  )
}
//<ContainerWithCards category={props.currentcategory}/>

