import {Link, Outlet} from "react-router-dom";
import burger from "../assets/img/menu.png"
import {useState} from "react";

function PopupMenu() {
    return (
        <div className="menu-layer-small">
            <div className="menu-items-small">
                <Link to="/">
                    <div className="menu-item-small">Home</div>
                </Link>
                <Link to="/projects">
                    <div className="menu-item-small">Projects</div>
                </Link>
                <Link to="/docu">
                    <div className="menu-item-small">Documentation</div>
                </Link>
            </div>
        </div>
    );
}


function Menu() {
    const [popupMenu, setPopupMenu] = useState(false);

    function burgerClickHandler() {
        console.log(popupMenu);
        setPopupMenu(!popupMenu);
    }

    return (
        <>
            <nav className="menu">
                <div className="menu-layer">
                    <Link to="/" className="menu-header">
                        <div className="menu-branding">Mario Mateaș</div>
                    </Link>
                    <div className="menu-item-burger">
                        <img src={burger} alt="" onClick={() => burgerClickHandler()}/>
                    </div>
                    <div className="menu-items">
                        <Link to="/">
                            <div className="menu-item">Home</div>
                        </Link>
                        <Link to="/projects">
                            <div className="menu-item">Projects</div>
                        </Link>
                        <Link to="/docu">
                            <div className="menu-item">Documentation</div>
                        </Link>
                    </div>
                </div>
                {
                    popupMenu ? <PopupMenu/> : null
                }
            </nav>

            <div className="body-content">
                <Outlet/>
            </div>
        </>
    );
}

export default Menu;