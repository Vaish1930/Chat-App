import React from "react";
import styled from "styled-components";
import SettingsIcon from "@mui/icons-material/Settings";
import SendIcon from "@mui/icons-material/Send";
import ImageIcon from "@mui/icons-material/Image";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import Sender from "./Sender";
import Receiver from "./Receiver";
import EditRoom from "./EditRoom";

function Chats() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <ChatContainer>
      {/* Header */}
      <HeaderSection>
        <RoomDetails>
          <ChatIcon
            src={
              "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spiderman_3a64e546.jpeg?region=0%2C0%2C300%2C300"
            }
          />
          <ChatRoomDetails>
            <RoomName>Harshit</RoomName>
            <RecentChat>Last seen few years ago</RecentChat>
          </ChatRoomDetails>
        </RoomDetails>

        <SettingsIcon onClick={openModal} />
      </HeaderSection>

      {/* chats */}

      <ChatSection>
        <Sender />
        <Sender />
        <Sender />
        <Sender />

        <Receiver />
      </ChatSection>
      {/* bottom */}
      <BottomSection>
        <Message placeholder="Write a message" />
        <IconSection>
          <ImageIcon />
          <AddReactionIcon />

          <SendButton type="submit">
            <SendIcon />
          </SendButton>
        </IconSection>
      </BottomSection>
      <EditRoom closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </ChatContainer>
  );
}

export default Chats;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100vh;
`;

const RoomDetails = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderSection = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  justify-content: space-between;
`;

const ChatIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 35px;
  object-fit: contain;
  background-color: red;
`;

const ChatRoomDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

const RoomName = styled.h2`
  font-weight: light;

  font-family: "Fira Sans", sans-serif;
`;

const RecentChat = styled.h3`
  font-weight: lighter;

  font-family: "Fira Sans", sans-serif;
`;

const ChatSection = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 550px; */
  background-color: #e5e5ff;
  overflow-y: scroll;
  flex: 1;
`;

const BottomSection = styled.form`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
  height: 50px;
`;

const Message = styled.input`
  width: 500px;
  font-size: 15px;
  border: none;
  outline-width: 0;
`;

const IconSection = styled.div`
  display: flex;

  width: 100px;
  justify-content: space-evenly;
`;

const SendButton = styled.button`
  border: none;
  background: none;
  color: #40396a;
`;
