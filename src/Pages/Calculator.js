import MyPan from '../Components/MyPan'
import Crazy from '../img/magic-tray.png'
import styled from 'styled-components'
import {Title,Paragraph} from '../style/Style'

const Calculator = () => {
  return ( 
    <CalculatorContainer>
      <Title>Calculator</Title>
      <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquam? Itaque, quo. Accusamus, possimus debitis? Autem quis praesentium provident aliquam!</Paragraph>

      <HeaderCalculator >
       <Img src={Crazy} alt=""/>
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
 /* width:35rem; */
 @media (max-width: 768px) {
    width: 28rem;
  }
`