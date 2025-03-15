import {Link, Outlet} from "react-router-dom";

function Menu() {
    return (
        <>
            <nav className="menu">
                <Link to="/">
                    <div className="menu-branding">Mario Mateaș</div>
                </Link>
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
            </nav>

            <div className="body-content">
                <Outlet/>
            </div>
        </>
    );
}

export default Menu;