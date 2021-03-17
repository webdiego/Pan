import { useState, useEffect } from "react";
import RecipePan from "./RecipePan";

//Database of shapes length
import Shapes from "../Shapes";

import ShapeImg from '../img/shapes-normal.png'
import ShapeDimension from '../img/shapes-dimension.png'
//Styled Components
import styled from "styled-components";

import {
  SelectStyle,
  Pan,
  PanTitle,
  InputContainer,
  InputStyle,
  SpanStyle,
  LabelStyle,
} from "../style/Style";


//
const MyPan = () => {
  const [shape, setShape] = useState("Rectangle");
  //RECTANGLE
  const [rectangle, setRectangle] = useState(Shapes.myPan.rectangle);
  const [areaRectangle, setAreaRectangle] = useState(0);
  //ROUND
  const [round, setRound] = useState(Shapes.myPan.round);
  const [areaRound, setAreaRound] = useState(0);
  

  
  const aR = (name) => {
    Shapes.myPan.round.a = 0;
    setAreaRectangle(name.a * name.b);
  };
  // console.log(areaRectangle);
  
  const aC = (name) => {
    Shapes.myPan.rectangle.a = 0;
    Shapes.myPan.rectangle.b = 0;
    setAreaRound(+((name.a * name.a * Math.PI) / 4).toFixed(1));
  };

  useEffect(() => {
    aR(rectangle);
    aC(round);
  }, [rectangle, round]);

  return (
    <PanContainer>
      <Pan>
        <PanTitle>MY PAN</PanTitle>
        <img style={{width:'5rem'}} src={ShapeImg} alt=""/>
        <SelectStyle value={shape} onChange={(e) => setShape(e.target.value)}>
          <option value="Rectangle">Rectangle / Square</option>
          <option value="Round">Round</option>
        </SelectStyle>
        <img style={{width:'5rem'}} src={ShapeDimension} alt=""/>
        {shape === "Rectangle" && (
          <InputContainer>
            <LabelStyle>Side A</LabelStyle>
            <InputStyle
              type="number"
              min="0"
              step="1"
              max="100"
              value={rectangle.a}
              onChange={(e) =>
                setRectangle({
                  ...rectangle,
                  a: e.target.value,
                })
              }
            />
            <SpanStyle>Cm</SpanStyle>
            <LabelStyle>Side B</LabelStyle>
            <InputStyle
              type="number"
              min="0"
              step="1"
              max="100"
              value={rectangle.b}
              onChange={(e) =>
                setRectangle({
                  ...rectangle,
                  b: e.target.value,
                })
              }
            />
            <SpanStyle>Cm</SpanStyle>

            <h1>{areaRectangle}</h1> 

            {/* <RecipePan areaRectangle={areaRectangle} shape={shape}  /> */}
          </InputContainer>
        )}

        {shape === "Round" && (
          <InputContainer>
            <LabelStyle>Diameter</LabelStyle>
            <InputStyle
              type="number"
              min="0"
              step="1"
              max="100"
              value={round.a}
              onChange={(e) => setRound({ a: e.target.value })}
            />
            {/* <button onClick={() => aC(round)}>a</button> */}

            <SpanStyle>cm</SpanStyle>
            <h1>{areaRound}</h1> 
            {/* <RecipePan areaRound={areaRound} shape={shape} /> */}
          </InputContainer>
        )}
      </Pan>
      <RecipePan areaRound={areaRound} areaRectangle={areaRectangle} shape={shape} />
     
    </PanContainer>
  );
};

export default MyPan;

const PanContainer = styled.div`
   width:100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;
   /* margin-top:5rem;  */

  @media (max-width: 868px) {
    flex-direction: column;
  }
`;
