import { Box, Stack, Typography, Button, TextField } from '@mui/material'
import React from 'react'
import backgroundImg from "../assets/images/background.jpg"
import logo from '../assets/images/netflix.svg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Box sx={{
        overflow: 'hidden',
        position: 'relative', top: '0',
        // height: { xs: '915px', sm: '100vh', md: '100vh' },
        height: { xs: '900px', sm: '1100px', md: '1400px', lg: '100vh' }

      }}>
        <Box sx={{ position: 'absolute' }}>
          <Box overflow='hidden' sx={{
            position: "relative",
            right: '0', bottom: '0', left: '0', zIndex: '-2',
            height: { xs: '900px', sm: '1100px', md: '1400px' }
          }}>
            <img src={backgroundImg} alt="background" style={{
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              height: '100%',
              width: '100%',
              position: 'relative',
              zIndex: '-1',
              objectFit: 'cover',
            }} />

          </Box>
        </Box>
        <Box sx={{
          position: "absolute", top: "0", width: '100%', height: '100%',
          backgroundColor: 'rgba(20,20,20,0.5)',
          backgroundImage: 'linear-gradient(0deg,transparent 50%,rgba(0,0,0,.7)),radial-gradient(50% 100%,transparent 0,rgba(0,0,0,.7) 100%)'
        }}>

        </Box>

        <Box sx={{ position: 'realtive', top: 0 }}>
          <Box sx={{ position: 'absolute', top: '0', width: '100%', pt: '1rem', zIndex: '999' }}>
            <Stack sx={{
              backgroundColor: 'transparent', color: 'white',
              px: { xs: '1rem', sm: '1.5rem', md: '2rem' }
            }}>
              <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack sx={{ maxWidth: "96px", height: '48px' }}>
                  <img src={logo} alt='logo' style={{ width: "100%", height: '100%' }} />
                </Stack>
                <Button component={Link} to="/SignIn"
                  variant='contained' aria-label='signIn' color='error'
                  sx={{ color: 'white', backgroundColor: '#e50914' }}>Sign In</Button>
              </Stack>
            </Stack>
          </Box>


          <Box sx={{
            width: '100%',
            color: 'white', margin: '0 auto', position: 'absolute', top: { xs: '120px', sm: '130px', md: '145px' },
          }}>
            <Box sx={{
              maxWidth: { xs: '92%', sm: '90%', md: "70%", lg: '50%' },
              margin: '0 auto',
              textAlign: 'center', display: 'flex', flexDirection: 'column',
              gap: { xs: '1rem', md: '1.2rem' }, pt: { xs: '3rem', sm: '4rem', md: '5rem' }
            }}>
              <Typography variant="h2"
                sx={{ fontWeight: 'bold', fontSize: { xs: '2.2rem', sm: '3rem', lg: '4.3rem' } }}>
                Unlimited movies, TV shows and more.
              </Typography>
              <Typography variant="h3"
                sx={{ fontSize: { xs: '1.2rem', sm: '1.8rem', md: '2rem' } }}>
                watch anywhere. Cancel anytime.
              </Typography>
              <Typography variant="h2"
                sx={{ fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.8rem' } }}>
                Ready to watch? Enter your email to create or restart your membership.
              </Typography>

              <Box sx={{
                display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                alignItems: { xs: 'center', md: 'normal' }, gap: { xs: '2rem', sm: '2rem', md: '0' },
                pt: { xs: '1rem', sm: '1.5rem', md: '2rem' }
              }}>
                <TextField label="Email address" fullWidth sx={{ backgroundColor: 'white' }}
                  variant="filled"
                  InputLabelProps={{ style: { color: 'gray' } }}
                />
                <Button component={Link} to="/SignIn"
                  variant="contained" color="error" endIcon={<ArrowForwardIosIcon />}
                  sx={{ width: '200px', backgroundColor: '#e50914' }}>Get Started</Button>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>
    </>
  )
}

export default Home
