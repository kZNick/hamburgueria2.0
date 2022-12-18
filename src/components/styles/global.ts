import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: #FFFFFF;
  }
  @media (max-width: 950px){
    
  }
`;
export default GlobalStyle;
