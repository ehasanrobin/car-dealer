import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase/Firebase.init";
import "./Login.css";
const Login = () => {
  const [loggin, setLoggin] = useState(false);
  let location = useLocation();
  const from = location?.state?.pathname || "/";
  const handleLoggin = (event) => {
    setLoggin(event.target.checked);
  };

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [createUserWithEmailAndPassword, user3] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [user, user1] = useAuthState(auth);
  console.log(user3);
  let navigate = useNavigate();
  if (user || user1) {
    return navigate(from, { replace: true });
  }

  const loginForm = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const logginSuccess = signInWithEmailAndPassword(email, password);
    console.log(logginSuccess);
    if (logginSuccess == true) {
      fetch("https://cryptic-falls-18058.herokuapp.com/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  const registerForm = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const displayName = event.target.name.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };
  return (
    <Container>
      <Row>
        <div className="login-form">
          <Form onSubmit={loggin == true ? registerForm : loginForm}>
            <h2>Please {loggin == true ? "login" : "Register"}</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            {loggin == true && (
              <>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" name="name" placeholder="Name" />
                </Form.Group>
              </>
            )}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                onClick={handleLoggin}
                type="checkbox"
                label="Already have an account?"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {loggin == true ? "Register" : "Login"}
            </Button>
          </Form>
          <div className="social login">
            <button onClick={() => signInWithFacebook()}>
              <i className="fa-brands fa-facebook"></i>
            </button>
            <button onClick={() => signInWithGoogle()}>
              <i className="fa-brands fa-google"></i>
            </button>
            <button onClick={() => signInWithGithub()}>
              <i className="fa-brands fa-github"></i>
            </button>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Login;
