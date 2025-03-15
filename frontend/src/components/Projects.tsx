import ProjectInfo from "./ProjectInfo.tsx";
import app from "../App.tsx";
import {useState} from "react";

const [projects, setProjects] = useState([]);

app.get("./content", (req, res) =>
    fs.readDirectory("/projects", (err, files) => {
        if (err) {
            console.log(err);
            return res.status(500);
        } else {
            setProjects(
                files
                    .filter((file) => file.isDirectory())
                    .map((dir) => dir.name)
            );
        }
    })
}

const projects = [
    {
        projectId: "pie",
        projectName: "Pie",
        description: "Lightweight code editor with some third-party features and a pretty design. ",
        contributors: "Mario-Mihai Mateas",
        releaseLog: []
    },
    {
        projectId: "requesthor",
        projectName: "Requesthor",
        description: "A .NET (Winforms) application that helps you send API requests using a friendly and simple interface. ",
        contributors: "Mario-Mihai Mateas",
        releaseLog: []
    },
    {
        projectId: "dehasher",
        projectName: "Dehasher",
        description: "Some pretty (inefficient) \"dehashing\" tool written in Python. Uses multiprocessing and Python's hashlib module. Currently working for MD5 and all the SHA hashing methods.",
        contributors: "Mario-Mihai Mateas",
        releaseLog: []
    }
]

function Projects() {
    return (
      <div className="projects">
          {projects.map((project) => <ProjectInfo {... project} />)}
      </div>
    );
}

export default Projects;