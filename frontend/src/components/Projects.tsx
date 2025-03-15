import ProjectInfo from "./ProjectInfo.tsx";
import {useState} from "react";

interface ProjectInfoData {
    name : string | undefined;
    repo : string | undefined;
    contributors : string[] | undefined
}

function Projects() {
    const [projects, setProjects] = useState<ProjectInfoData[]>([]);

    // Read from 'static/projects.json'
    // fetch("../../../static/projects.json")
    fetch("https://raw.githubusercontent.com/mateasmario/bwxor/master/static/projects.json")
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
          {projects.map((project : ProjectInfoData) => <ProjectInfo {... project} />)}
      </div>
    );
}

export default Projects;