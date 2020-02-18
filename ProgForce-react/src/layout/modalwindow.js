import React from "react";
import styled from 'styled-components';
import cross from '../assets/img/wbold_x.png';

export const ModalArea = styled.div`
  
  #modal-content div {
    margin: 0;
    padding: 0;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  #modalarea {
    padding-top: 20px;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0; 
    right: 0;
    bottom: 0;
    left: 0;
    /*display: flex;*/
    justify-content: center;
    z-index: 2050;
    /*opacity: 0;*/

    -webkit-transition: all 400ms ease-in;
    -moz-transition: all 400ms ease-in;
    transition: all 400ms ease-in;
    
    pointer-events: none; 
    display: none;
  }

  #modalarea:target { 
    display: flex;
    pointer-events: auto;
    overflow-y: auto;
  }


  #modalarea .center {
    width: 400px;
    padding: 0;
  }

  #modalwindow{
    padding: 0px 25px 25px 0px;
    min-height: 440px;
  }

  .x {
    background-image: url(${cross});
    width: 25px;
    height: 25px;
    background-size: cover;
    padding: 0;
  }

  #close {
    width: 25px;
    height: 25px;
    background-color: #464646;
    padding: 0;
    margin: 0;
    float: right;
    border: none;
    cursor: pointer;
  }

  #close:hover {
    background-color: rgb(143, 10, 10);
  }

  #close img {
    width: inherit;
    height: inherit;
  }

  #modal-content{
    margin-top: 25px; 
    background-color: white;
    padding: 0px 20px 20px 20px;
    /*height: 440px;*/
  }

  #modal_header h3 {
    text-align: center;
    font-size: 22px;
    margin: 0;
    padding: 20px;
    text-transform: uppercase;
    font-weight: 500;
  }

  #modal_main {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 10px;
  }

  #modal_main input {
    width: 100%;
    padding: 7px;
    margin: 10px;
  }

  #modal_main textarea {
    margin: 10px;
    width: 100%;
    height: 100px;
  }

  #modal_main .sendbtn {
    margin-top: 10px;
    border: none;
    width: 100px;
    height: 35px;
    font-size: 14px;
    text-transform: uppercase;
    background-color: gray;
    color: white;
    margin-bottom: 10px;
    /*justify-content: center;*/
  }

`;

const Modal = (props) =>{
  return (
    <ModalArea>
      <div id="modalarea">

        <div className="center">
          <div id="close">
            <a onClick={props.close} href="#close">
              <div className="x"></div>
            </a>  
          </div>

          <div id="modalwindow">
            <div id="modal-content">

              <div id="modal_header">
                <h3>Обратная связь</h3>
              </div>

              <div id="modal_main">
                <label htmlFor="">Ваше имя:</label>
                <input type="text"/>
                <label htmlFor="">Телефон:</label>
                <input type="text"/>
                <label htmlFor="">Email:</label>
                <input type="text"/>
                <label htmlFor="">Сообщение:</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>

                <button className="sendbtn">Отправить</button>
              </div>
              
            </div>
          </div>

        </div>

      </div>
    </ModalArea>
  )
}

export default Modal;