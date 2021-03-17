import styled from 'styled-components'

export const Title = styled.h1`
color:#D86766;
font-size:4rem;
margin:3rem 0;
@media (max-width: 768px) {
   font-size:3.3rem;
  }
`
export const Paragraph = styled.p`
  font-family: "Comfortaa", cursive;
margin: 2rem 4rem ;
color:#2C8799;
text-align:center;
line-height:3rem;
font-weight:bold;
`
export const SelectStyle = styled.select`
border: 3px solid #d86766;
color: #d86762;
padding: 0.3rem;
 width: 20rem; 
border-radius: 5px;
font-size: 1.1rem;
margin: 0rem 0 1rem 0;
`;


export const Pan = styled.div`
height:100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top:4rem;
  margin-right:10rem;
  @media (max-width: 1368px) {
    margin-right:0rem;
  }
`;

export const PanTitle = styled.h1`
 color: #d86762;
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const InputStyle = styled.input`
  border: 3px solid #d86766;
  color: #d86766;
  border-radius: 5px;
  width: 3rem;
  padding: 0.5rem;
  font-size:1.1rem;
  font-family: "Comfortaa", cursive;
`;


export const SpanStyle = styled.span`
 margin:0 1.5rem 0 .2rem;
 font-size :.8rem;

`
export const LabelStyle = styled.label`
  margin:0 .7rem;
  font-size :1.1rem;
`