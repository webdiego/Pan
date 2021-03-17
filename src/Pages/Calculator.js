import MyPan from '../Components/MyPan'
import Crazy from '../img/magic-tray.png'
import styled from 'styled-components'
import {Title,Paragraph} from '../style/Style'

const Calculator = () => {
  return ( 
    <CalculatorContainer>
      <Title>Calculator</Title>
      <Paragraph>In a few steps you are going to convert the amount of the ingredients of the recipe, based on his pan size with the size of your pan.</Paragraph>

      <HeaderCalculator >
       <Img src={Crazy} alt="img"/>
        <MyPan/>
      </HeaderCalculator>

    </CalculatorContainer>
    );
}
 
export default Calculator;

const HeaderCalculator = styled.div`
 width:100%;
 
 display:flex;
 align-items:center;
 justify-content:center;
 @media (max-width: 1368px) {
    flex-direction:column;
  }
`
const CalculatorContainer = styled.div`
 width:100%;
 
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 

`
const Img = styled.img`
  margin-top:8rem;
   width:55rem;  
 @media (max-width: 768px) {
  margin-top:0rem;

    width: 22rem;
  }
`