import React from "react";

const BreadCrumbs = (props) => {
  return(
    <div>
        <p className="category" id="nav"><a href="">Главная</a> 
          /  <a href="">Каталог</a>  / 
          {props.ishome !== undefined ? 
          " Бытовая техника / " + props.currentcategory : 
          props.currentcategory}</p>
    </div>
  )
}

export default BreadCrumbs;