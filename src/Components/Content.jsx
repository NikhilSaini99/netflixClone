import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../assets/images/netflix.svg'
// import movie_background from '../assets/images/movie_back.jpg'
// import profile from '../assets/images/profile.jpg'
import { Box, Stack, Typography, IconButton, Drawer } from '@mui/material'
import Rows from './Rows'
import Footer from './Footer'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import videoback from '../assets/video/background.mp4'
import ReactPlayer from 'react-player'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';


const API_key = process.env.REACT_APP_API_KEY;

const Popular_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=1`;
const Top_Rated_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US&page=1`;
const Upcoming_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_key}&language=en-US&page=1`;


const Content = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false);
  const [isMute, setMute] = useState(true)

  const [navColor, setNavColor] = useState(false)


  function changeColor() {
    if (window.scrollY > 100) {
      setNavColor(true)
    }
    else {
      setNavColor(false)
    }
  }

  useEffect(() => {
    changeColor();
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    }
  }, [])



  function handleHamburger() {
    setIsOpen(!isOpen);
  }

  function handleMute() {
    setMute(!isMute)
  }


  return (
    <>
      {/* Navbar Start */}

      <Stack direction="row" sx={{
        height: '78px',
        zIndex: '999',
        color: 'white', position: 'fixed', top: '0', backgroundColor: 'transparent', width: "100%",
        ...(navColor ? {
          backgroundColor: 'rgb(20,20,20)',
          transition: 'all 0.6s'
        } : {
          backgroundColor: 'transparent',
          transition: 'all 0.6s'
        })
      }}>
        <Stack direction="row" sx={{
          display: 'flex', justifyContent: 'space-between'
          , width: '100%', alignItems: 'center', px: { xs: '1rem', sm: '2rem', md: '3rem' }
        }}>

          <Stack direction='row' spacing={3} >
            <img src={logo} alt="logo" style={{ width: '98px' }} />
            <Stack direction='row' sx={{
              cursor: 'pointer',
              display: { xs: 'none', sm: 'none', md: 'flex' },
              gap: '1rem',
              listStyle:
                'none'
            }}>
              <li>Home</li>
              <li>Tv Shows</li>
              <li>News & Popular</li>
              <li>Movies</li>
              <li>My List</li>
            </Stack>
            <IconButton sx={{
              display: {
                xs: 'block', sm: 'block', md: 'none'
              },
              color: 'white'
            }}
              onClick={handleHamburger}
            >
              <MenuIcon />
            </IconButton>


            <Drawer
              anchor="right"
              open={isOpen}
              variant="temporary"
              onClose={handleHamburger}
              className="drawer"
              BackdropProps={{
                style: { backgroundColor: "transparent", opacity: 2 },
              }}
              PaperProps={{
                elevation: 5,
                sx: {
                  paddingTop: "20px",
                  width: "100%",
                  backgroundColor: 'rgb(20,20,20)'
                },
              }}
            >
              <Box fontWeight="bold" sx={{ color: 'white' }}>
                <ul style={{
                  display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none',
                  alignItems: 'center', padding: '0'
                }}>
                  <li>Home</li>
                  <li>Tv Shows</li>
                  <li>News & Popular</li>
                  <li>Movies</li>
                  <li>My List</li>
                </ul>

                <IconButton
                  onClick={handleHamburger}
                  display="flex"
                  sx={{ width: "100%", marginTop: "2.5rem" }}
                  role="button"
                >
                  <CloseIcon
                    sx={{
                      fontSize: "2rem",
                      color: "white",
                      borderRadius: "50px",
                    }}
                  />
                </IconButton>
              </Box>
            </Drawer>

          </Stack>
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' , gap:'1rem'}}>
            <Typography variant='body1' sx={{fontWeight:'bold'}}>Welcome back! {location.state.userName}</Typography>
            <img src={location.state.userProfile} alt="profile-jpg" style={{
              width: '52px', height: '52px', borderRadius: '50%',
              objectFit: 'cover'
            }} />
          </Box>
        </Stack>
      </Stack>
      {/* Navbar Close */}


      {/* Movie Background Image Start */}
      {/* <Box sx={{ backgroundColor: 'gray', position: 'relative', zIndex: '-1' }}>
        <img src={movie_background} alt="movie-background" style={{
          width: '100%', height: '100%',
          objectFit: 'cover'
        }} />
      </Box> */}

      {/* Movie Background Image End */}

      <Box sx={{ position: 'relative', top: '-8px'}}>
        <ReactPlayer
          url={videoback}
          width="100%"
          height="100%"
          loop={true}
          muted={isMute}
          playsinline
          playing={true}
          config={{
            youtube: {
              playerVars: {
                enablejsapi: 1,
                modestbranding: 1,
                playsinline: 1
              }
            }
          }}
        />
  <Box>
        <IconButton sx={{ position: 'absolute', right: {xs:'20px',sm:'30px',md:'50px'}, bottom: {xs:'60px',sm:'150px',md:'200px',lg:'300px',xl:'350px'} }} onClick={handleMute}>
          {isMute ? <VolumeOffIcon sx={{
            border:'2px solid white',
            borderRadius:'50%',
            color: "white",
            fontSize: { xs: '1rem', sm: '2rem', md: '4rem' }
          }} /> : <VolumeUpIcon sx={{
            border:'2px solid white',
            borderRadius:'50%',
            color: "white",
            fontSize: { xs: '1rem', sm: '2rem', md: '4rem' }
          }} />}
        </IconButton>
</Box>
      </Box>


      <Box sx={{ position: 'relative', top: '0'}}>
        <Box sx={{
          backgroundColor: 'transparent',
          backgroundImage: 'linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsla(0,0%,8%,.35) 29%,hsla(0,0%,8%,.58) 44%,#141414 68%,#141414)',
          backgroundPosition: '0 top',
          backgroundRepeat: 'repeat-x',
          backgroundSize: '100% 100%',
          bottom: '-1px',
          height: '14.7vw',
          opacity: '1',
          top: 'auto',
          width: '100%',
          left: '0',
          position: 'absolute',
          right: '0',
          zIndex: '8'
        }}></Box>
      </Box>


      {/* Movie Rows START */}

      <Box sx={{ backgroundColor: 'rgb(20,20,20)', color: 'white' }}>

        <Box sx={{

          display: 'flex', flexDirection: 'column', gap: '2rem',
          position: 'relative', top: { xs: '-45px', sm: '-100px', md: '-150px', lg: '-180px' }, zIndex: 10
        }}>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '1rem', sm: '2rem' } }}>
            <Typography sx={{ pl: { xs: '2rem', md: '4rem' }, fontSize: { xs: '1.5rem' } }}>Popular Movies</Typography>
            <Rows url={Popular_URL} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '1rem', sm: '2rem' } }}>
            <Typography sx={{ pl: { xs: '2rem', md: '4rem' }, fontSize: { xs: '1.5rem' } }}>Top Rated Movies</Typography>
            <Rows url={Top_Rated_URL} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '1rem', sm: '2rem' } }}>
            <Typography sx={{ pl: { xs: '2rem', md: '4rem' }, fontSize: { xs: '1.5rem' } }}>Upcoming Movies</Typography>
            <Rows url={Upcoming_URL} />
          </Box>

        </Box>

      </Box>
      {/* Movie Rows END */}
      <Footer />
    </>
  )
}


export default Content
