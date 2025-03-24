import {useEffect, useState} from "react";
import ItemSummary from "./ItemSummary.tsx";

interface ItemListProps {
    category: string | undefined;
}

interface ItemInfo {
    slug: string | undefined;
    display: string | undefined;
    description: string | undefined;
}

function ItemList(props: ItemListProps) {
    const [items, setItems] = useState<ItemInfo[]>([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/mateasmario/bwxor/refs/heads/master/static/" + props.category + ".json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setItems(data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="projects">
            {items.map((item: ItemInfo) => <ItemSummary key={item.slug} category={props.category} slug={item.slug}
                                                        display={item.display} description={item.description}/>)}
        </div>
    );
}

export default ItemList;