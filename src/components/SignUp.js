import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginAsync, signUpAsync } from "../features/authSlice";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      await dispatch(
        signUpAsync({ email, name, password, phoneNumber })
      ).unwrap();

      navigate("/", { replace: true });
    } catch (error) {
      alert(error);
    }
  };

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      await dispatch(
        loginAsync({ email: loginEmail, password: loginPassword })
      ).unwrap();
      navigate("/", { replace: true });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Sections>
      <SignUpSection>
        <Heading>SignUp</Heading>
        <SignUpForm onSubmit={submitHandler}>
          <Email
            placeholder="Email"
            type="text"
            value={email}
            onChange={emailHandler}
          />
          <Username
            placeholder="Username"
            type="text"
            value={name}
            onChange={nameHandler}
          />
          <Password
            placeholder="Password"
            type="password"
            value={password}
            onChange={passwordHandler}
          />
          <PhoneNumber
            placeholder="Mobile-Number "
            type="number"
            value={phoneNumber}
            onChange={phoneNumberHandler}
          />

          <SubmitButton>SignUp</SubmitButton>
        </SignUpForm>
      </SignUpSection>

      <LoginSection>
        <Heading>Login</Heading>
        <SignUpForm onSubmit={loginHandler}>
          <Email
            placeholder="Email"
            type="text"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />

          <Password
            placeholder="Password"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <SubmitButton type="submit">Login</SubmitButton>
        </SignUpForm>
      </LoginSection>
    </Sections>
  );
}

export default SignUp;
const Sections = styled.section`
  display: flex;

  justify-content: space-around;

  background-color: #c6ebc5;
  height: 100vh;
`;

const SignUpSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: slateblue;
`;
const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #80489c;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5ff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;
`;
const Heading = styled.h1`
  margin-bottom: 10px;
`;

const Username = styled.input`
  height: 30px;
  width: 250px;
  margin: 10px 0 10px 0;
  border: none;
  border-radius: 5px;
  outline-width: 0;
  padding: 10px;
`;
const Password = styled.input`
  height: 30px;
  width: 250px;
  margin: 10px 0 10px 0;
  border: none;
  border-radius: 5px;
  outline-width: 0;
  padding: 10px;
`;
const PhoneNumber = styled.input`
  height: 30px;
  width: 250px;
  margin: 10px 0 10px 0;
  border: none;
  border-radius: 5px;
  outline-width: 0;
  padding: 10px;
`;

const Email = styled.input`
  height: 30px;
  width: 250px;
  margin: 10px 0 10px 0;
  border: none;
  border-radius: 5px;
  outline-width: 0;
  padding: 10px;
`;

const SubmitButton = styled.button`
  height: 30px;
  width: 250px;
  background-color: #271c46;
  color: white;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
`;
