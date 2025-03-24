import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Markdown from "react-markdown";

function Project() {
    const { projectName } = useParams();
    const [markdown, setMarkdown] = useState("Loading...");

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/mateasmario/bwxor/refs/heads/master/static/projects/" + projectName + ".md")
            .then((response) => response.text())
            .then(
                (data) => setMarkdown(data)
            )
            .catch(() => setMarkdown("Project with specified name not found."));
    }, []);

    return (
        <>
            <Markdown>{markdown}</Markdown>
        </>
    )
}

export default Project;