import React, {useState} from "react";
import paragraph from '../../../assets/fonts/Open_Sans/OpenSans-Regular.ttf';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import BreadCrumbs from './breadcrunbs';
import ContainerWithCards from './cardcontainer';

const categories = {
  value : [{id : 1, name : 'Автомобили', link: '/catalog/autos'},
           {id : 2, 
            name : 'Бытовая техника',
            appliances : [{id : 1, name : 'Микроволновки', 
                          link: '/catalog/appliances/microwaves'},
                          {id : 2, name : 'Холодильники', 
                          link: '/catalog/appliances/freezers'},
                          {id : 3, name : 'Посудомойки', 
                          link: '/catalog/appliances/washes'},
                          {id : 4, name : 'Чайники', 
                          link: '/catalog/appliances/boilers'}],
            link: '/catalog/appliances'},
           {id : 3, name : 'Мобильная техника', link: '/catalog/mobiletech'},
           {id : 4, name : 'Компьютеры', link: '/catalog/computers'},
           {id : 5, name : 'Одежда', link: '/catalog/clothes'},
           {id : 6, name : 'Недвижимость', link: '/catalog/property'}],

}

const ListOfCategory = (props) => {

  const [category, setCategory] = useState('Автомобили');
  const [isload, setLoad] = useState(true);

  return(
    <div>
      <BreadCrumbs currentcategory={category}
        ishome = {props.location.includes('appliances') === true ? true : false}/>

      <NewFlex>
        <CategoryList>
          <ul className="category"> {
            categories.value.map(p => (
              <li key={p.id}>
                {p.id === 2 ? 
                  <ul id="main-cat">
                    <p className="linkmenu">{p.name}</p> {
                      p.appliances.map(el => (
                        <li key={el.id}><NavLink to={el.link} className="linkmenu"
                          activeClassName="lined" 
                          onClick={()=>{
                            setCategory(el.name)
                            setLoad(true);
                          }}
                        >{el.name}</NavLink></li>
                      ))
                    }
                  </ul> : 
                  <NavLink to={p.link} 
                    className={p.id === 1 && props.location === '/' ? 
                      "linkmenu lined" : "linkmenu"}
                    activeClassName="lined"
                    onClick={()=>{
                      setCategory(p.name);
                      setLoad(true);
                    }}>{p.name}</NavLink>
                }
              </li>
            ))
          }
          </ul>
        </CategoryList>

        <ContainerWithCards category={category} isload={isload} setLoad={setLoad}/>
      </NewFlex>
    </div>
  );
}

export default ListOfCategory;


const NewFlex = styled.div`
  padding: 0;
  padding-top: 10px;
  display: flex;
  flex-direction: row;

  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

const CategoryList = styled.div`
  margin: 0;
  padding: 0px 10px 0px 0px;
  min-width: 230px;
  font-family: 'paragraph';

  @font-face {
    font-family: 'paragraph';
    src: url(${paragraph});
  }

  .lined {
    text-decoration: underline;
    margin: 0;
  }

  #main-cat {
    list-style-type: square;
    padding: 0;
    margin: 0;
  }

  #main-cat li {
    text-decoration: none;
    font-size: 14px;
    padding-left: 10px;

    padding-top: 5px;
    padding-bottom: 5px;

    list-style-position: inside;
  }

  #selected1 {
    color: black;
    font-weight: 700;
    text-decoration: underline;
  }

  @media (max-width: 740px) {
    display: flex;
    justify-content: center;
  }

  .linkmenu, .linkmenu1 {
    text-decoration: none;
    color:black;
    cursor: pointer;
  }

  p {
    color:black;
  }
  
  .lined {
    font-weight: 700;
  }

  .linkmenu:hover, .lined:hover {
    color:red;
    cursor: pointer;
  }

`;


