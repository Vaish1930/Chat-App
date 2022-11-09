import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#E5E5ff",
    borderRadius: "20px",
  },
};

function EditRoom({ modalIsOpen, closeModal }) {
  return (
    <ModalSection>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <UpdateForm>
          <Update>Edit Information</Update>
          <UpdateName type="text" placeholder="Edit Chatroom-Name" />
          <UpdateImage type="file" />

          <UpdateButton type="submit">Submit</UpdateButton>
          <DeleteButton type="submit">Delete Chatroom</DeleteButton>
        </UpdateForm>
      </Modal>
    </ModalSection>
  );
}

export default EditRoom;

const ModalSection = styled.div`
  display: flex;
`;

const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: center;
`;

const UpdateName = styled.input`
  height: 30px;
  width: 250px;
  margin: 10px 0 10px 0;
  border: none;
  border-radius: 5px;
  outline-width: 0;
  padding: 10px;
`;

const Update = styled.h2`
  font-family: "Fira Sans", sans-serif;
`;

const UpdateImage = styled.input`
  font-size: 13px;
  margin-bottom: 10px;
`;

const UpdateButton = styled.button`
  height: 30px;
  width: 250px;
  background-color: #271c46;
  color: white;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
`;

const DeleteButton = styled.button`
  height: 30px;
  width: 250px;
  background-color: #eb1d36;
  color: white;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
`;
