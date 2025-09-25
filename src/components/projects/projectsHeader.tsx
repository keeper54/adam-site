import { IProject } from "../../types/projectTypes";
import Card from '@mui/material/Card';
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Project from "./project";
import { useState } from "react";
interface ProjectHeaderProps {
    projects: IProject[];
}
const ProjectsHeader = (props: ProjectHeaderProps) => {

    const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
    const handleCardClick = (project: IProject) => {
        setSelectedProject(project);
    }


    return (
        <Box sx={{ width: '100%' }}>

        <Grid container spacing={1} >
                    {props.projects.map((project, i) => (
                        <Grid size={{ xs:12, sm: 6, md:6, lg: 4}} sx={{ p:1}} key={project.githubUrl + i}>
                            <Card key={project.shortName}>
                                <Grid container spacing={1}>
                                    <Grid size={{ xs:4, sm: 6, md:6, lg: 6}}>
                                        <CardMedia onClick={() => handleCardClick(project)} component="img" image={project.image} alt={project.shortName} sx={{ maxWidth: '100%', height: 'auto' }} />
                                    </Grid>
                                    <Grid size={{ xs:8, sm: 6, md:6, lg: 6}}>
                                        <Typography variant="h6" onClick={() => handleCardClick(project)}>{project.shortName}</Typography>
                                        <Typography variant="body1" onClick={() => handleCardClick(project)}>
                                            {project.summary.length > 100 
                                                ? `${project.summary.substring(0, 100)}...` 
                                                : project.summary}
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Card>
                        </Grid>
                    ))}
        </Grid>
        {selectedProject && <Project project={selectedProject} />}
        </Box>
    )
}

export default ProjectsHeader;