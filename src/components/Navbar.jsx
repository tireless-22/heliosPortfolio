import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// left side of the navbar contains the heading of the project everytime
// on rightContainer if the screen is less than some 720px, the we wiill replace that with the burger menu

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100vw;
  height: 50px;
  background-color: gray;
`;

const LeftContainer = styled.div`
  flex: 2;
  margin-left: 20px;
  display: flex;

  align-items: center;
`;
const RightContainer = styled.div`

  display: flex;
  align-items: center;
  flex: 3;
  justify-content: space-between;
  margin-right: 20px;
		@media only screen and (max-width: 720px) {
			/* code for burger menu */

		}
`;

const Navbar = ({bright}) => {
  return (
    <Container>
      <LeftContainer>
        <Link to="/">
          <h3>Helios</h3>
        </Link>
      </LeftContainer>
      <RightContainer>
        <Link to="/">
          <h3>Home</h3>
        </Link>

        {bright && (
          <Link to="/features">
            <h3>Features</h3>
          </Link>
        )}

        <Link to="/team">
          <h3>Team Info</h3>
        </Link>
        <Link to="/contact">
          <h3>Contact Info</h3>
        </Link>
      </RightContainer>
    </Container>
  );
};

export default Navbar;
