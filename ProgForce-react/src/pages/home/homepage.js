//standart components
import React from "react";

//connecting styles
import {Container} from "../container";
import ListOfCategory from './components/categorylist';
import ContainerWithCards from './components/cardcontainer';
import Banner from './components/banner';

export const Home = (props) => {
  return(
    <div id="main-body">
      <Banner/>

      <Container>
        <p className="category" id="nav"><a href="">Главная</a> 
          /  <a href="">Каталог</a>  / 
          {props.ishome !== undefined ? 
          " Бытовая техника / " + props.currentcategory : 
          props.currentcategory}</p>
          
        <div id="new-flex">     
          <ListOfCategory location={props.currentloc !== undefined ? props.currentloc : ""}/>

          <ContainerWithCards category={props.currentcategory}/>
        </div>
        
      </Container>

    </div>
  )
}
//<ContainerWithCards category={props.currentcategory}/>

