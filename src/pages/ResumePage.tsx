import { useState } from 'react';
import resumesData from '../assets/resumes.json';
import type { Resume, PersonalInfo } from '../types/resumeTypes';
import ResumePageContent from '../components/resume/resumePageContent';
import ResumeHeader from '../components/resume/resumeHeader';
import { Typography } from '@mui/material';


const ResumePage = () =>{ 
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(resumesData.personal_info as PersonalInfo);
    const resumes = resumesData.resumes as Resume[];
    const [resumeToView, setResumeToView] = useState<Resume | null>(null);
    console.log('resume title', resumeToView?.title);
    return(
    <>
    <Typography variant="h1">Resume</Typography>
    <ResumeHeader resumes={resumes} setResumeToView={setResumeToView} personalInfo={personalInfo} />
    {resumeToView && <ResumePageContent resume={resumeToView} personalInfo={personalInfo} />}
    </>
)}
 
export default ResumePage;