import React, { useState } from "react";

import ToggleSwitch from "./ToggleSwitch"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  background-color: ${(props) => (props.bright ? "black" : "yellow")};
  height: 100vh;
`;

const ToggleSwitchWrapper = styled.div`
  margin-left: calc(100% - 80px);
  margin-top: 10px;

  position: fixed;
  margin-right: 0px;
`;

const ImageAndParaContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 50vw;
  height: 100vw;
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 10px;
  color: ${(props) => (props.bright ? "black" : "white")};

  /* thsidf;asldkfjlasdfas */


  background-color: ${(props) => (props.bright ? "white" : "black")};
`;

const ParaContainer = styled.div`




  flex: 1;
  
  color: ${(props) => (props.bright ? "black" : "white")};

 

  background-color: ${(props) => (props.bright ? "white" : "black")};
`;

function Home({bright,changeState}) {
  

  return (
    <Container bright={bright}>
      <ToggleSwitchWrapper>
        <ToggleSwitch
          id="newsletter"
          checked={bright}
          onChange={() => changeState()}
        />
      </ToggleSwitchWrapper>

      <ImageAndParaContainer>
        <ImageContainer bright={bright}>
          <h1>for the image</h1>
        </ImageContainer>
        <ParaContainer bright={bright}>
          <h1>for the info related to that image</h1>
        </ParaContainer>
      </ImageAndParaContainer>
    </Container>
  );
}

export default Home;

