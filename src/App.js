

import React, { useState } from "react";

import ToggleSwitch from './components/ToggleSwitch';


import styled from "styled-components"

const Container = styled.div`
width: 100vw;
background-color: ${(props) => (props.bright) ? "black" : "yellow"};
height:100vh;
`




const ToggleSwitchWrapper = styled.div`
  margin-left: calc(100% - 80px);
  margin-top:10px;

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

const ImageContainer = styled.div`
flex:1;
background-color: ${props=>props.bright?"red":"blue"};
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
