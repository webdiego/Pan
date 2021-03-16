import HeaderImg from '../img/Teacher.png'
import GamberoRosso from '../img/gambero-rosso2.png'
import Michelin from '../img/MichelinStar.svg.png'
import SlowFood from '../img/slow-food.svg'
import Header3 from '../Components/Result'

const Home = () => {
  return ( 
    <header >
    <div className="header">

    <div className="header-description">
    <h1>It's time to cook!</h1>
    <h4>How many of us?</h4>
     <button className="header-button">Learn More </button> 
    </div>
    
    <div className="header-img">
     <img  src={HeaderImg} alt="img"/>
    </div>

    </div>

    <div className="header-trusted">
    <h2>Trusted by chefs around the world and by</h2>

    <div className="header-trusted-logos">
     <img className="gambero-rosso" src={GamberoRosso} alt=""/>
     <img  className="slow-food" src={SlowFood} alt=""/>
     <img  className="michelin" src={Michelin} alt=""/>

    </div>
    </div>
    <Header3/>
  </header>
   );
}
 
export default Home;