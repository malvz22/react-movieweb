import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import assassinImage from "../assets/img/trending/assassinscreed.jpg";
import wakandaImage from "../assets/img/trending/wakandaforever.jpeg";
import johnwick3Image from "../assets/img/trending/johnwick3.png";
import soloImage from "../assets/img/trending/solo.jpeg";

const Trending = () => {
    return (
        <div>
            <Container>
                <h1 className='text-white text-center p-3 fw-bold'>TRENDING</h1>
                <Row className='movieWrapper'>
                    <Col md={3} className='movieImage mt-4'>
                        <Card className="bg-light text-black movieImage">
                            <Image
                                src={assassinImage}
                                alt="Assassin's Creed"
                                className='rounded-2'
                            />
                            <Card.Title className='text-center'>Assassin's Creed</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={3} className='movieImage mt-4'>
                        <Card className="bg-light text-black movieImage">
                            <Image
                                src={wakandaImage}
                                alt="Wakanda Forever"
                                className='rounded-2'
                            />
                            <Card.Title className='text-center'>Wakanda Forever</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={3} className='movieImage mt-4'>
                        <Card className="bg-light text-black movieImage">
                            <Image
                                src={johnwick3Image}
                                alt="John Wick Chapter 3"
                                className='rounded-2'
                            />
                            <Card.Title className='text-center'>John Wick Chapter 3</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={3} className='movieImage mt-4'>
                        <Card className="bg-light text-black movieImage">
                            <Image
                                src={soloImage}
                                alt="Solo: A Star Wars Story"
                                className='rounded-2'
                            />
                            <Card.Title className='text-center'>Solo: A Star Wars Story</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Trending;