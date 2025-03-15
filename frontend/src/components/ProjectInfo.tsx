import {useState} from "react";

interface ProjectInfoProps {
    projectId: string,
    projectName: string,
    description: string,
    contributors: string,
    releaseLog: string[],
}

function ProjectInfo(props : ProjectInfoProps) {
    const [activeItem, setActiveItem] = useState("description");

    return (
        <div id={props.projectId}>
            <h1>{props.projectName ? props.projectName : "No project"}</h1>
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
                    <a href="#">
                        <div className={activeItem === "release-log" ? "project-info-item active" : "project-info-item"}
                             onClick={() => setActiveItem("release-log")}>Release log
                        </div>
                    </a>
                </nav>
                <div className="project-info-content">
                    {activeItem === "description" ? props.description ? props.description : "No description defined" :
                        activeItem === "contributors" ? props.contributors ? props.contributors : "No contributors defined" :
                            activeItem === "release-log" ? props.releaseLog ? props.releaseLog : "No release log defined":
                                null }
                </div>
            </div>
        </div>
    );
}

export default ProjectInfo;