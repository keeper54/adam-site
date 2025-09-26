import React from "react";
import { IProject } from "../../types/projectTypes";
import { Button, Chip, Divider, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

interface ProjectListProps {
    projectList?: IProject[];
}

const ProjectList: React.FC<ProjectListProps> = (props: ProjectListProps) => {
    if (!props.projectList || props.projectList.length === 0) {
        return <div>No projects available.</div>;
    }

    return (
        <div className="project-list">
            {props.projectList.map((project) => (
        <>
            <Grid container spacing={1} size={12} sx={{ p:2, textAlign: 'left', color: 'white' }}>
                <Grid size={{ xs:12, sm: 12, md: 12, lg: 12 }}>
                    <Typography variant="h5" sx={{textShadow: '2px 2px 4px rgba(256, 256, 256, 0.7)' }}>{project?.shortName}</Typography>
                </Grid>
                <Grid size={{ xs:12, sm: 12, md: 12, lg: 4 }}>
                   <img src={project?.image} alt={project?.shortName} className="project-detail-image"/>
                </Grid>
                <Grid size={{ xs:12, sm: 12, md: 12, lg: 8 }}>
                    <Typography variant="h5">{project?.longName}</Typography>
                    <div>
                    {project?.techStack.map((tech) => (
                        <Chip key={tech} label={tech} variant="outlined" sx={{ borderColor: 'gray', color: 'white', p: 1, m:1}} />
                    ))}
                    </div>
                    {project?.githubUrl !== "" && (
                        <Button variant="contained" color="primary" className="project-detail-btn" onClick={() => window.open(project?.githubUrl, '_blank')}
                            sx={{ m:2 }}
                        >
                            View on GitHub
                        </Button>
                    )}
                    {project?.url !== "" && (
                        <Button variant="contained" color="primary" 
                            className="project-detail-btn" 
                            onClick={() => window.open(project?.url ?? '', '_blank')}
                            sx={{ m:2}}
                            >
                            Hosted at {project?.url}
                        </Button>
                    )}                          
                    <RouterLink to={`/projects/${encodeURIComponent(project.shortName)}`}>
                        <Button variant="contained" color="primary" 
                            className="project-detail-btn" 
                            sx={{ m:2}}
                            >
                            More Details
                        </Button>                                                
                    </RouterLink>

                </Grid>
                <Grid size={{ xs:12, sm: 12, md: 12, lg: 12 }} textAlign={'left'}>
                    <Typography variant="body1">{project?.summary}</Typography>
                </Grid>
            </Grid>
        <Divider sx={{'width':'100%', backgroundColor: 'white', 'margin':'10px auto'}}/>
        <Typography variant="h2" sx={{ 
                textShadow: '2px 2px 4px rgba(256, 256, 256, 0.7)' 
                }}></Typography>
        </>
))}
        </div>
    );
};

export default ProjectList;