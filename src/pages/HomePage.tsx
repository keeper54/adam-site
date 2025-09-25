import { Box, Typography, Button, Chip, Container, Grid, Stack, IconButton,  CardHeader } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import skills from '../assets/data/skills.json';
import { Link } from 'react-router-dom';
const HomePage = () => {

  
    return (
      <Grid container spacing={0}>
        <Grid size={12} sx={{textAlign: 'center'}}>
          <Box
            sx={{
              
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              textAlign: 'center',
              p: 4,
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Staff Software Engineer
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
              Building scalable, performant, and accessible solutions and architecture
            </Typography>


            <Button component={Link} to="/resume"
            variant="contained" sx={{margin: '.5rem auto', width: '40%', textAlign: 'center'
            }}>
              View my Resume
            </Button>
            <Button component={Link} to="/projects"
            variant="contained" sx={{margin: '.5rem auto', width: '40%', textAlign: 'center'
            }}>
              Portfolio
            </Button>
            <Button href="mailto:adam.carle.oliver@gmail.com"
            rel="noopener noreferrer" // Recommended for security
            target="_blank"
            variant="contained" sx={{margin: '.5rem auto', width: '40%', textAlign: 'center', display: 'inline-block'
            }}>
              Contact Me
            </Button>
            
          </Box>


          <Box sx={{ py: 8, backgroundColor: 'white', color: 'black' }}>
            <Container maxWidth="md">
                  <Typography variant="body1" textAlign={'left'} paragraph>
                    As a Senior-level Software Engineer, I specialize in designing and implementing high-performance, scalable, and resilient software systems. My passion lies in solving complex technical challenges and leading cross-functional teams to deliver exceptional products.
                  </Typography>
                  {/* More paragraphs here */}
              <Grid container alignItems="left">
                      {Object.entries(skills).map(([category, skills], i) => (
                        <Grid size={{sm:12, xs:12, md:4, lg:12}} sx={{ textAlign: 'left', justifyContent: 'left'}} key={i}>
                          <CardHeader key={category} title={category} />
                          <Stack direction="row" flexWrap="wrap" spacing={0} sx={{justifyContent: 'left'}}>
                          {skills.map((skill) => (
                              <Chip key={skill} label={skill} variant="outlined" sx={{ borderColor: 'gray', color: 'black'}} />
                            ))}
                          </Stack>
                        </Grid>
                        ))
                    }
              </Grid>
            </Container>
          </Box>  
          <Box sx={{ py: 8, backgroundColor: 'black', color: 'white' }}>
    <Container maxWidth="md">
      <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
        Get in Touch
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid size={{sm:12, xs:12, md:6}} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Find me on:
          </Typography>
          <Box>
            <IconButton sx={{ color: 'white', '&:hover': { color: 'gray' } }}>
              <GitHubIcon fontSize="large" href="https://github.com/keeper54" target="_blank" />
            </IconButton>
            <IconButton sx={{ color: 'white', '&:hover': { color: 'gray' } }}>
              <LinkedInIcon fontSize="large" href="https://www.linkedin.com/in/adamoliver/" target="_blank" />
            </IconButton>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
              adam.carle.oliver@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Container>
    
          </Box>    
        </Grid>
      </Grid>
    )
  
  }


export default HomePage;