import {useEffect, useState} from "react";
import ProjectSummary from "./ProjectSummary.tsx";

interface ProjectInfoData {
    displayName : string | undefined;
    projectName : string | undefined;
    description: string | undefined;
}

function ProjectList() {
    const [projects, setProjects] = useState<ProjectInfoData[]>([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/mateasmario/bwxor/refs/heads/master/static/projects.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setProjects(data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
      <div className="projects">
          {projects.map((project : ProjectInfoData) => <ProjectSummary key={project.projectName} {... project} />)}
      </div>
    );
}

export default ProjectList;