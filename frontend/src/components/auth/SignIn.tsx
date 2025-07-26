import { Link } from "react-router-dom";
import {useTheme} from "../../context/ThemeContext.tsx";

function Register() {
    const {theme} = useTheme();

    return (
        <>
            <div className="center">
                <form className="form">
                    <div className="form-item">
                        <h1>Sign in</h1>
                        <p>Don't have an account? <Link to="/register">Create one</Link>.</p>
                    </div>
                    <div className="form-input-group">
                        <label className="form-input-label">E-Mail Address</label>
                        <input type="email" placeholder="johndoe@bwxor.com"
                               className={"form-input-area textbox textbox-" + theme}></input>
                    </div>
                    <div className="form-input-group">
                        <label className="form-input-label">Password</label>
                        <input type="password" placeholder="MyPassword"
                               className={"form-input-area textbox textbox-" + theme}></input>
                    </div>
                    <div className="form-input-group">
                        <button className={"button button-" + theme}><span className="fa-solid fa-sign-in"></span>Sign In</button>
                        <button className={"button button-" + theme}><span className="fa-solid fa-lock"></span>Forgot my password</button>
                        <button className={"button button-" + theme}><span className="fa-solid fa-life-ring"></span>Contact support</button>
                        <button className={"button button-red"}><span className="fa-solid fa-gear"></span>Login to AdminCP</button>
                    </div>
                    <div className="form-input-group">
                        <div className="form-tip">
                            <strong>Note:</strong> Signing in will grant you access to exclusive<br />bwxor content and permission to create custom articles.
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;