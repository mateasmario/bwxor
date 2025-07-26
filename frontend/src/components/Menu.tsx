import {Link, Outlet} from "react-router-dom";
import {useTheme} from "../context/ThemeContext.tsx";
import {useState} from "react";

interface PopupMenuProps {
    theme: string
}

function PopupMenu(props: PopupMenuProps) {
    const theme = props["theme"];

    return (
        <div className={"menu-items-small menu-items-small-" + theme}>
            <Link to="/" style={{color: 'inherit'}} className={"menu-item-small-" + theme}>
                Home
            </Link>
            <Link to="/projects" style={{color: 'inherit'}} className={"menu-item-small-" + theme}>
                Projects
            </Link>
            <Link to="/docu" style={{color: 'inherit'}} className={"menu-item-small-" + theme}>
                Documentation
            </Link>
            <Link to="/signin" style={{color: 'inherit'}} className={"menu-item-small-" + theme}>
                Sign in
            </Link>
        </div>
    );
}


function Menu() {
    const [popupMenu, setPopupMenu] = useState(false);
    const {theme, toggleTheme} = useTheme();

    function burgerClickHandler() {
        setPopupMenu(!popupMenu);
    }

    return (
        <>
            <div className={"body-padded body-padded-" + theme}>
                <nav className={"menu menu-" + theme}>
                    <div className="menu-branding">
                        <Link to="/">
                            <span className={"menu-branding-text-" + theme}>bwxor</span>
                        </Link>
                    </div>
                    <div className="menu-small-buttons">
                        <button className="menu-item-burger" onClick={toggleTheme}>
                            <span
                                className={"fa-solid fa-" + (theme == "light" ? "moon" : "sun") + " menu-item-burger-" + theme}></span>
                        </button>
                        <button className="menu-item-burger" onClick={() => burgerClickHandler()}>
                            <span className={"fa-solid fa-bars menu-item-burger-" + theme}></span>
                        </button>
                    </div>
                    <div className="menu-items">

                        <div className="menu-items-main">
                            <Link to="/">
                                <span className={"menu-item menu-item-" + theme}>Home</span>
                            </Link>
                            <Link to="/projects">
                                <span className={"menu-item menu-item-" + theme}>Projects</span>
                            </Link>
                            <Link to="/docu">
                                <span className={"menu-item menu-item-" + theme}>Documentation</span>
                            </Link>
                            <Link to="/signin">
                                <span className={"menu-item menu-item-" + theme}>Sign in</span>
                            </Link>
                        </div>
                        <div className="menu-items-secondary">
                            <div className={"menu-item menu-item-" + theme} onClick={toggleTheme}>
                                <span
                                    className={"fa-solid fa-" + (theme == "light" ? "moon" : "sun") + " menu-item-burger-" + theme}></span>
                            </div>
                        </div>
                    </div>
                </nav>
                {
                    popupMenu ? <PopupMenu theme={theme}/> : null
                }

                <main className={"body-content body-content-" + theme}>
                    <Outlet/>
                </main>
            </div>
        </>
    );
}

export default Menu;