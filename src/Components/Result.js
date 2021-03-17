import {useState,useEffect} from 'react'
import styled from 'styled-components'

const Result = ({Ratio,RatioNumber }) => {
  // const [show, setShow] = useState(false)

  return ( 
   <ResultContainer>
   {/* <ButtonResult onClick={()=>setShow(!show)}>Convert</ButtonResult>  */}

     {/* {(show &&(
      <div>
         
        <Title>Result</Title>
        <Para>The ratio between tha pans is {RatioNumber}</Para>
        <p>That means that you need {100 * RatioNumber}% of the ingredients of the original recipe</p>
        <p>Multiply the amounts of ingredients by the ratio yourself, or use the second part of our calculator.</p>
      </div>
     ))} */}

   </ResultContainer>
   );
}
 
export default Result;

const ResultContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:4rem;
  
`
const Title = styled.h1`
  color:red;
`

const Para = styled.p`
 color:blue;
`
const ButtonResult = styled.button`
border:none;
font-family: "Finger Paint", cursive; 

font-size: 1.2rem;
border-radius:10px;
 background-color: #153747;
 padding: .5rem 4rem;
 color:white;
`