import { Link } from "react-router-dom";
import {useTheme} from "../../context/ThemeContext.tsx";

function Register() {
    const {theme} = useTheme();

    return (
        <>
            <div className="center">
                <form className="form">
                    <div className="form-item">
                        <h1>Create an account</h1>
                        <p>Already have an account? <Link to="/signin">Sign in</Link>.</p>
                    </div>
                    <div className="form-input-group">
                        <label className="form-input-label">E-Mail Address</label>
                        <input type="email" placeholder="johndoe@bwxor.com"
                               className={"form-input-area textbox textbox-" + theme}></input>
                    </div>
                    <div className="form-input-group">
                        <label className="form-input-label">Display Name</label>
                        <input type="text" placeholder="John Doe"
                               className={"form-input-area textbox textbox-" + theme}></input>
                    </div>
                    <div className="form-input-group">
                        <label className="form-input-label">Password</label>
                        <input type="password" placeholder="PickASecurePassword"
                               className={"form-input-area textbox textbox-" + theme}></input>
                        <div className="form-tip">
                            Your password should consist of:
                            <ul>
                                <li>minimum 16 characters;</li>
                                <li>at least one lowercase letter;</li>
                                <li>at least one uppercase letter;</li>
                                <li>at least one digit;</li>
                                <li>at least a character from the list: <a href="#">!?@#$%^&*</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="form-input-group">
                        <label className="form-input-label">Confirm Password</label>
                        <input type="password" placeholder="PickASecurePassword"
                               className={"form-input-area textbox textbox-" + theme}></input>
                    </div>
                    <div className="form-input-group">
                        <button className={"button button-" + theme}><span className="fa-solid fa-user-plus"></span>Register</button>
                        <button className={"button button-" + theme}><span className="fa-solid fa-life-ring"></span>Contact support</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;