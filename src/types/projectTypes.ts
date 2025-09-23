export interface IProject {
    shortName: string;
    image: string;
    longName: string;
    url: string | null;
    githubUrl: string;
    summary: string;
    techStack: string[];
}