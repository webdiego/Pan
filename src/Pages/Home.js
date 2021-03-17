
//Images
import HeaderImg from "../img/Teacher.png";
import GamberoRosso from "../img/gambero-rosso2.png";
import Michelin from "../img/MichelinStar.svg.png";
import SlowFood from "../img/slow-food.svg";
//Styled Components
import styled from "styled-components";
import { Title } from "../style/Style";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <HomeContainer>
        <HomeDescription>
          <HomeTitle>It's time to cook!</HomeTitle>
          <h4 style={{ fontSize: "1.1rem" , fontFamily:"Comfortaa" }}>Which pan should I use?</h4>
         <Link to="/why">
          <HomeButton>Learn More </HomeButton>
         
         </Link>
        </HomeDescription>

        <HomeImgContainer className="header-img">
          <HomeImg src={HeaderImg} alt="img" />
        </HomeImgContainer>
      </HomeContainer>

      <HomeTrustedContainer>
        <h2>Trusted by chefs around the world and by</h2>

        <HomeLogosContainer className="header-trusted-logos">
          <LogosGambero src={GamberoRosso} alt="" />
          <LogosSlow  src={SlowFood} alt="" />
          <LogosMichelin  src={Michelin} alt="" />
        </HomeLogosContainer>
      </HomeTrustedContainer>
    </div>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const HomeDescription = styled.div`
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 2rem 0;
`;
const HomeTitle = styled(Title)`
  @media (max-width: 950px) {
    font-size: 4rem;
  }
`;

const HomeImgContainer = styled.div``;
const HomeImg = styled.img`
  margin-top: 5rem;
  object-fit: cover;
  height: 30rem;

  @media (max-width: 660px) {
    height: 20rem;
  }
  @media (max-width: 500px) {
    height: 15rem;
  }
  @media (max-width: 380px) {
    height: 12rem;
  }
`;

const HomeButton = styled.button`
  border: none;
  font-size: 1.2rem;
  margin-top: 2rem;
  padding: 0.8rem;
  border-radius: 2px;
  color: white;
  background-color: #2c8799;
  cursor: pointer;
  font-family: "Finger Paint", cursive;
  @media (max-width: 960px) {
    font-size: 1rem;
    padding: 0.6rem;
  }
`;
const HomeTrustedContainer = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family:"Comfortaa";
  @media (max-width: 960px) {
    font-size: 0.5rem;
  }
`;

const HomeLogosContainer = styled.div`
 display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
`;
const LogosMichelin = styled.img`
  height: 4rem;
  @media (max-width: 960px) {
    height: 2rem;
  }
`;
const LogosGambero = styled.img`
  height: 10rem;
  margin-right: 2rem;
  @media (max-width: 960px) {
    height: 4rem;
  }
`;
const LogosSlow = styled.img`
  height: 8rem;
  margin-right: 2rem;
  @media (max-width: 960px) {
    height: 4rem;
  }
`;
