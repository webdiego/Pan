import styled from 'styled-components'

const Result = ({Ratio,RatioNumber}) => {
  return ( 
   <div>
     <Title>hello header 3</Title>
     <Para>Your ratio is {RatioNumber} so you need {Ratio} quantity of ingredients</Para>
     <p>EX. 100g of ingredients in the recipe for you are {100 * RatioNumber} g</p>
   </div>
   );
}
 
export default Result;

const Title = styled.h1`
  color:red;
`

const Para = styled.p`
 color:blue;
`