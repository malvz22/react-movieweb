import { Carousel, Container, Image } from 'react-bootstrap';
import assassinImage from "../assets/img/trending/assassinscreed.jpg";
import wakandaImage from "../assets/img/trending/wakandaforever.jpeg";
import johnwick3Image from "../assets/img/trending/johnwick3.png";
import soloImage from "../assets/img/trending/solo.jpeg";
import johnwick4Image from "../assets/img/trending/johnwick4.jpeg";
import ironmanImage from "../assets/img/trending/ironman.jpeg";
import starwars1Image from "../assets/img/trending/starwars1.jpeg";
import aliceImage from "../assets/img/trending/aliceinwonderland.png";
import avatar2Image from "../assets/img/trending/avatar2.jpeg";
import demonslayerImage from "../assets/img/trending/demonslayer.jpeg";
import manofsteelImage from "../assets/img/trending/manofsteel.jpeg";
import f9Image from "../assets/img/trending/f9.jpeg";
import { getMovieList, searchMovie } from '../api';

const Trending = () => {



    return (
        <>
            <Container>
                <h2 className='text-white text-center p-2 fw-bold'>TRENDING</h2>

                <Carousel>
                    <Carousel.Item>
                        <div className='card-wrapper'>
                            <Image
                                src={assassinImage}
                                alt="Assassin's Creed"
                                className='rounded-2 movieImage'
                            />
                            <Image
                                src={wakandaImage}
                                alt="Wakanda Forever"
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
                                src={aliceImage}
                                alt="Alice In Wonderland"
                                className='rounded-2 movieImage'
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='card-wrapper'>
                            <Image
                                src={avatar2Image}
                                alt="Avatar: The Way Of Water"
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

export default Trending;