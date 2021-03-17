import React from "react";
import { useState, useEffect } from "react";
//Database of shapes length
import Shapes from "../Shapes";

//Styled Components
import styled from "styled-components";

import ShapeImg from "../img/shapes-normal.png";
import ShapeDimension from "../img/shapes-dimension.png";

import {
  SelectStyle,
  Pan,
  PanTitle,
  InputContainer,
  InputStyle,
  SpanStyle,
  LabelStyle,
} from "../style/Style";
import Result from "./Result";

const RecipePan = ({ areaRound, areaRectangle, shape }) => {
  const [shapeRecipe, setShapeRecipe] = useState("Rectangle");
  //RECTANGLE
  const [rectangleRecipe, setRectangleRecipe] = useState(Shapes.recipePan.rectangle);
  const [areaRectangleRecipe, setAreaRectangleRecipe] = useState(0);
  //ROUND
  const [roundRecipe, setRoundRecipe] = useState(Shapes.recipePan.round);
  const [areaRoundRecipe, setAreaRoundRecipe] = useState(0);

  const [show, setShow] = useState(false);

  useEffect(() => {
    aR(rectangleRecipe);
    aC(roundRecipe);
    setShow(false);
  }, [rectangleRecipe, roundRecipe]);

  //calc area and clear other input field
  const aR = (name) => {
    Shapes.recipePan.round.a = 0;
    setAreaRectangleRecipe(name.a * name.b);
  };

  const aC = (name) => {
    Shapes.recipePan.rectangle.a = 0;
    Shapes.recipePan.rectangle.b = 0;
    setAreaRoundRecipe(+((name.a * name.a * Math.PI) / 4).toFixed(1));
  };

  // console.log(areaRoundRecipe)
  let myArea = areaRound > 0 ? areaRound : areaRectangle;
  let recipeArea = areaRoundRecipe > 0 ? areaRoundRecipe : areaRectangleRecipe;

  // console.log(`1 ${myArea}` , `2 ${recipeArea}`)
  let RatioNumber = (myArea / recipeArea).toFixed(2);
  let Ratio = myArea > recipeArea ? "less" : "more";
  // console.log(RatioNumber,'Result')

  return (
    <Pan>
      <PanTitleRecipe>RECIPE PAN</PanTitleRecipe>
      <img style={{ width: "5rem" }} src={ShapeImg} alt="" />

      <SelectStyleRecipe value={shapeRecipe} onChange={(e) => setShapeRecipe(e.target.value)}>
        <option value="Rectangle">Rectangle</option>
        <option value="Round">Round</option>
      </SelectStyleRecipe>
      <img style={{ width: "5rem" }} src={ShapeDimension} alt="" />

      {shapeRecipe === "Rectangle" && (
        <InputContainer>
          <LabelStyle>Side A</LabelStyle>
          <InputStyleRecipe
            type="number"
            min="0"
            step="1"
            max="100"
            value={rectangleRecipe.a}
            onChange={(e) =>
              setRectangleRecipe({
                ...rectangleRecipe,
                a: e.target.value,
              })
            }
          />
          <SpanStyle>cm</SpanStyle>
          <LabelStyle>Side B</LabelStyle>
          <InputStyleRecipe
            type="number"
            min="0"
            step="1"
            max="100"
            value={rectangleRecipe.b}
            onChange={(e) =>
              setRectangleRecipe({
                ...rectangleRecipe,
                b: e.target.value,
              })
            }
          />
          <SpanStyle>cm</SpanStyle>
          <h1>{areaRectangleRecipe}</h1>
        </InputContainer>
      )}
      {shapeRecipe === "Round" && (
        <InputContainer>
          <LabelStyle>Diameter</LabelStyle>
          <InputStyleRecipe
            type="number"
            min="0"
            step="1"
            max="100"
            value={roundRecipe.a}
            onChange={(e) => setRoundRecipe({ a: e.target.value })}
          />

          <SpanStyle>cm</SpanStyle>
          <h1>{areaRoundRecipe}</h1>
        </InputContainer>
      )}

      {/* <Result Ratio={Ratio} RatioNumber={RatioNumber}/> */}
      <ButtonResult onClick={() => setShow(!show)}>Convert</ButtonResult>

      {show && (
        <div>
          <Title>Result</Title>
          <Para>The ratio between tha pans is {RatioNumber}</Para>
          <p>
            That means that you need {100 * RatioNumber}% of the ingredients of the original recipe
          </p>
          <p>
            Multiply the amounts of ingredients by the ratio yourself, or use the second part of our
            calculator.
          </p>
        </div>
      )}
    </Pan>
  );
};

export default RecipePan;

const SelectStyleRecipe = styled(SelectStyle)`
  color: #2c8799;
  border: 3px solid #2c8799;
`;

const InputStyleRecipe = styled(InputStyle)`
  border: 3px solid #2c8799;
  color: #2c8799;
`;
const PanTitleRecipe = styled(PanTitle)`
  color: #2c8799;
`;

const Title = styled.h1`
  color: red;
`;

const Para = styled.p`
  color: blue;
`;
const ButtonResult = styled.button`
  border: none;
  margin-top: 5rem;
  font-family: "Finger Paint", cursive;

  font-size: 1.2rem;
  border-radius: 10px;
  background-color: #153747;
  padding: 0.5rem 4rem;
  color: white;
`;
