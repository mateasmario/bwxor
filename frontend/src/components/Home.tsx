import Markdown from "react-markdown";
import {useEffect, useState} from "react";

function Home() {
    const [markdown, setMarkdown] = useState("Cannot find any content to display.");

    useEffect(() => {
       fetch("./src/content/home.md")
           .then((response) => response.text())
           .then((text) => setMarkdown(text))
           .catch((error) => console.error(error));
    }, []);

    const result = <Markdown>{markdown}</Markdown>;

    return (
        <>
            {result}
        </>
    );
}

export default Home;