import {Link} from "react-router-dom";

interface ProjectSummaryProps {
    displayName : string | undefined;
    projectName : string | undefined;
    description: string | undefined;
}

function ProjectSummary(props : ProjectSummaryProps) {
    return (
        <div id={props.projectName} className="project-summary">
            <div className="project-summary-title">
                <Link to={"/projects/" + props.projectName}>{props.displayName ? props.displayName : "No project"}</Link>
            </div>
            <div className="project-summary-description">
                {props.description}
            </div>
        </div>
    );
}

export default ProjectSummary;