import styled from 'styled-components';
import paragraph from '../assets/fonts/Open_Sans/OpenSans-Regular.ttf';

export const Container = styled.div`
  padding-left: 150px;
  padding-right: 150px;

  padding-bottom: 20px;
  padding-top: 20px;

  max-width: 1200px;
  position: relative;
  margin: 0 auto;

  font-family: 'paragraph';

  @font-face {
    font-family: 'paragraph';
    src: url(${paragraph});
  }

  .category {
    list-style-type: none;
    font-size: 14px;
    letter-spacing: 0px;
    color: #464646;
    padding: 0;
    margin: 0;
  }

  .cards .category {
    color: black;
  } 

  #nav {
    width: inherit;
    font-weight: 700;
    font-size: 14px;
    margin: 0;
  }

  #nav a {
    color: black;
  }

  #nav a:hover {
    color: red;
  }

  #new-flex {
    padding: 0;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
  }

  #numbers {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
    padding-top: 20px;
  }

  #numbers a {
    text-decoration: none;
    padding-right: 5px;
    font-family: 'paragraph';
    color: black;
    padding-left: 5px;
  }

  hr {
    padding-bottom: 1px;
    background-color: #9b9b9b;
    border-bottom:1px solid #F4F4F4;
  }

  .three {
    font-size: 22px;
  }

  #abzatsy {
    display: flex;
    flex-wrap: wrap;
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