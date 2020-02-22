import React from "react";

export const BreadCrumbs = (props) => {
  return(
    <div>
        <p className="category" id="nav"><a href="">Главная</a> 
          /  <a href="">Каталог</a>  / 
          {props.ishome !== false ? 
          " Бытовая техника / " + props.currentcategory : 
          props.currentcategory}</p>
    </div>
  )
}