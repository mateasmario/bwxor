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
        fetch("https://raw.githubusercontent.com/mateasmario/bwxor/refs/heads/master/static/" + props.category + "/" + slug + ".md")
            .then((response) => response.text())
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