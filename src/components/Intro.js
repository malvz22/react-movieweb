import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">WELCOME TO</div>
            <div className="title">CINEMA 22</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">View Movie List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro;