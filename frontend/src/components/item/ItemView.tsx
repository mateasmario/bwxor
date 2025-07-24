import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {useTheme} from "../../context/ThemeContext.tsx";

interface ItemViewProps {
    category : string | undefined;
}

function ItemView(props : ItemViewProps) {
    const {slug} = useParams();
    const [markdown, setMarkdown] = useState("Loading...");
    const {theme} = useTheme();

    useEffect(() => {
        fetch("https://bwxor.com/api/pages/" + props.category + "/" + slug)
            .then((response) => response.json())
            .then((data) => data[0].content)
            .then(
                (data) => setMarkdown(data)
            )
            .catch(() => setMarkdown("ItemView with specified name not found."));
    }, []);

    return (
        <>
            <ReactMarkdown
                children={markdown}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={theme == "light" ? vs : vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            />
        </>
    )
}

export default ItemView;
