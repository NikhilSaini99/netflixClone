import React, { useState} from 'react'
import GoogleLoginButton from './Utils/GoogleLoginButton'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Stack, TextField, Typography } from '@mui/material'
import background from '../assets/images/background1.jpg'
import logo from '../assets/images/netflix.svg'
import { grey } from '@mui/material/colors'
import { Link } from 'react-router-dom'

const SignIn = () => {
//  const clientId = "809188169045-fk7d1hqogk3fbm3692fpognmj967171p.apps.googleusercontent.com";
  const [check, isChecked] = useState(true)

  function handleChangeCheckbox() {
    isChecked(!check);
  }

  return (
    <Box>
      <Box sx={{ position: 'absolute' }}>
        <Box overflow='hidden' sx={{
          position: "relative",
          right: '0', bottom: '0', left: '0', zIndex: '-2',
          height: { xs: '900px', sm: '1100px', md: '1400px' }
        }}>
          <img src={background} alt="background" style={{
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
        zIndex: '-1',
        position: "absolute", top: "0", right: '0', bottom: '0', left: '0', width: '100%', height: '100%',
        backgroundColor: 'rgba(20,20,20,0.5)'
      }}>
      </Box>

      {/* Navbar Start */}
      <Box sx={{ position: 'realtive', top: 0, zIndex: '999' }}>
        <Box sx={{ position: 'absolute', top: '0', width: '100%', pt: '0.5rem', zIndex: '999' }}>
          <Stack sx={{
            backgroundColor: 'transparent', color: 'white',
            px: { xs: '1rem', sm: '1.5rem', md: '2rem' }
          }}>
            <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Stack sx={{ maxWidth: "96px", height: '48px' }}>
                <Link to="/"><img src={logo} alt='logo' style={{ width: "100%", height: '100%' }} /></Link>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
      {/* Navbar End */}

      {/* SIGN IN FORM STARTS */}

      <Box sx={{
        mt: '200px',
        color: 'red', position: 'relative',
        top: 60,
        left: '0', maxWidth: { xs: '98%', sm: '60%', md: '55%', lg: '35%', xl: '30%' },
        margin: '0 auto', overflow: 'hidden',
        borderRadius: '10px',
        background: 'rgba(0, 0, 0, 0.9);',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.45) 0%,rgba(0, 0, 0, 0.45) 75%'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          margin: '0 auto',
          maxWidth: { xs: '95%', sm: '90%', md: '85%' },
          color: 'white',
          paddingTop: { xs: '1.5rem', sm: '2rem', md: '4rem' },
          paddingBottom: { xs: '1.5rem', sm: '2rem', md: '4rem' },
          mx: { xs: '2rem', sm: '2.2rem' }
        }}>
          <Typography sx={{
            fontSize: { xs: '1.8rem', md: '2rem', lg: '2.5rem' },
            fontWeight: 'bold'
          }}>Sign In</Typography>
          <Stack direction='column' spacing={1} sx={{ color: 'white' }} marginTop='1rem'>
            <TextField color='error' variant='filled' label="Email or Phone Number" required
              sx={{ backgroundColor: '#333333', borderRadius: '5px' }}

              InputProps={{
                style: {
                  color: 'white'
                }
              }}
              InputLabelProps={{
                style: {
                  color: '#8c8c8c',
                  position: "absolute",
                  top: "3.5%",
                  left: "10px"
                }
              }}
            />
            <TextField variant="filled" label="Password" required
              color='error'
              sx={{ backgroundColor: '#333333', borderRadius: '5px' }}
              InputProps={{
                style: {
                  color: 'white'
                }
              }}
              InputLabelProps={{
                style: {
                  color: '#8c8c8c',
                  position: "absolute",
                  top: "3.5%",
                  left: "10px"
                }
              }}
            />
          </Stack>
          <Stack direction='column' spacing={1} marginTop='1rem'>
            <Button variant="contained" color="error" component={Link} to="/Content"
              sx={{ backgroundColor: '#e50914' }}>Sign In As Guest</Button>
             <GoogleLoginButton/>
          </Stack>
          <Stack direction='row' justifyContent='space-between' alignItems='center' marginTop='0.5rem'
            sx={{ marginBottom: { xs: '1rem', sm: '1.2rem', md: '1.8rem' } }}>
            <FormGroup>
              <FormControlLabel control={<Checkbox checked={check} onChange={handleChangeCheckbox}
                sx={{
                  marginLeft: "0px",
                  color: grey[500],
                  '&.Mui-checked': {
                    color: grey[500],
                  },
                }} disableRipple />} label="Remember me" style={{ color: "#8c8c8c", fontWeight: "bold" }} />
            </FormGroup>

            <Typography variant='subtitle1' sx={{ color: 'grey' }}>Need Help?</Typography>
          </Stack>


          <Stack direction='row' spacing={1}>
            <Typography variant='subtitle1' color="gray">New to Netflix?</Typography>
            <Link to="/" style={{ textDecoration: 'none' }}><Typography variant='subtitle1' color='white'
              fontWeight='bold'>Sign up Now</Typography></Link>
          </Stack>
          <Typography variant='subtitle2' sx={{ color: 'gray' }}>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </Typography>
        </Box>

      </Box>

      {/* SIGN IN FORM ENDS */}

    </Box>
  )
}

export default SignIn
