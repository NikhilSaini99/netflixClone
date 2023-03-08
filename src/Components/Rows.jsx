import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material';
import { useEffect, useState } from 'react'
import { fetchingMovieArray, fetchVideoKey } from './Utils/fetchFromApi'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';


//custom hook
const useMovieUrl = (url) => {
    const [movieData, setMovieData] = useState([])
    useEffect(() => {
        fetchingMovieArray(url).then(data => setMovieData(data));
    }, [url])
    return movieData
}
//custom hook
const useMoviekey = (movieId) => {
    const [videoKey, setVideoKey] = useState();
    useEffect(() => {
        const key = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}`
        fetchVideoKey(key).then(data => setVideoKey(data));
    }, [movieId])
    return videoKey
}

const VideoCard = ({ movieId, arr }) => {
    const videoid = useMoviekey(movieId);
    return (
        <Link to={`/video/${videoid}`}>
        <LazyLoad height={300}>
            <img loading="lazy" src={`https://image.tmdb.org/t/p/original/${arr.poster_path} `} alt={`${arr.title}`}
                style={{
                    objectFit: "cover",
                    width: '100%', height: '100%',
                    borderRadius: '5px'
                }}
            /></LazyLoad>
            </Link>
    )
}

const Rows = ({ url }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280, // screens between 1280px and 960px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 960, // screens between 960px and 600px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600, // screens below 600px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const moviesdata = useMovieUrl(url);

    return (
        <>
            <Box sx={{
                m: '0 3rem', overflowx: 'hidden', textAlign: 'center',
            }}>
                <Slider {...settings}>
                    {moviesdata.map((item, index) => (
                        <Box key={index} sx={{
                            position: 'relative', maxWidth: { xs: '125px', sm: '180px', md: '200px' }, height: { xs: '180px', sm: '200px', md: '300px' },
                            '&:hover': {
                                cursor: 'pointer',
                                transform: 'scale(1.2)',
                                transition: 'all 0.8s'
                            }
                        }}>
                            <VideoCard movieId={item.id} arr={item} />
                        </Box>
                    ))}

                </Slider>

            </Box>
        </>
    )
}

export default Rows