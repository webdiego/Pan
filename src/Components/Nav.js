import { Link } from "react-router-dom";
import styled from "styled-components";
import PanIcon from "../img/pan-icon.png";
import TableIcon from "../img/table.png";
const Nav = () => {
  return (
    <NavBar>
      <Link to="/">
        <Logo >
          Pan
          <img style={{ width: "2rem", marginLeft: ".4rem" }} src={PanIcon} alt="pan-icon" />
        </Logo>
      </Link>

      <List>
        <ListElement>
          {" "}
          <Link to="/why">Why?</Link>
        </ListElement>
        <ListElement>
          {" "}
          <Link to="/calculator">Calculator</Link>
        </ListElement>
        <ListElement style={{fontWeight:"bold", fontSize:"1.2rem"}}>
          {" "}
          <a href="https://table-how-many-we-are.netlify.app/">
            Table <img style={{width:"1rem"}} src={TableIcon} alt="" />
          </a>
        </ListElement>
      </List>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Finger Paint", cursive;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 2rem;
  @media (max-width: 960px) {
    padding: 0rem;
  }
`;
const ListElement = styled.li`
  font-size: 1rem;
  margin-right: 2rem;
  @media (max-width: 960px) {
    margin: 0.5rem;
    font-size: 0.9rem;
  }
`;
const Logo = styled.h1`
  padding: 2rem;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    padding: 1.2rem;
  }
`;
