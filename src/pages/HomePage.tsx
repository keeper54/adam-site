import { Box, Typography, Button, Chip, Grid, Stack,  CardHeader, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import skills from '../assets/data/skills.json';
import { Link } from 'react-router-dom';
import { Star } from '@mui/icons-material';

const HomePage = () => {

  
    return (
      <Grid container spacing={0}>
        <Grid size={12} sx={{textAlign: 'center',background:'transparent'}}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom 
              sx={{ 
                textShadow: '2px 2px 4px rgba(256, 256, 256, 0.7)' 
                }}>
              Staff Software Engineer
            </Typography>
            <Typography variant="h5" sx={{ mb: 2, textShadow: '1px 1px 3px rgba(0,0,0,0.7)', maxWidth: '400px', mt:1}}>
              Building scalable, performant, and accessible solutions and architecture
            </Typography>


            <Button component={Link} to="/resume" color="primary"
            variant="outlined" sx={{margin: '0rem auto', mt:0, width: '40%', textAlign: 'center'
            }}>
              View my Resume
            </Button>
            <Button component={Link} to="/projects"
            variant="outlined" sx={{margin: '0rem auto', mt:1, width: '40%', textAlign: 'center'
            }}>
              Portfolio
            </Button>
            <Button href="mailto:adam.carle.oliver@gmail.com"
            rel="noopener noreferrer" // Recommended for security
            target="_blank"
            variant="outlined" sx={{margin: '.5rem auto', width: '40%', textAlign: 'center', display: 'inline-block'
            }}>
              Contact Me
            </Button>
          <Box sx={{ width:'100%', color: 'black', backgroundColor: 'white', borderRadius: 2, mt: 2}}>
            <Grid container sx={{ m:0,p:2 }}>
                      <Grid size={{xs: 12, sm:12, md:6, lg:6}} sx={{m:0,p:0, 'max-width':'90%', 'margin':'0 auto'}}>
                        <ListItem sx={{m:0,p:0, 'max-width':'90%'}}>
                          <ListItemIcon sx={{ alignSelf: "flex-start",mt:.5,minWidth: 32, alignContent: "top", color:'black'}}><Star  /></ListItemIcon>
                          <ListItemText primary="Expertise: React, Angular, Node.js, AWS" />
                        </ListItem>
                      </Grid>
                      <Grid size={{xs: 12, sm:12, md:6, lg:6}} sx={{m:0,p:0, 'max-width':'90%', 'margin':'0 auto'}}>
                        <ListItem sx={{m:0,p:0}}>
                          <ListItemIcon sx={{ alignSelf: "flex-start",mt:.5,minWidth: 32, alignContent: "top", color:'black' }}><Star  /></ListItemIcon>
                          <ListItemText primary="Proven and experienced full-stack engineer." />
                        </ListItem>
                      </Grid>
                      <Grid size={{xs: 12, sm:12, md:6, lg:6}} sx={{m:0,p:0, 'max-width':'90%', 'margin':'0 auto'}}>
                        <ListItem sx={{m:0,p:0}}>
                          <ListItemIcon sx={{ alignSelf: "flex-start",mt:.5,minWidth: 32, alignContent: "top", color:'black' }}><Star  /></ListItemIcon>
                          <ListItemText primary="Adept at leading technical teams." />
                        </ListItem>
                      </Grid>
                      <Grid size={{xs: 12, sm:12, md:6, lg:6}} sx={{m:0,p:0, 'max-width':'90%', 'margin':'0 auto'}}>
                        <ListItem sx={{m:0,p:0}}>
                          <ListItemIcon sx={{ alignSelf: "flex-start",mt:.5,minWidth: 32, alignContent: "top", color:'black' }}><Star  /></ListItemIcon>
                          <ListItemText primary="Architectural excellence." />
                        </ListItem>
                      </Grid>
                      <Grid size={{xs: 12, sm:12, md:6, lg:6}} sx={{m:0,p:0, 'max-width':'90%', 'margin':'0 auto'}}>
                        <ListItem sx={{m:0,p:0}}>
                          <ListItemIcon sx={{ alignSelf: "flex-start",mt:.5,minWidth: 32, alignContent: "top", color:'black' }}><Star  /></ListItemIcon>
                          <ListItemText primary="Delivering high quality code for 20+ years." />
                        </ListItem>

                      </Grid>
                      <Grid size={{xs: 12, sm:6, md:6, lg:6}} sx={{m:0,p:0, 'max-width':'90%', 'margin':'0 auto'}}>


                      </Grid>

                  {/* More paragraphs here */}
            </Grid>
          </Box>  
                         <Grid container alignItems="justify" size={12}>
                      {Object.entries(skills).map(([category, skills], i) => (
                        <Grid size={{sm:4, xs:4, md:3, lg:2}} sx={{ textAlign: 'left', justifyContent: 'left'}} key={i}>
                          <CardHeader key={category} title={category} sx={{
                            mt:1, mb:0, 'max-width':'90%',p:1, justifyContent: 'left', 'margin':'0 auto', backgroundColor: 'transparent', 'color':'white'
                          }}/>
                          <Stack direction="column" flexWrap="wrap" spacing={0} sx={{justifyContent: 'left'}}>
                          {skills.map((skill) => (
                              <Chip key={skill} label={skill} variant="outlined" sx={{ background:'none', border: '2px solid white outline', color: 'white', m:1}} />
                            ))}
                          </Stack>
                        </Grid>
                        ))
                    }
              </Grid>
 
          </Box>
        </Grid>
      </Grid>
    )
  
  }


export default HomePage;