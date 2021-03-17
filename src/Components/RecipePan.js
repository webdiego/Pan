import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

//Database of shapes length
import Shapes from "../Shapes";

import CalcIngredient from "./CalcIngredient";
//Styled Components
import styled from "styled-components";

import ShapeImg from "../img/shapes-normal.png";
import ShapeDimension from "../img/shapes-dimension.png";

import {
  Title,
  Paragraph,
  SelectStyle,
  Pan,
  PanTitle,
  InputContainer,
  InputStyle,
  SpanStyle,
  LabelStyle,
} from "../style/Style";

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

  //Calc area and clear other input field
  const aR = (name) => {
    Shapes.recipePan.round.a = 0;
    setAreaRectangleRecipe(name.a * name.b);
  };

  const aC = (name) => {
    Shapes.recipePan.rectangle.a = 0;
    Shapes.recipePan.rectangle.b = 0;
    setAreaRoundRecipe(+((name.a * name.a * Math.PI) / 4).toFixed(1));
  };

  let myArea = shape === "Round" ? areaRound : areaRectangle;
  let recipeArea = shapeRecipe === "Round" ? areaRoundRecipe : areaRectangleRecipe;

  //Ratio
  let RatioNumber = +(myArea / recipeArea).toFixed(2);
  const Example = RatioNumber * 100;

  return (
    <Pan>
      <PanTitleRecipe>RECIPE PAN</PanTitleRecipe>
      <img style={{ width: "5rem" }} src={ShapeImg} alt="" />

      <SelectStyleRecipe value={shapeRecipe} onChange={(e) => setShapeRecipe(e.target.value)}>
        <option value="Rectangle">Rectangle / Square</option>
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
            required
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
            required
            value={rectangleRecipe.b}
            onChange={(e) =>
              setRectangleRecipe({
                ...rectangleRecipe,
                b: e.target.value,
              })
            }
          />
          <SpanStyle>cm</SpanStyle>
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
            required
            value={roundRecipe.a}
            onChange={(e) => setRoundRecipe({ a: e.target.value })}
          />
          <SpanStyle>cm</SpanStyle>
        </InputContainer>
      )}

      <Link style={{ border: "none" }} to="result" smooth={true}>
        <ButtonResult onClick={() => setShow(!show)}>Convert</ButtonResult>
      </Link>

      <div id="result">
        {show && RatioNumber > 0 && (
          <div>
            <ResultContainer>
              <Title>Result</Title>
              <ParagraphResult>
                The ratio between tha pans is {RatioNumber} calculated on the pan's area. <br />
                That means 100 g of ingredient in the recipe, for example , are{" "}
                {Example > 1000 ? ` ${Example / 1000} Kg` : `${Example} g`} for your recipe . <br />
                You can multiply the amounts of ingredients by the ratio yourself, or use the second
                part of our calculator.
              </ParagraphResult>
            </ResultContainer>
            <CalcIngredient RatioNumber={RatioNumber} />
          </div>
        )}
        {show && isNaN(RatioNumber) | (RatioNumber === Infinity) && (
          <div>
            <p style={{ margin: "1rem  2rem ", textAlign: "center", lineHeight: "2rem" }}>
              Something wrong, are you sure that you put all the value?
            </p>
          </div>
        )}
      </div>
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
const ParagraphResult = styled(Paragraph)`
  margin: 0rem 2rem;
  color: #2c8799;
  text-align: center;
  line-height: 3rem;
  font-family: "Comfortaa", cursive;
`;

const ButtonResult = styled.button`
  border: none;
  cursor: pointer;
  margin: 5rem 0;
  font-family: "Finger Paint", cursive;
  font-size: 1.2rem;
  border-radius: 10px;
  background-color: #153747;
  padding: 0.5rem 4rem;
  color: white;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
