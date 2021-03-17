import styled from "styled-components";
import { useState } from "react";

import { InputStyle, Paragraph, InputContainer } from "../style/Style";

const CalcIngredient = ({ RatioNumber }) => {
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState("");
  const [mass, setMass] = useState("g");

  return (
    <CalcIngredientContainer>
      <label>Ingredient Name</label>
      <InputText
        type="text"
        value={ingredientName}
        onChange={(e) => setIngredientName(e.target.value)}
      />
      <label>Quantity</label>
      <QuantityContainer>
        <InputQuantity
          value={ingredientQuantity}
          type="number"
          onChange={(e) => setIngredientQuantity(+e.target.value)}
          min="0"
          step=".01"
          max="1000"
        />
        <SelectMass value={mass} onChange={(e) => setMass(e.target.value)}>
          <option value="g">g</option>
          <option value="Kg">Kg</option>
        </SelectMass>
      </QuantityContainer>
      {ingredientQuantity > 0 && (
        <ParagraphResult>
          The quantity of {ingredientName} for your recipe based on your pan is{" "}
          {ingredientQuantity * RatioNumber} {mass}
        </ParagraphResult>
      )}
    </CalcIngredientContainer>
  );
};

export default CalcIngredient;

const CalcIngredientContainer = styled(InputContainer)`
  flex-direction: column;
  margin: 2rem 0rem;
`;

const InputText = styled(InputStyle)`
  width: 15rem;
  margin: 1rem 0;
`;
const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const InputQuantity = styled(InputStyle)`
  width: 6rem;
  margin: 1rem 0;
  border-radius: 5px 0 0 5px;
`;
const SelectMass = styled.select`
  border: 4px #d86766 solid;
  color: white;
  background-color: #d86766;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0 5px 5px 0;
`;
const ParagraphResult= styled(Paragraph)`
 margin:0;
 `