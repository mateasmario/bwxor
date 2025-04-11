import {Link} from "react-router-dom";

interface ItemSummaryProps {
    category: string | undefined;
    slug : string | undefined;
    display : string | undefined;
    description: string | undefined;
}

function ItemSummary(props : ItemSummaryProps) {
    return (
        <article id={props.slug} className="item-summary">
            <div className="item-summary-title">
                <Link to={"/" + props.category + "/" + props.slug}>{props.display ? props.display : "No item"}</Link>
            </div>
            <div className="item-summary-description">
                {props.description}
            </div>
        </article>
    );
}

export default ItemSummary;