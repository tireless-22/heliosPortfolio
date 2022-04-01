import React from "react";

import styled from "styled-components";

import { Electronics, Programming, Design } from "../DATA/TeamInfo";

import { BsLinkedin, BsInstagram } from "react-icons/bs";

import { IoMail } from "react-icons/io5";

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: black;
`;

const ImgContainer = styled.div`
  display: flex;

  justify-content: center;
`;

const CardImage = styled.img`
  margin-top: 20px;
  margin-bottom: 15px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
`;

const CardContainer = styled.div`
  margin: 10px;
  display: grid;
  grid-gap: 25px;
  grid-auto-rows: 400px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DescriptionContainer = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  text-align: justify;
`;

const Card = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  background-color: ${(props) => props.color};
  -webkit-box-shadow: 0px 0px 12px 1px #444444;
  box-shadow: 0px 0px 12px 1px #444444;
  border-radius: 5px;

  &:hover {
    background-color: #2e2b2b;
    ${CardImage} {
      background-color: ${(props) => props.color};
    }

    ${DescriptionContainer} {
      color: ${(props) => props.color};
    }

    ${DescriptionContainer} {
      color: ${(props) => props.color};
    }

    ${NameContainer} {
      color: ${(props) => props.color};
    }

    ${SocialMediaContainer} {
      color: ${(props) => props.color};
    }
  }
`;

const TeamInfo = () => {
  const beautifulColors = [
    "#78ffd0",
    "#f8abff",
    "#dbff70",
    "#fc97b1",
    "#a696ff",
  ];

  return (
    <div>
      <h1>Worked on electronics</h1>
      <CardContainer>
        {Electronics.map((item, id) => {
          return (
            <Card color={beautifulColors[id % 5]}>
              <ImgContainer>
                <CardImage src={item.img}></CardImage>
              </ImgContainer>

              <NameContainer>
                <h1>{item.name}</h1>
              </NameContainer>
              <DescriptionContainer>{item.desc}</DescriptionContainer>

              <SocialMediaContainer>
                <a href={item.linkedin}>
                  <BsLinkedin size="30px" />
                </a>
                <a href={item.linkedin}>
                  <BsInstagram size="30px" />
                </a>
                <a href={item.linkedin}>
                  <IoMail size="30px" />
                </a>
              </SocialMediaContainer>
            </Card>
          );
        })}
      </CardContainer>

      <h1>Worked on Programming</h1>
      <CardContainer>
        {Programming.map((item, id) => {
          return (
            <Card color={beautifulColors[id % 5]}>
              <ImgContainer>
                <CardImage src={item.img}></CardImage>
              </ImgContainer>

              <NameContainer>
                <h1>{item.name}</h1>
              </NameContainer>
              <DescriptionContainer>{item.desc}</DescriptionContainer>

              <SocialMediaContainer>
                <a href={item.linkedin}>
                  <BsLinkedin size="30px" />
                </a>
                <a href={item.linkedin}>
                  <BsInstagram size="30px" />
                </a>
                <a href={item.linkedin}>
                  <IoMail size="30px" />
                </a>
              </SocialMediaContainer>
            </Card>
          );
        })}
      </CardContainer>

      <h1>Worked on Design</h1>
      <CardContainer>
        {Design.map((item, id) => {
          return (
            <Card color={beautifulColors[id % 5]}>
              <ImgContainer>
                <CardImage src={item.img}></CardImage>
              </ImgContainer>

              <NameContainer>
                <h1>{item.name}</h1>
              </NameContainer>
              <DescriptionContainer>{item.desc}</DescriptionContainer>

              <SocialMediaContainer>
                <a href={item.linkedin}>
                  <BsLinkedin size="30px" />
                </a>
                <a href={item.linkedin}>
                  <BsInstagram size="30px" />
                </a>
                <a href={item.linkedin}>
                  <IoMail size="30px" />
                </a>
              </SocialMediaContainer>
            </Card>
          );
        })}
      </CardContainer>
    </div>
  );
};

export default TeamInfo;
