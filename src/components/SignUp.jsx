import { Row, Col, Container } from "react-bootstrap-v5";
import * as Icon from "react-bootstrap-icons";
const SignUp = () => {
  return (
    <Container className="sign-page ">
      <Row>
        <Col lg={8} className="d-flex flex-column justify-content-start">
          <span className="d-flex my-5 h2">Use WhatsApp on your computer</span>
          <div>
            <span className="d-flex my-4">1. Open WhatsApp on your phone</span>
            <span className="d-flex my-4 align-items-center">
              2. Tap <strong className="px-1">Menu</strong>{" "}
              <Icon.ThreeDotsVertical size={20} color="gray" /> or{" "}
              <strong className="px-1">Settings</strong>{" "}
              <Icon.Gear size={20} color="gray" className="mr-1" /> and select
              <strong className="px-1">linked Devices</strong>
            </span>
            <span className="d-flex my-4">
              3. Tap on <strong className="px-1">linked Devices</strong>
            </span>
            <span className="d-flex my-4">
              4. Point your phone to this screen to capture the code
            </span>
          </div>
        </Col>
        <Col lg={4}>Register here</Col>
      </Row>
    </Container>
  );
};
export default SignUp;
