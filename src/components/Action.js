import { Carousel, Container, Image } from 'react-bootstrap';
import assassinImage from "../assets/img/trending/assassinscreed.jpg";
import leonImage from "../assets/img/trending/leon.jpeg";
import johnwick3Image from "../assets/img/trending/johnwick3.png";
import soloImage from "../assets/img/trending/solo.jpeg";
import johnwick4Image from "../assets/img/trending/johnwick4.jpeg";
import ironmanImage from "../assets/img/trending/ironman.jpeg";
import starwars1Image from "../assets/img/trending/starwars1.jpeg";
import demonslayerImage from "../assets/img/trending/demonslayer.jpeg";
import manofsteelImage from "../assets/img/trending/manofsteel.jpeg";
import f9Image from "../assets/img/trending/f9.jpeg";
import mi3Image from "../assets/img/trending/mi3.jpeg";
import snakeeyesImage from "../assets/img/trending/snakeeyes.jpeg";

const Action = () => {
    return (
        <>
            <Container>
                <h2 className='text-white text-center p-2 fw-bold'>ACTION</h2>

                <Carousel>
                    <Carousel.Item>
                        <div className='card-wrapper'>
                            <Image
                                src={assassinImage}
                                alt="Assassin's Creed"
                                className='rounded-2 movieImage'
                            />
                            <Image
                                src={mi3Image}
                                alt="Mission Impossible III"
                                className='rounded-2 movieImage'
                            />
                            <Image
                                src={soloImage}
                                alt="Solo: A Star Wars Story"
                                className='rounded-2 movieImage'
                            />
                            <Image
                                src={johnwick3Image}
                                alt="John Wick Chapter 3: Parabellum"
                                className='rounded-2 movieImage'
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='card-wrapper'>
                            <Image
                                src={ironmanImage}
                                alt="Iron Man"
                                className='rounded-2 movieImage'
                            />
                            <Image
                                src={johnwick4Image}
                                alt="John Wick: Chapter 4"
                                className='rounded-2 movieImage'
                            />
                            <Image
                                src={starwars1Image}
                                alt="Star Wars Episode I"
                                className='rounded-2 movieImage'
                            />
                            <Image
                                src={leonImage}
                                alt="Leon: The Professional"
                                className='rounded-2 movieImage'
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='card-wrapper'>
                            <Image
                                src={snakeeyesImage}
                                alt="Snake Eyes: GI Joe Origin"
                                className='rounded-2 movieImage'
                            />
                            <Image
                                src={manofsteelImage}
                                alt="Man Of Steel"
                                className='rounded-2 movieImage'
                            />
                            <Image
                                src={f9Image}
                                alt="F9: The Fast Saga"
                                className='rounded-2 movieImage'
                            />
                            <Image
                                src={demonslayerImage}
                                alt="Demon Slayer"
                                className='rounded-2 movieImage'
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>

        </>
    )
}

export default Action;