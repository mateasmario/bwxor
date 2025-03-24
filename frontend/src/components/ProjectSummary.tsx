import {Link} from "react-router-dom";

interface ProjectSummaryProps {
    displayName : string | undefined;
    projectName : string | undefined;
    description: string | undefined;
}

function ProjectSummary(props : ProjectSummaryProps) {
    // const [activeItem, setActiveItem] = useState("description");
    //
    // useEffect(() => {
    //     fetch(props.repo + "/contents/README.md", {
    //         headers: {
    //             Accept: "application/vnd.github.raw+json",
    //         },
    //     })
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error("Failed to fetch README");
    //             }
    //             return response.text();
    //         })
    //         .then((data) => setDescription(data))
    //         .catch((err) => console.log(err.message));
    // }, []);

    return (
        <div id={props.displayName} className="project-summary">
            <div className="project-summary-title">
                <Link to={"/projects/" + props.projectName}><h1>{props.displayName ? props.displayName : "No project"}</h1></Link>
            </div>
            <div className="project-summary-description">
                <h2>{props.description}</h2>
            </div>
        </div>
    );
}

export default ProjectSummary;