import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectRooms, setRoomAsync } from "../features/chatRoomSlice";
import Card from "./Card";
import Profile from "./Profile";

function Contact() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRoomAsync());
  }, [dispatch]);

  const rooms = useSelector(selectRooms);
  return (
    <ContactsSection>
      <Profile />
      <Search placeholder="Search Chatroom" />
      <RoomSection>
        {rooms.map((room) => (
          <Card key={room._id} name={room.name} img={room.profileUrl} />
        ))}
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
