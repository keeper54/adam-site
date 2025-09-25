import { Grid, Typography } from '@mui/material';
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
            <Grid container spacing={0}>
                <Grid size={12} sx={{textAlign: 'center'}}>
                    
                {
                    shortName ? (
                        <>
                        <Project project={projectsData.projects.find(proj => proj.shortName === shortName) ?? null} />
                        </>
                    ) : (
                        <>
                        <Typography variant="h3" sx={{ textAlign: 'center', p: 2, color: 'white' }}>Projects</Typography>
                        <ProjectCarousel />
                        <hr />
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