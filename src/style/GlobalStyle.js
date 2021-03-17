import {createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  font-family: "Finger Paint", cursive; 
  font-size:64,5%;
}

select,input{
  outline:none;
  -moz-appearance: none;
  -webkit-appearance: none;
  text-align:center;
  
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
option{
  -moz-appearance: none;
  -webkit-appearance: none;
}
 `

 export default GlobalStyle;