import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  LoginContainer,
  LoginForm,
  Input,
  Heading,
  Label,
  Button2,
  InputContainer,
  LinkItem,
  Cont,
  Cont1,
  ButtonContainer,
  Button,
} from "./RegisterStyledComponents";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      password,
      dob,
      phonenumber,
      address,
    };

    const url = "https://login-register-api-9xek.onrender.com/register";
    // console.log(userDetails);

    try {
      const response = await axios.post(url, data);
      console.log(response.data);
      if (response.data.status === 200) {
        alert("Registration Success");
        history.push("/login");
      } else {
        alert("Registration  Failed");
        history.push("/register");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Heading>Registration</Heading>
        <InputContainer>
          <Cont1>
            <Cont>
              <Label htmlFor="firstname">First Name</Label>
              <Input
                id="firstname"
                type="text"
                placeholder="Enter First Name"
                value={firstname}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Cont>
            <Cont>
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                type="text"
                placeholder="Enter Last Name"
                value={lastname}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Cont>
          </Cont1>
          <Cont1>
            <Cont>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Cont>
            <Cont>
              <Label htmlFor="phonenumber">Phone Number</Label>
              <Input
                id="phonenumber"
                placeholder="Enter Phone Number"
                type="tel"
                value={phonenumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </Cont>
          </Cont1>
          <Cont1>
            <Cont>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Cont>
            <Cont>
              <Label htmlFor="confirmpassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmpassword"
                placeholder="Confirm Password"
              />
            </Cont>
          </Cont1>
          <Cont1>
            <Cont>
              <Label htmlFor="dob">Date Of Birth</Label>
              <Input
                id="dob"
                placeholder="Enter Date Of Birth"
                type="date"
                value={dob}
                onChange={(event) => setDob(event.target.value)}
              />
            </Cont>
            <Cont>
              <Label htmlFor="address">Address</Label>
              <Input
                type="text"
                id="address"
                placeholder="Enter Address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </Cont>
          </Cont1>
        </InputContainer>
        <ButtonContainer>
          <Button type="submit" onClick={handleSubmit}>
            Create Account
          </Button>
          <LinkItem to="/login">
            <Button2>Login</Button2>
          </LinkItem>
        </ButtonContainer>
      </LoginForm>
    </LoginContainer>
  );
};

export default Register;
