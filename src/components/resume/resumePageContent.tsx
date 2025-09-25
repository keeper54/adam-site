import Box from "@mui/material/Box";
import { PersonalInfo, Resume } from "../../types/resumeTypes";
import { Grid, Typography } from "@mui/material";

interface ResumePageContentProps {
    resume: Resume | null;
    personalInfo: PersonalInfo | null;
}

const ResumePageContent = (props: ResumePageContentProps) => {
    const resume = props.resume;
    return (
      <>
      <Box
      sx={{
        p: 4,
        textAlign: 'center',
        bgcolor: 'primary.light',
        color: 'primary.contrastText',
        display: 'flex',
        maxWidth: '90%',
        margin: '0 auto',
        borderRadius: 2,
        boxShadow: 2,
        border: '1px solid #ccc',
        backgroundColor: 'white',
        backgroundOpacity: 0.25,
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      role="main"
    >
      <Grid container spacing={0}>
        <Grid size={{xs:12, md:12, lg:12}}
        sx={{
          textAlign: 'left',
          pb:1
        }}>
          <Typography variant="h1">{props.personalInfo?.name}</Typography>
        </Grid>
        <Grid size={{xs:12, md:6, lg:4}}sx={{
          textAlign: 'left',
          pb:1
        }}>
          <a href={props.personalInfo?.linkedin} className="resumeLink" target="_blank" rel="noopener noreferrer">{props.personalInfo?.linkedin}</a>
        </Grid>
        <Grid size={{xs:12, md:6, lg:4}}sx={{
          textAlign: 'left',
          pb:1
        }}>
          <a href={props.personalInfo?.github} className="resumeLink" target="_blank" rel="noopener noreferrer">{props.personalInfo?.github}</a>
        </Grid>
        <Grid size={{xs:12, md:6, lg:4}}sx={{
          textAlign: 'left',
          pb:1
        }}>
          <a className="resumeLink" href={`mailto:${props.personalInfo?.email}`}>{props.personalInfo?.email}</a>
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
          <Typography variant="body1">{resume?.summary}</Typography>
        </Grid>
        <Grid size={{xs:12, md:12, lg:12}}sx={{
          textAlign: 'left',
          pt:2
        }}>
          <Typography variant="h1">Experience</Typography>
        </Grid>
          {resume?.experience.map((experience) => (
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
              <Typography variant="h5">{resume?.education[0].institution}</Typography>
              <Typography variant="body1">{resume?.education[0].location}</Typography>
              <Typography variant="body1">{resume?.education[0].start_date} - {resume?.education[0].end_date}</Typography>
              <Typography variant="body1">{resume?.education[0].gpa}</Typography>
              <Typography variant="body1">{resume?.education[0].notes}</Typography>
            </Grid>
      </Grid>
    </Box>
      </>
    );
  };
export default ResumePageContent;