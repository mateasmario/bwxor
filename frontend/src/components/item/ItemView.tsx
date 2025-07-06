import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Markdown from "react-markdown";

interface ItemViewProps {
    category : string | undefined;
}

function ItemView(props : ItemViewProps) {
    const {slug} = useParams();
    const [markdown, setMarkdown] = useState("Loading...");

    useEffect(() => {
        fetch("http://localhost:8080/pages/" + props.category + "/" + slug)
            .then((response) => response.json())
            .then((data) => data[0].content)
            .then(
                (data) => setMarkdown(data)
            )
            .catch(() => setMarkdown("ItemView with specified name not found."));
    }, []);

    return (
        <>
            <Markdown>{markdown}</Markdown>
        </>
    )
}

export default ItemView;