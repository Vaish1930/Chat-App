import React from "react";

import styled from "styled-components";

import Contact from "./Contact";
import Chats from "./Chats";

function ChatRoom() {
  return (
    <ChatRoomSection>
      <Contact />
      <Chats />
    </ChatRoomSection>
  );
}

export default ChatRoom;

const ChatRoomSection = styled.section`
  display: flex;
  height: 100vh;
`;
