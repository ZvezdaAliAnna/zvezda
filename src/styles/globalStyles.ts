import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --main-1: #FFDA19;
    --main-2: #E41212;
    --text: #131313;
    --white: #FFFFFF;
    --transition: 0.3s linear;
  }

  
  * {
    padding: 0px;
    margin: 0px;
    border: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }


  body {
    font-family: 'Roboto Slab', sans-serif !important;
    position: relative;
    overflow-x: hidden !important;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
  }

  .container {
    max-width: 1360px;
    padding: 0 15px;
    width: 100%;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 65px;
    font-style: normal;
    font-weight: 500;
    line-height: 101px; 
    text-transform: uppercase;
    
    &.center {
      text-align: center;
    }
  }
 
`;

export default GlobalStyle;