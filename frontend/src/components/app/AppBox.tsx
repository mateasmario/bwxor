import {useTheme} from "../../context/ThemeContext.tsx";

interface AppInfoProps {
    title: string | undefined;
    description: string | undefined;
    url: string | undefined;
    category: string | undefined;
}

function AppBox(props: AppInfoProps) {
    const {theme} = useTheme();

    return (
        <>
            <a href={props.url}>
                <div className={"app-button app-button-" + theme}>
                    <div className="app-button-row app-button-title">
                        {props.title}
                    </div>
                    <div className="app-button-row">
                        <span className={"app-button-category app-button-category-" + props.category?.toLowerCase()}>
                            {props.category}
                        </span>
                    </div>
                    <div className="app-button-row">
                        {props.description}
                    </div>
                </div>
            </a>
        </>
    );
}

export default AppBox;