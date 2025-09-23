/**
 * Represents the personal information section of a resume.
 */
interface PersonalInfo {
    name: string;
    address: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  }
  
  /**
   * Represents a single work experience entry in a resume.
   */
  interface Experience {
    title: string;
    company: string;
    location: string;
    start_date: string;
    end_date: string;
    responsibilities: string[];
  }
  
  /**
   * Represents the skills section, categorized by type.
   */
  interface Skills {
    languages: string[];
    frameworks: string[];
    cloud_devops: string[];
    databases: string[];
    development_practices: string[];
    tools_platforms: string[];
  }
  
  /**
   * Represents a single education entry in a resume.
   */
  interface Education {
    institution: string;
    location: string;
    start_date: string;
    end_date: string;
    gpa: string;
    notes: string;
  }
  
  /**
   * The main interface for the entire resume JSON structure.
   */
  interface Resume {
    personal_info: PersonalInfo;
    title: string;
    summary: string;
    experience: Experience[];
    skills: Skills;
    education: Education[];
  }
export type { Resume, PersonalInfo, Experience, Skills, Education };