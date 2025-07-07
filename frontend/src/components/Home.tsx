import Markdown from "react-markdown";
import {useEffect, useState} from "react";

function Home() {
    const [markdown, setMarkdown] = useState("Loading...");

    useEffect(() => {
       fetch("https://bwxor.com/api/pages/index")
           .then((response) => response.json())
           .then((data) => data.content)
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
