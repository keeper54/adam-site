import { Divider, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import projectsData from '../assets/data/projects.json';
import ProjectCarousel from '../components/projects/projectCarousel';
import Project from '../components/projects/project';
import ProjectList from '../components/projects/projectList';
const ProjectsPage = () => {
    //const projects = projectsData.projects ?? null;
const { shortName } = useParams<{ shortName?: string }>() ?? null;
console.log('shortName from params:', shortName);
        return (
            <Grid container spacing={0}>dd
                <Grid size={12} sx={{textAlign: 'center',background:'transparent'}}>
                    
                {
                    shortName ? (
                        <>
                        <Project project={projectsData.projects.find(proj => proj.shortName === shortName) ?? null} />
                        </>
                    ) : (
                        <>
                        <Typography variant="h2" sx={{ textAlign: 'center', p: 2, color: 'white',textShadow: '2px 2px 4px rgba(256, 256, 256, 0.7)'  }}>Portfolio and Projects</Typography>
                        <ProjectCarousel />
                        <Divider sx={{'width':'90%', backgroundColor: 'white', 'margin':'0px auto'}}/>
                        <ProjectList projectList={projectsData.projects} />
                        </>
                    )
                }
                    {/* <ProjectList projectList={projects} /> */}
                </Grid>
            </Grid>
            

        )

} 

export default ProjectsPage;    