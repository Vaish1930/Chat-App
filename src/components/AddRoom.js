import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRoomAsync } from "../features/chatRoomSlice";

function AddRoom({ closeModal }) {
  const [roomName, setRoomName] = useState("");
  const [roomImg, setRoomImg] = useState("");

  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      await dispatch(
        createRoomAsync({ name: roomName, profileUrl: roomImg })
      ).unwrap();
      closeModal(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ModalBackground>
      <ModalSection>
        <ButtonWrapper>
          <CloseButton
            onClick={() => {
              closeModal(false);
            }}
          >
            <CloseIcon />
          </CloseButton>
        </ButtonWrapper>
        <RoomDetails onSubmit={submitHandler}>
          <RoomHeding>Create Chatroom</RoomHeding>

          <RoomName
            placeholder="Add a Name"
            type="text"
            value={roomName}
            onChange={(e) => {
              setRoomName(e.target.value);
            }}
          />
          <RoomImg
            type="file"
            value={roomImg}
            onChange={(e) => setRoomImg(e.target.value)}
          />
          <AddRoomButton type="submit">Create Chatroom</AddRoomButton>
        </RoomDetails>
      </ModalSection>
    </ModalBackground>
  );
}

export default AddRoom;
const ModalBackground = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* background-color: white; */
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  /* z-index: 100; */
`;
const ModalSection = styled.div`
  width: 350px;
  height: 250px;
  border-radius: 12px;
  background-color: #e5e5ff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;

  padding: 25px;
`;
const RoomDetails = styled.form`
  display: flex;
  flex-direction: column;

  margin: 5px;
  align-items: center;
`;
const CloseButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  border: none;
  background-color: transparent;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RoomHeding = styled.h2`
  font-family: "Fira Sans", sans-serif;
`;
const RoomName = styled.input`
  height: 30px;
  width: 250px;
  margin: 10px 0 10px 0;
  border: none;
  border-radius: 5px;
  outline-width: 0;
  padding: 10px;
`;
const RoomImg = styled.input`
  font-size: 13px;
`;
const AddRoomButton = styled.button`
  height: 30px;
  width: 250px;
  background-color: #271c46;
  color: white;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
`;
