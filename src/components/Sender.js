import React from "react";
import styled from "styled-components";

function Sender() {
  return (
    <SenderSection>
      <UserTextSection>
        <UserDetails>
          <UserName>Harshit Dubey</UserName>
          <TimeStamp>25 min</TimeStamp>
        </UserDetails>
        <Msg>
          <MsgText>Hello my name is joseph morinio</MsgText>
        </Msg>
      </UserTextSection>
      <UserImage
        src={
          "https://pbs.twimg.com/profile_images/1222646977332174849/xWcD6t_Q_400x400.jpg"
        }
      />
    </SenderSection>
  );
}

export default Sender;

const SenderSection = styled.div`
  display: flex;

  padding: 15px;
`;

const UserImage = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
  border-radius: 35px;
`;

const UserTextSection = styled.div`
  padding-right: 10px;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
`;

const UserName = styled.h2`
  font-weight: light;
`;

const TimeStamp = styled.h3`
  font-weight: lighter;
  margin-left: 10px;
`;

const Msg = styled.div`
  background-color: white;
  margin-top: 10px;
  padding: 20px;
  border-radius: 30px 0px 30px 30px;
  max-width: 500px;
`;

const MsgText = styled.h2`
  font-family: "Fira Sans", sans-serif;
  font-size: 14px;
`;
