import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
   background: #DDD;
   color: #2d3f45;
   -webkit-font-smoothing: antialiased;
 }

 body, input, button {
   font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   font-size: 16;
 }

 h1, h2, strong {
   font-weight: 500;
 }

 button {
   cursor: pointer
 }
`;
