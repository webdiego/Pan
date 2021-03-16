import { useState, useEffect } from "react";
import RecipePan from "./RecipePan";

//Database
import Shapes from '../Shapes'
//Style
import styled from 'styled-components'

const MyPan = () => {
  const [shape, setShape] = useState("Rectangle");
  //RECTANGLE
  const [rectangle, setRectangle] = useState(Shapes.myPan.rectangle);
  const [areaRectangle, setAreaRectangle] = useState(0);
  //ROUND
  const [round, setRound] = useState(Shapes.myPan.round);
  const [areaRound, setAreaRound] = useState(0);

  const aR = (name) => {
    Shapes.myPan.rectangle.a = 0
    Shapes.myPan.rectangle.b = 0
    setAreaRectangle(name.a * name.b);
  };
  // console.log(areaRectangle);

  const aC = (name) => {
    Shapes.myPan.round.a = 0
    setAreaRound(+((name.a * name.a * Math.PI) / 4).toFixed(1));
  };

  useEffect(() => {
    
    aR(rectangle);
    aC(round);
  }, [rectangle, round]);

  return (
    <PanContainer>
      <Pan>

      <h1>MY PAN</h1>
      <select value={shape} onChange={(e) => setShape(e.target.value)}>
        <option value="Rectangle">Rectangle / Square</option>
        <option value="Round">Round</option>
      </select>
      {shape === "Rectangle" && (
        <div>
          <label>Lato A</label>
          <input
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

          <label>Lato B</label>
          <input
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
          <h1>{areaRectangle}</h1> 

          {/* <RecipePan areaRectangle={areaRectangle} shape={shape}  /> */}
          
        </div>
      )}


      {shape === "Round" && (
        <div>
          <label>Length Round</label>
          <label>Diameter</label>
          <input
            type="number"
            min="0"
            step="1"
            max="100"
            value={round.a}
            onChange={(e) => setRound({ a: e.target.value })}
          />
          {/* <button onClick={() => aC(round)}>a</button> */}

          <span>cm</span>
          <h1>{areaRound}</h1> 
          {/* <RecipePan areaRound={areaRound} shape={shape} /> */}
        </div>
      )}
      </Pan>
     <RecipePan areaRound={areaRound} areaRectangle={areaRectangle} shape={shape} />

    </PanContainer>
  );
};

export default MyPan;

const PanContainer = styled.div`
height:30rem;
 display:flex;
 justify-content:space-evenly;
 align-items:center;
`

const Pan = styled.div`
 display:flex;
 flex-direction:column;
`