import { Col, Container, Form, Dropdown, Row } from "react-bootstrap";
import Avatar from "../components/Avatar";
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";

const HomePage = () => {
  // ****************STATES*****************
  const [isSearch, setIsSearch] = useState(false);
  // ****************STATE HANDLESR*****************
  const handleSearch = () => {
    setIsSearch(true);
  };
  return (
    <Container fluid className="home-page">
      <Row>
        <Col md={4} className="user-list px-0">
          <div className="user-bar-stick pb-2">
            <div className="user-bar d-flex justify-content-between py-3 px-3 align-items-center">
              <Avatar
                src={
                  "https://www.maxpixel.net/static/photo/640/Icon-Avatar-Person-Business-Male-Profile-User-5359553.png"
                }
                width={50}
                height={50}
                alt="me"
              />
              <div className="d-flex align-items-center">
                <Icon.PeopleFill size={25} />
                <Icon.PlusCircleDotted size={25} className="mx-4" />
                <Icon.ChatLeftTextFill size={25} className="mr-4" />
                <Dropdown>
                  <Dropdown.Toggle>
                    <Icon.ThreeDotsVertical size={25} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>New group</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
          </div>
          {[...Array(15)].map((user, index) => {
            return (
              <div className="chat-list-bar d-flex justify-content-between py-2 px-3">
                <div className="d-flex">
                  <Avatar
                    src={
                      "https://www.maxpixel.net/static/photo/640/Icon-Avatar-Person-Business-Male-Profile-User-5359553.png"
                    }
                    width={50}
                    height={50}
                    alt="me"
                  />
                  <div className="ml-4">
                    <div className="d-flex user-name">Steve</div>
                    <div className="d-flex">Hey man</div>
                  </div>
                </div>
                <div className="ml-3">
                  <div>
                    <div className="mr-auto">Yesterday</div>
                    <div className="messages-notifications">24</div>
                  </div>
                </div>
              </div>
            );
          })}
        </Col>
        <Col md={8} className="main-chat-messages px-0">
          {!isSearch && (
            <div className="user-bar d-flex justify-content-between py-3 px-3 align-items-center">
              <Avatar
                src={
                  "https://www.maxpixel.net/static/photo/640/Icon-Avatar-Person-Business-Male-Profile-User-5359553.png"
                }
                width={50}
                height={50}
                alt="me"
              />
              <div className="d-flex align-items-center">
                <Icon.Search
                  onClick={handleSearch}
                  size={25}
                  className="mr-4"
                />
                <Dropdown>
                  <Dropdown.Toggle>
                    <Icon.ThreeDotsVertical size={25} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>Contact info</Dropdown.Item>
                    <Dropdown.Item className="py-4">Close chat</Dropdown.Item>
                    <Dropdown.Item>Clear messages</Dropdown.Item>
                    <Dropdown.Item className="py-4">Delete chat</Dropdown.Item>
                    <Dropdown.Item>Report</Dropdown.Item>
                    <Dropdown.Item className="py-4">Block</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          )}
          <div className={`search-messages ${isSearch ? "show" : "hide"}`}>
            <div className="user-bar d-flex  py-4 px-3 align-items-center">
              <Icon.X onClick={() => setIsSearch(false)} size={30} />
              <span className="ml-5">Seach Messages</span>
            </div>
            <Form.Group className="mb-3 mx-4 mt-2 search-bar">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="pl-5"
              />

              <Icon.Search size={20} className="search-icon" />
            </Form.Group>
            <div className="mt-5">
              <span>Search for messages with Louis </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
