import "../../../css/SignUpForm.css"
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "@radix-ui/themes";
import PasswordToggleFieldInput from "../../shared/PasswordField";

function SignUpForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: ""
    });
    const [loading, setLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState({
        password: "",
        confirmPassword: ""     // ✅ thêm confirmPassword
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch('https://localhost:7087/api/Email/verification-email', {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Email is already existed")
                return res.json()
            })
            .then(() => {
                console.log(formData);
                localStorage.setItem("email", formData.email);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    phone: ""
                })
                return navigate("/verification");
            })
            .catch((err) => {
                alert("Email is already existed");
                console.error(formData);
                console.error(err);
            })

        if (error.password || error.confirmPassword) {
            alert("Please fix form errors before submitting.");
            return;
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === "password") {
            const hasSpecialChar = /[!@#$%^&*]/.test(value);
            const isValidLength = value.length >= 8;

            if (!hasSpecialChar || !isValidLength) {
                setError((prev) => ({
                    ...prev,
                    password: "Password must include special character and be at least 8 characters."
                }));
            } else {
                setError((prev) => ({ ...prev, password: "" }));
            }
        }
    };
    const confirmPassHandleChange = (e) => {
        const { name, value } = e.target;

        if (name === "confirmPassword") {
            setConfirmPassword(value);

            if (value !== formData.password) {
                setError((prev) => ({
                    ...prev,
                    confirmPassword: "Confirm password must match."
                }));
            } else {
                setError((prev) => ({ ...prev, confirmPassword: "" }));
            }

            return;
        }
    };


    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-content">
                <div className="form-title">Sign Up</div>
                <div className="form-subtitle">Create account for management system</div>
            </div>
            <div className="form-group">
                <div className="form-group-input">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" name="email" onChange={handleChange} required />
                </div>
                <div className="form-group-input-name">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter your first name" name="firstName" onChange={handleChange} required />
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter your last name" name="lastName" onChange={handleChange} required />
                </div>
                <div className="form-group-input">
                    <label>Phone number</label>
                    <input type="tel" placeholder="Enter your number" name="phone" onChange={handleChange} required />
                </div>
                <div className="form-group-input">
                    <label>Password</label>
                    <PasswordToggleFieldInput value={formData.password} name={"password"} onChange={handleChange} />
                    {error.password && (
                        <div className="error-message" style={{ color: "#9f270fff", fontSize: "0.9em", fontWeight: "500" }}>
                            {error.password}
                        </div>
                    )}
                </div>
                <div className="form-group-input">
                    <label>Confirm Password</label>
                    <PasswordToggleFieldInput value={confirmPassword} name={"confirmPassword"} onChange={confirmPassHandleChange} />
                    {error.confirmPassword && (
                        <div className="error-message" style={{ color: "#9f270fff", fontSize: "0.9em", fontWeight: "500" }}>
                            {error.confirmPassword}
                        </div>
                    )}
                </div>
            </div>

            <button className="btn-login" type="submit">
                {loading && <Spinner size="2" />} Sign up
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