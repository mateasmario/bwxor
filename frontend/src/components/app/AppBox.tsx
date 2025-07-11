interface AppInfoProps {
    title: string | undefined;
    description: string | undefined;
    url: string | undefined;
    category: string | undefined;
}

function AppBox(props: AppInfoProps) {
    return (
        <>
            <a href={props.url}>
                <div className="app-button">
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