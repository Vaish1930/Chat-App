import React from "react";
import styled from "styled-components";

import AddCommentIcon from "@mui/icons-material/AddComment";
import { useState } from "react";
import AddRoom from "./AddRoom";
import { selectUser } from "../features/authSlice";
import { useSelector } from "react-redux";

function Profile() {
  const [addRoomOpen, setAddRoomOpen] = useState(false);
  const user = useSelector(selectUser);

  function openModal() {
    setAddRoomOpen(true);
  }

  return (
    <ProfileContainer>
      <ProfileWrapper>
        <ProfileImage
          src={
            "https://pbs.twimg.com/profile_images/1222646977332174849/xWcD6t_Q_400x400.jpg"
          }
        />
        <ProfileDetails>
          <ProfileName>{user?.name}</ProfileName>
          <ProfileEmail>{user?.email}</ProfileEmail>
        </ProfileDetails>
      </ProfileWrapper>
      <CreateChatroom>
        <AddCommentIcon onClick={openModal} />
      </CreateChatroom>

      {addRoomOpen && <AddRoom closeModal={setAddRoomOpen} />}
    </ProfileContainer>
  );
}

export default Profile;

const ProfileContainer = styled.section`
  display: flex;
  background-color: #271c46;
  justify-content: space-between;
`;

const ProfileWrapper = styled.div`
  display: flex;
`;

const ProfileImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  object-fit: contain;
  background-color: red;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

const ProfileName = styled.h2`
  font-weight: light;
  color: white;
  font-family: "Fira Sans", sans-serif;
`;

const ProfileEmail = styled.h3`
  font-weight: lighter;
  color: #948ab0;
  font-family: "Fira Sans", sans-serif;
`;

const CreateChatroom = styled.button`
  background: none;
  font-size: 30px;
  border: none;
  color: white;
`;
