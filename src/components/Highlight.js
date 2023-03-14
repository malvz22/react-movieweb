import Carousel from 'react-bootstrap/Carousel';
import johnwick3Image from "../assets/img/highlight/johnwick3.jpeg";
import assassinsImage from "../assets/img/highlight/assassinscreed.jpeg";
import wakandaImage from "../assets/img/highlight/wakandaforever.jpeg";

const Highlight = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block highlightImage mx-auto"
                    src={johnwick3Image}
                    alt="John Wick 3"
                />
                <Carousel.Caption>
                    <h3>John Wick Chapter 3</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block highlightImage mx-auto"
                    src={assassinsImage}
                    alt="Assassin's Creed"
                />
                <Carousel.Caption>
                    <h3>Assassin's Creed</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block highlightImage mx-auto"
                    src={wakandaImage}
                    alt="Wakanda Forever"
                />
                <Carousel.Caption>
                    <h3>Wakanda Forever</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Highlight;
