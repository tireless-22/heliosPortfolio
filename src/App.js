import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

import ToggleSwitch from './components/ToggleSwitch';


import styled from "styled-components"

const Container = styled.div`
width: 100vw;
background-color: ${(props) => (props.bright) ? "black" : "yellow"};
height:100vh;
`




const ToggleSwitchWrapper = styled.div`
display: flex;
justify-content: right;



`
const ImageAndParaContainer = styled.div`
display: flex;
width:100vw;
height: 1000vh;



`

const ImageContainer = styled.div`
flex:1;
background-color: ${props=>props.bright?"blue":"red"};
`

const ParaContainer = styled.div`
flex:1;
background-color: ${props => props.bright ? "blue":"red"};

`





function App() {
  const [bright, setBright] = useState(false);
  
  return (
    <Container bright={bright}>
      <ToggleSwitchWrapper>
        <ToggleSwitch
          id="newsletter"
          checked={bright}
          onChange={() => setBright(!bright)}
        />
      </ToggleSwitchWrapper>

      <ImageAndParaContainer>
        <ImageContainer bright={bright}>

        </ImageContainer>
        <ParaContainer bright={bright}>

        </ParaContainer>
        
      </ImageAndParaContainer>
    </Container>
  );
}

export default App;
