import "../css/SignUpForm.css"
import PasswordToggleFieldInput from "../component/PasswordField";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUpForm() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        if (!password || !confirmPassword) {
            alert("Please fill out both password fields");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
        } else {
            alert("Passwords match!");
        }
    };


    return (
        <form className="form">
            <div className="form-content">
                <div className="form-title">Sign Up</div>
                <div className="form-subtitle">Create account for management system</div>
            </div>
            <div className="form-group">
                <div className="form-group-input">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group-input-name">
                    <label>First name</label>
                    <input type="text" placeholder="Enter your email" required />
                    <label>Last name</label>
                    <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="form-group-input">
                    <label>Password</label>
                    <PasswordToggleFieldInput value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group-input">
                    <label>Confirm Password</label>
                    <PasswordToggleFieldInput value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
            </div>

            <button onClick={handleClick} className="btn-login" type="submit">
                Sign up
            </button>
            <button className="btn-loginGoogle" type="submit">
                <FaGoogle /> Sign up with Google
            </button>
            <div className="form-footer">
                <p className="sign-up">Already have an account? <Link to='/login'>Login</Link>
                </p>
                <div className="copy-right">© Badminton court service linked system</div>
            </div>
        </form>
    )
}
export default SignUpForm