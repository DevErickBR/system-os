import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
   * {
    margin: 0%;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Inter', sans-serif;
   }

   body{
    width: 100vw;
    height:100vh;
    overflow:hidden;
    background-color: ${(props) => props.theme.colors.background}
   }
`;
