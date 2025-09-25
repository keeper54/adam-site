import { Button, Chip, Grid, Typography } from "@mui/material";
import { IProject } from "../../types/projectTypes";

interface ProjectProps {
    project: IProject | null;
}
/*
const noProjectSelected = () => {
    return (
        <div>
            <h1>No project selected</h1>
        </div>
    )
}*/
const Project = (props: ProjectProps) => {
    return (
            <Grid container spacing={1} size={12} sx={{ p:2, textAlign: 'left', color: 'white' }}>
                <Grid size={{ xs:12, sm: 12, md: 12, lg: 12 }}>
                    <Typography variant="h5">{props.project?.shortName}</Typography>
                </Grid>
                <Grid size={{ xs:12, sm: 12, md: 12, lg: 4 }}>
                   <img src={props.project?.image} alt={props.project?.shortName} className="project-detail-image"/>
                </Grid>
                <Grid size={{ xs:12, sm: 12, md: 12, lg: 8 }}>
                    <Typography variant="h5">{props.project?.longName}</Typography>
                    {props.project?.techStack.map((tech) => (
                        <Chip key={tech} label={tech} variant="outlined" sx={{ borderColor: 'gray', color: 'white', p: 1, m:1}} />
                    ))}
                    <hr/>
                    {props.project?.githubUrl !== null && (
                        <Button variant="contained" color="primary" className="project-detail-btn" onClick={() => window.open(props.project?.githubUrl, '_blank')}
                            sx={{ m:2 }}
                        >
                            View on GitHub
                        </Button>
                    )}
                    {props.project?.url !== null && (
                        <Button variant="contained" color="primary" 
                            className="project-detail-btn" 
                            onClick={() => window.open(props.project?.url ?? '', '_blank')}
                            sx={{ m:2 }}
                            >
                            Hosted at {props.project?.url}
                        </Button>
                    )}
                </Grid>
            <Grid size={{ xs:12, sm: 12, md: 12, lg: 12 }} textAlign={'left'}>
                <Typography variant="body1">{props.project?.summary}</Typography>
            </Grid>
        </Grid>
    )
}

export default Project;