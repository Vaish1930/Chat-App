import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Profile from "./Profile";

function Contact() {
  return (
    <ContactsSection>
      <Profile />
      <Search placeholder="Search Chatroom" />
      <RoomSection>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </RoomSection>
    </ContactsSection>
  );
}

export default Contact;

const ContactsSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  background-color: #271c46;
`;

const Search = styled.input`
  width: 300px;
  background-color: #271c46;
  border: none;
  margin: 50px 0 30px 0;
  font-size: 15px;
  color: white;
  outline-width: 0;
  border-bottom: 1px solid white;
`;

const RoomSection = styled.div`
  overflow-y: scroll;
`;
