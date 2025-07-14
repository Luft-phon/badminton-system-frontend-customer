import { FaGoogle } from "react-icons/fa";
import PasswordToggleFieldInput from "../component/PasswordField";
import "../css/LoginPage.css"
import { Fade } from "react-awesome-reveal";

function Login() {
    return (
        <div className="login-container">
            <Fade direction='up' duration={1000}>
                <div className="logo">
                    <h1 className="logo-title">Badminton</h1>
                    <h2 className="logo-subtitle">Connected court booking system</h2>
                </div>
            </Fade>
            <form className="form">
                <div className="form-content">
                    <div className="form-title">Login</div>
                    <div className="form-subtitle">Access to management system</div>
                    <div className="login-info"><strong>Email: thanhphongchupanh@gmail.com, Password: Abc@123</strong></div>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <PasswordToggleFieldInput />
                </div>
                <button className="btn-login" type="submit">
                    Login
                </button>
                <button className="btn-loginGoogle" type="submit">
                    <FaGoogle /> Sign in with Google
                </button>
                <div className="form-footer">
                    <p className="sign-up">Don't have an account? <a href="">Sign up</a></p>
                    <div className="copy-right">© Badminton court service linked system</div>
                </div>
            </form>

        </div>
    )
}

export default Login