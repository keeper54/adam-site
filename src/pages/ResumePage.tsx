import { useState } from 'react';
import resumesData from '../assets/data/resumes.json';
import type { Resume, PersonalInfo } from '../types/resumeTypes';
import { Grid, Typography } from '@mui/material';


const ResumePage = () =>{ 
    const [personalInfo] = useState<PersonalInfo | null>(resumesData.personal_info as PersonalInfo);
    const resumes = resumesData.resumes as Resume[];

    return(
    <>

      <Grid container spacing={0} size={12}     
      sx={{
        p: 4,
        mt: 2,
        mb:2,
        ml: 'auto',
        mr: 'auto',
        textAlign: 'center',
        bgcolor: 'primary.light',
        color: 'primary.contrastText',
        border: '1px solid #ccc',
        backgroundColor: 'white',
        'max-width': '900px',
        
      }}>
        <Grid size={{xs:12, md:12, lg:10}}
        sx={{
          textAlign: 'left',
          pb:1
        }}>
          <Typography variant="h1">{personalInfo?.name}</Typography>
        </Grid>
        <Grid size={{xs:12, md:6, lg:4}}sx={{
          textAlign: 'left',
          pb:1
        }}>
          <a href={personalInfo?.linkedin} className="resumeLink" target="_blank" rel="noopener noreferrer">{personalInfo?.linkedin}</a>
        </Grid>
        <Grid size={{xs:12, md:6, lg:4}}sx={{
          textAlign: 'left',
          pb:1
        }}>
          <a href={personalInfo?.github} className="resumeLink" target="_blank" rel="noopener noreferrer">{personalInfo?.github}</a>
        </Grid>
        <Grid size={{xs:12, md:6, lg:4}}sx={{
          textAlign: 'left',
          pb:1
        }}>
          <a className="resumeLink" href={`mailto:${personalInfo?.email}`}>{personalInfo?.email}</a>
        </Grid>

        <Grid size={{xs:12, md:12, lg:12}}sx={{
          textAlign: 'left',
          pt:2
        }}>
          <Typography variant="h1">Summary</Typography>
        </Grid>
        <Grid size={{xs:12, md:12, lg:12}}sx={{
          textAlign: 'left',
          pt:2,
        }}>
          <Typography variant="body1">{resumes[0].summary}</Typography>
        </Grid>
        <Grid size={{xs:12, md:12, lg:12}}sx={{
          textAlign: 'left',
          pt:2
        }}>
          <Typography variant="h1">Experience</Typography>
        </Grid>
          {resumes[0].experience.map((experience) => (
            <>
            <Grid size={{xs:12, md:6, lg:6}}sx={{
          textAlign: 'left',
          mt:1,
          pt: 2,
          pb: 1,
          pl: 1,
        }}>
              <Typography variant="body1"><strong>{experience.title} - {experience.company}</strong></Typography>
            </Grid>
            <Grid size={{xs:12, md:6, lg:6}}sx={{
          textAlign: 'left',
          pt: 2,
          mt: 1,
        }}>
              <Typography variant="body1"><strong>{experience.location}  | {experience.start_date} - {experience.end_date}</strong></Typography>
            </Grid>

              {experience.responsibilities.map((responsibility) => (
                <Grid size={{xs:12, md:12, lg:12}} key={responsibility} sx={{
                  textAlign: 'left',
                  ml:5
                }}>
                  <li>{responsibility}</li>
                </Grid>
              ))}
            </>
          ))}
            
            <Grid size={{xs:12, md:12, lg:12}}sx={{
          textAlign: 'left',
          pt: 2
        }}>
              <Typography variant="h1">Education</Typography>
            </Grid>
            
            <Grid size={{xs:12, md:12, lg:12}}sx={{
          textAlign: 'left',
          pt: 2,
        }}>
              <Typography variant="h5">{resumes[0].education[0].institution}</Typography>
              <Typography variant="body1">{resumes[0].education[0].location}</Typography>
              <Typography variant="body1">{resumes[0].education[0].start_date} - {resumes[0].education[0].end_date}</Typography>
              <Typography variant="body1">{resumes[0].education[0].gpa}</Typography>
              <Typography variant="body1">{resumes[0].education[0].notes}</Typography>
            </Grid>
      </Grid>

    </>
)}
 
export default ResumePage;