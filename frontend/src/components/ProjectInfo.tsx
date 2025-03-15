import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Markdown from "react-markdown";

interface ProjectInfoProps {
    name : string | undefined;
    repo : string | undefined;
    contributors : string[] | undefined
}

function ProjectInfo(props : ProjectInfoProps) {
    const [activeItem, setActiveItem] = useState("description");

    const [description, setDescription] = useState("");

    useEffect(() => {
        fetch(props.repo + "/contents/README.md", {
            headers: {
                Accept: "application/vnd.github.raw+json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch README");
                }
                return response.text();
            })
            .then((data) => setDescription(data))
            .catch((err) => console.log(err.message));
    }, []);

    return (
        <div id={props.name}>
            <h1>{props.name ? props.name : "No project"}</h1>
            <div className="project-info">
                <nav className="project-info-nav">
                    <a href="#">
                        <div className={activeItem === "description" ? "project-info-item active" : "project-info-item"}
                             onClick={() => setActiveItem("description")}>Description
                        </div>
                    </a>
                    <a href="#">
                        <div
                            className={activeItem === "contributors" ? "project-info-item active" : "project-info-item"}
                            onClick={() => setActiveItem("contributors")}>Contributors
                        </div>
                    </a>
                    <Link to="https://github.com/mateasmario/pie/releases">
                        <div className={activeItem === "release-log" ? "project-info-item active" : "project-info-item"}>
                            Binaries
                        </div>
                    </Link>
                </nav>
                <div className="project-info-content">
                    {activeItem === "description" ? description ? <Markdown>{description}</Markdown> : "No description defined" :
                        activeItem === "contributors" ? props.contributors ? props.contributors : "No contributors defined" :
                                null }
                </div>
            </div>
        </div>
    );
}

export default ProjectInfo;