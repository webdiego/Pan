import MyPan from '../Components/MyPan'
import Crazy from '../img/magic-tray.png'
import styled from 'styled-components'
import {Title,Paragraph} from '../style/Style'

const Calculator = () => {
  return ( 
    <div>
      <HeaderCalculator >

      <Title>Calculator</Title>
      <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquam? Itaque, quo. Accusamus, possimus debitis? Autem quis praesentium provident aliquam!</Paragraph>
      <Img src={Crazy} alt=""/>
      </HeaderCalculator>
     <MyPan/>
    </div>
    );
}
 
export default Calculator;

const HeaderCalculator = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;


`
const Img = styled.img`
 @media (max-width: 768px) {
    width: 28rem;
  }
`