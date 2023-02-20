import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Avatar from "../components/Avatar";
import * as Icon from "react-bootstrap-icons";

const HomePage = () => {
  return (
    <Container fluid className="home-page">
      <Row>
        <Col md={4} className="user-list px-0">
          <div className="user-bar d-flex justify-content-between py-3 px-3 align-items-center">
            <Avatar
              src={
                "https://www.maxpixel.net/static/photo/640/Icon-Avatar-Person-Business-Male-Profile-User-5359553.png"
              }
              width={50}
              height={50}
              alt="me"
            />
            <div>
              <Icon.PeopleFill size={25} />
              <Icon.PlusCircleDotted size={25} className="mx-4" />
              <Icon.ChatLeftTextFill size={25} className="mr-4" />
              <Icon.ThreeDotsVertical size={25} />
            </div>
          </div>

          <Form.Group className="mb-3 mx-4 mt-2 search-bar">
            <Form.Control
              type="search"
              placeholder="Search or start a new chat"
              className="pl-5"
            />

            <Icon.Search size={20} className="search-icon" />
          </Form.Group>
          <div className="d-flex">
            <Avatar
              src={
                "https://www.maxpixel.net/static/photo/640/Icon-Avatar-Person-Business-Male-Profile-User-5359553.png"
              }
              width={50}
              height={50}
              alt="me"
            />
          </div>
        </Col>
        <Col md={8}></Col>
      </Row>
    </Container>
  );
};
export default HomePage;
