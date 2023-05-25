import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">WELCOME TO</div>
            <div className="title">CINEMA 22</div>
            <div className="introButton mt-4 text-center">
              <Link to={"/movie-search"}><Button variant="dark">View Movie List</Button></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro;