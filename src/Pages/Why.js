import Which from "../img/wich-tray.png";
import styled from "styled-components";
import { Title, Paragraph } from "../style/Style";

const Why = () => {
  return (
    <div>
      <Title>Why Pan?</Title>

      <WhyContainer>
        <div>
          <WhyImg src={Which} alt="" />
        </div>
        <WhyDescription>
          <Paragraph>
            <SpanTitle>Pan</SpanTitle> as <a href="https://table-how-many-we-are.netlify.app/" ><SpanTitle>Table</SpanTitle></a> were born with the intention of make life
            easier between pans, sheets and calculators.
          </Paragraph>

          <Paragraph>
            How many times have you come across a complicated, long recipe for 6 people when at the
            table you were only in 4 ?
          </Paragraph>
          <Paragraph>I know, we are better at cooking or...eating than we are at maths.</Paragraph>
          <Paragraph>
            This application can help you to calculate and to "churn out" the ingredient ad hoc for
            your preparation and not miss a shot in the kitchen and mainly for don't waste food.
          </Paragraph>
        </WhyDescription>
      </WhyContainer>
    </div>
  );
};

export default Why;

const WhyImg = styled.img`
  width: 40rem;
  margin:2rem 0;
  @media (max-width: 660px) {
    width: 35rem;
  }
  @media (max-width: 543px) {
    width: 22rem;
  }
  @media (max-width: 380px) {
    width: 20rem;
  }
`;
const WhyDescription = styled.div`
  width: 40rem;
  padding: 3rem;
  line-height: 3rem;

  @media (max-width: 960px) {
    text-align: center;
    padding:.5rem;
  }
`;
const WhyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3rem;
`;
const SpanTitle = styled.span`
 font-family: "Finger Paint", cursive;
 color:black;
 font-size:1.6rem;
`