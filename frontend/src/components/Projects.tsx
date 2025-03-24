import {useState} from "react";
import ProjectSummary from "./ProjectSummary.tsx";

interface ProjectInfoData {
    displayName : string | undefined;
    projectName : string | undefined;
    description: string | undefined;
}

function Projects() {
    const [projects, setProjects] = useState<ProjectInfoData[]>([]);

    // Read from 'static/projects.json'
    // fetch("../../../static/projects.json")
    fetch("https://raw.githubusercontent.com/mateasmario/bwxor/refs/heads/master/static/projects.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setProjects(data);
        })
        .catch((error) => console.error(error));

    return (
      <div className="projects">
          {projects.map((project : ProjectInfoData) => <ProjectSummary {... project} />)}
      </div>
    );
}

export default Projects;