import Box from "@mui/material/Box";
import { PersonalInfo, Resume } from "../../types/resumeTypes";
import { useState } from "react";
import ResumePageContent from "./resumePageContent";
import { Button, Card, CardContent, Typography } from "@mui/material";

const ResumeHeader = (props: { resumes: Resume[], setResumeToView: (resume: Resume) => void, personalInfo: PersonalInfo | null }) => {
    const [resumeToView] = useState<Resume | null>(null);
    return (
        <>
        <Box
        sx={{
          p: 4,
          textAlign: 'left',
          bgcolor: 'black',
          color: 'primary.contrastText',
          height: '100%',
          display: 'flex',
          maxWidth: '90%',
          margin: '0 auto',
          borderRadius: 2,
          boxShadow: 2,
          border: '1px solid black',
          backgroundColor: 'black',
          backgroundOpacity: 0.25,
          flexDirection: 'column',
        }}
        role="main"
      >
        <Box 
        sx={{ 
          color: 'primary.main',
          maxWidth: '100%',
          margin: '0 auto',
          p: 2,
          borderRadius: 2,
          boxShadow: 2,
          border: '1px solid #ccc',
          backgroundColor: '#000000',
          
           }}>
            <Card>
              <CardContent>
                <Typography variant="h6" style={{width: '100%'}}>Select a resume to view</Typography>
                {props.resumes.map((resume) => (
                  <Button style={{width: '100%', alignContent: 'left', alignItems: 'left', justifyContent: 'left'}} key={resume.title} onClick={() => props.setResumeToView(resume)}>
                    <Typography variant="h6">- {resume.title}</Typography>
                  </Button>
                ))}
              </CardContent>
            </Card>
        </Box>
        </Box>
        {resumeToView && <ResumePageContent resume={resumeToView} personalInfo={props.personalInfo} />}
  </>
    )
}

export default ResumeHeader;