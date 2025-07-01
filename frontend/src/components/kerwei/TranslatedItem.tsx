function TranslatedItem(props: {status? : string, title? : string, romanian : string, german: string}) {
    return (
        <div className="translated-item-group">
            <div className="translated-item-title">{props.status} {props.title}</div>
            <div className="translated-item-romanian">{props.romanian}</div>
            <div className="translated-item-german">{props.german}</div>
        </div>
    );
}

export default TranslatedItem;