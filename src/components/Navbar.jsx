import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
// left side of the navbar contains the heading of the project everytime
// on rightContainer if the screen is less than some 720px, the we wiill replace that with the burger menu

import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100vw;
  height: 50px;
  background-color: transparent;
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
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const BurgerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 600px) {
    display:none ;
  }
`;

const Navbar = ({ bright }) => {
  
  const [burger, setBurger] = useState(true);
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

      <BurgerContainer>
        {burger ? (
          <GiHamburgerMenu
            size="20px"
            onClick={() => {
              setBurger(false);
            }}
          ></GiHamburgerMenu>
        ) : (
          <AiOutlineClose
            size="20px"
            onClick={() => {
              setBurger(true);
            }}
          
            >
          </AiOutlineClose>
        )}
      </BurgerContainer>
    </Container>
  );
};

export default Navbar;
