import React from "react";
import styled from "styled-components";

function Card({ props }) {
  return (
    <CardContainer>
      <CardImage
        src={
          "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spiderman_3a64e546.jpeg?region=0%2C0%2C300%2C300"
        }
      />
      <RoomDetails>
        <RoomName>Harshit</RoomName>
        <RecentChat>Hramkhor</RecentChat>
      </RoomDetails>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.section`
  display: flex;
  background-color: #271c46;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
`;

const CardImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 35px;
  object-fit: contain;
  background-color: red;
`;

const RoomDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

const RoomName = styled.h3`
  font-weight: light;
  color: white;
  font-family: "Fira Sans", sans-serif;
`;

const RecentChat = styled.h3`
  font-weight: lighter;
  color: #948ab0;
  font-family: "Fira Sans", sans-serif;
`;
