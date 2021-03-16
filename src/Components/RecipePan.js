import React from 'react'
import {useState,useEffect} from 'react'
import Shapes from '../Shapes'

import Result from './Result'

const RecipePan = ({areaRound , areaRectangle ,shape}) => {

  const [shapeRecipe, setShapeRecipe] = useState("Rectangle");
  //RECTANGLE
  const [rectangleRecipe, setRectangleRecipe] = useState(Shapes.recipePan.rectangle);
  const [areaRectangleRecipe, setAreaRectangleRecipe] = useState(0);
  //ROUND
  const [roundRecipe, setRoundRecipe] = useState(Shapes.recipePan.round);
  const [areaRoundRecipe, setAreaRoundRecipe] = useState(0);

  const [show, setShow] = useState(false)


  //calc area and clear other input field
  const aR = (name) => {
    Shapes.recipePan.rectangle.a = 0
    Shapes.recipePan.rectangle.b = 0
    setAreaRectangleRecipe(name.a * name.b);
  };

  const aC = (name) => {
    Shapes.recipePan.round.a = 0
    setAreaRoundRecipe(+((name.a * name.a * Math.PI) / 4).toFixed(1));
  };

  useEffect(() => {
    aR(rectangleRecipe);
    aC(roundRecipe);
    setShow(false)
  }, [rectangleRecipe, roundRecipe]);
  
  console.log(areaRoundRecipe)
  let myArea = areaRound > 0 ? areaRound : areaRectangle
  let recipeArea = areaRoundRecipe > 0 ? areaRoundRecipe : areaRectangleRecipe

  console.log(`1 ${myArea}` , `2 ${recipeArea}`)
  let RatioNumber = (myArea / recipeArea).toFixed(2)
  let Ratio = myArea > recipeArea ? 'less' : 'more'
  console.log(RatioNumber,'Result')


  return (
    <div>
      <h1>RECIPE PAN</h1>
    
      
      <select value={shapeRecipe} onChange={(e) => setShapeRecipe(e.target.value)}>
        <option value="Rectangle">Rectangle</option>
        <option value="Round">Round</option>
      </select>
      {shapeRecipe === "Rectangle" && (
        <div>
          <label>Lato A</label>
          <input
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

          <label>Lato B</label>
          <input
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
          
                <h1>{areaRectangleRecipe}</h1>

        </div>
      )}
      {shapeRecipe === "Round" && (
        <div>
          <label>Length Round</label>
          <label>Diameter</label>
          <input
            type="number"
            min="0"
            step="1"
            max="100"
            value={roundRecipe.a}
            onChange={(e) => setRoundRecipe({ a: e.target.value })}
          />
          {/* <button onClick={() => aC(round)}>a</button> */}

          <span>cm</span>
          <h1>{areaRoundRecipe}</h1>
        </div>
      )}
      <button onClick={()=>setShow(true)}>Result</button>
       {(show &&  (

         <Result Ratio={Ratio}  RatioNumber={RatioNumber}/>
       )   )}
    </div>
  )
}

export default RecipePan