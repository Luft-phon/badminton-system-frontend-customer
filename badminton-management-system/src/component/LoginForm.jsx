import "../css/LoginForm.css"
import PasswordToggleFieldInput from "../component/PasswordField";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <form className="form">
            <div className="form-content">
                <div className="form-title">Login</div>
                <div className="form-subtitle">Access to management system</div>
                <div className="login-info"><strong>Email: thanhphongchupanh@gmail.com, Password: Abc@123</strong></div>
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
                <label>Password</label>
                <PasswordToggleFieldInput />
                <Link to='/' className="forgot-pass">Forgot Password</Link>
            </div>
            <button className="btn-login" type="submit">
                Login
            </button>
            <button className="btn-loginGoogle" type="submit">
                <FaGoogle /> Sign in with Google
            </button>
            <div className="form-footer">
                <p className="sign-up">Don't have an account? <Link to='/register'>Sign up</Link></p>
                <div className="copy-right">© Badminton court service linked system</div>
            </div>
        </form>
    )
}
export default LoginForm