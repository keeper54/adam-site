import { useState } from 'react';
import resumesData from '../assets/data/resumes.json';
import type { Resume, PersonalInfo } from '../types/resumeTypes';
import { Grid, IconButton, Typography,ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import {LinkedIn, Star} from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import EmailIcon from '@mui/icons-material/Email';

const ResumePage = () =>{ 
    const [personalInfo] = useState<PersonalInfo | null>(resumesData.personal_info as PersonalInfo);
    const resumes = resumesData.resumes as Resume[];

    return(
    <>

      <Grid container spacing={0}>
        <Grid size={12} sx={{textAlign: 'center',background:'transparent'}}>
          <Typography letterSpacing={"3px"} sx={{color:'white',textShadow: '2px 2px 4px rgba(256, 256, 256, 0.7)' }} variant="h1">{personalInfo?.name}'s Resume</Typography>
        </Grid>
        <Grid size={{sm:12, xs:12, md:12, lg:12}} sx={{ 'background-color':'transparent',display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
          <a
              href={personalInfo?.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
          >
            <IconButton sx={{ color: 'white', 'margin':'0 auto',  '&:hover': { color: 'gray',  } }}>
              <GitHubIcon fontSize="large" href="https://github.com/keeper54" target="_blank" />
            </IconButton>
          </a>
          <a
            href={personalInfo?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
           <IconButton component="a" sx={{ color: 'white', 'margin':'0 auto', '&:hover': { color: 'gray', } }}>
              <LinkedIn fontSize="large"/>
            </IconButton>
          </a>
          <a
            href="/assets/resume/AdamResume.pdf"
            target="_blank"
            download="Adam_Oliver_Resume.pdf"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
          <IconButton component="a" sx={{ color: 'white', 'margin':'0 auto',  '&:hover': { color: 'gray' } }}>
              <DownloadForOfflineIcon fontSize="large" />
            </IconButton>
          </a>           
          <a 
            href={`mailto:${personalInfo?.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton component="a" sx={{ color: 'white', 'margin':'0 auto',  '&:hover': { color: 'gray' } }}>
              <EmailIcon fontSize="large"/>
            </IconButton>
          </a>
        </Grid>


        <Grid size={{xs:12, md:12, lg:12}}sx={{
          textAlign: 'left',
          pt:2,
          pl:2,
          mb:0,
          background:'transparent'
        }}>
          <Typography sx={{color:'white'}} variant="h3">Summary</Typography>
        </Grid>
        <Grid size={{xs:12, md:12, lg:12}} sx={{
          textAlign: 'left',
              mt:1,
              p:2,
        backgroundColor: 'white'
        }}

          borderRadius={3}>
          <Typography variant="body1">{resumes[0].summary}</Typography>
        </Grid>
        <Grid size={{xs:12, md:12, lg:12}}sx={{
          textAlign: 'left',
          pt:2,
          pl:2,
          mb:0
        }}>
          <Typography sx={{color:'white'}} variant="h3">Experience</Typography>
        </Grid>
        <Grid container size={12} sx={{backgroundColor:'white', mt:1}} borderRadius={3}>
          {resumes[0].experience.map((experience) => (
            <>
            <Grid size={{xs:12, md:12, lg:12}}sx={{
              textAlign: 'left',
              mt:1,
              pt: 2,
              pl: 4,
            }}>
              <Typography variant="body1"><strong>{experience.title} - {experience.company}</strong></Typography>
              <Typography variant="body1">{experience.location}  | {experience.start_date} - {experience.end_date}</Typography>
              {experience.responsibilities.map((responsibility) => (
                        <ListItem sx={{m:0,p:0, 'max-width':'90%'}}>
                          <ListItemIcon sx={{ alignSelf: "flex-start",mt:.5,minWidth: 32, alignContent: "top", color:'black'}}><Star  /></ListItemIcon>
                          <ListItemText primary={responsibility} />
                        </ListItem>

              ))}
            </Grid>
            <Divider sx={{color:'black', width:'94%', margin:'0 auto'}}/>
            </>
          ))}
        </Grid>
            <Grid size={{xs:12, md:12, lg:12}}sx={{
          textAlign: 'left',
          pt:2,
          pl:2,
          mb:0
        }}>
              <Typography variant="h3" sx={{color:'white'}}>Education</Typography>
            </Grid>
            
        <Grid container size={12} sx={{
                    textAlign: 'left',
              mt:1,
              p:2,
              pl:4,
        backgroundColor: 'white',display: 'flex', flexDirection:'column'}} borderRadius={3}>
              <Typography variant="h4">{resumes[0].education[0].institution}</Typography>
              <Typography variant="body1">{resumes[0].education[0].location}</Typography>
              <Typography variant="body1">{resumes[0].education[0].start_date} - {resumes[0].education[0].end_date}</Typography>
              <Typography variant="body1">{resumes[0].education[0].gpa}</Typography>
              <Typography variant="body1">{resumes[0].education[0].notes}</Typography>
        </Grid>
      </Grid>

    </>
)}
 
export default ResumePage;