import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "../../context/ThemeContext.tsx";
import { Components } from "react-markdown";

interface ItemViewProps {
    category: string | undefined;
}

function ItemView(props: ItemViewProps) {
    const { slug } = useParams();
    const [markdown, setMarkdown] = useState("Loading...");
    const { theme } = useTheme();

    useEffect(() => {
        fetch(`https://bwxor.com/api/pages/${props.category}/${slug}`)
            .then((response) => response.json())
            .then((data) => setMarkdown(data[0].content))
            .catch(() => setMarkdown("ItemView with specified name not found."));
    }, [props.category, slug]);

    const components: Components = {
        code({ inline, className, children, ...props } : {
            inline?: boolean;
            className?: string;
            children?:React.ReactNode;
        }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
                <SyntaxHighlighter
                    style={theme === "light" ? vs : vscDarkPlus}
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
    };

    return (
        <ReactMarkdown components={components}>
            {markdown}
        </ReactMarkdown>
    );
}

export default ItemView;
