import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Alert,
  Card,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
// import { logInData, signIn } from "../../redux/actions";
import * as Icon from "react-bootstrap-icons";
// import Spinner from "../../components/Spinner";
// import { getMe } from "../../redux/actions";

const SignIn = ({ signUp }) => {
  const dispatch = useDispatch();

  const [sign_in, setSign_in] = useState(false);
  const [password, setPassword] = useState("");
  const isLoading = useSelector((state) => state.accessToken.isLoading);
  const isGetMeLoading = useSelector((state) => state.me.isLoading);
  const isError = useSelector((state) => state.accessToken.isError);
  const signInCredentials = useSelector(
    (state) => state.accessToken.accessToken
  );
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  console.log(signInCredentials.accessToken);

  const loginFormData = {
    email: email,
    password: password,
  };
  const handleSignIn = async () => {
    // const token = await dispatch(signIn(loginFormData));
    setSign_in(true);
  };
  if (signInCredentials.accessToken) {
    // dispatch(getMe(signInCredentials.accessToken));
    // setTimeout(() => {
    // navigate("/user-page");
    // }, 500);
    if (!isGetMeLoading) {
      navigate("/user-page");
    }
  }
  return (
    <>
      <span className="d-flex my-5 h2">Sign In</span>

      {/* {isLoading && sign_in ? (
            <div className="  d-flex justify-content-center">
              {" "}
              <Spinner />
            </div>
          ) : isGetMeLoading && sign_in ? (
            <div className="  d-flex justify-content-center">
              {" "}
              <Spinner />
            </div>
          ) : null}
          {isError && sign_in && (
            <Alert variant="danger">
              The email or password you provided is incorrect
            </Alert>
          )} */}

      {/* //TODO do not delete me I am the registration confirmation */}
      {/* <Alert variant="success">
                Account verification has been successfully completed
              </Alert> */}

      <Form.Group className="d-flex mb-4">
        <Col className="pl-0">
          {" "}
          <Form.Control
            type="email"
            placeholder=" Email"
            onChange={handleEmail}
          />
        </Col>
      </Form.Group>
      <Form.Group className="d-flex mb-4">
        <Col className="pl-0">
          {" "}
          <Form.Control
            type="password"
            placeholder=" Password"
            onChange={handlePassword}
            minLength={5}
          />
        </Col>
      </Form.Group>
      <Col className=" mb-3 pl-0 ">
        <Link to="/chats" className="w-100">
          <Button
            disabled={!email || !password}
            className="px-4 w-100"
            variant="primary"
            onClick={handleSignIn}
          >
            Sign in
          </Button>
        </Link>
      </Col>

      <span className="mb-2">
        <strong>OR</strong>
      </span>
      <Col className=" d-flex mb-3 pl-0 ">
        <a
          href={`${process.env.REACT_APP_BE_PROD_URL}/users/googleLogin`}
          className="w-100"
        >
          <Button className="px-4  w-100" variant="primary">
            <Icon.Google size={20} />
            <span className="ml-3">Continue with Google</span>
          </Button>
        </a>
      </Col>

      <Col className=" py-3 pl-0">
        <span className="py-3">You don't have an account yet?</span>
        <hr />
        <Link onClick={() => signUp()}>
          <Button className="px-4  w-100" variant="success">
            Sign Up
          </Button>
        </Link>
      </Col>
    </>
  );
};
export default SignIn;
