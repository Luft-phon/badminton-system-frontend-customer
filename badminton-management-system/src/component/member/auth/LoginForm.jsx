import "../../../css/LoginForm.css"
import PasswordToggleFieldInput from "../../shared/PasswordField";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@radix-ui/themes";
function LoginForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://localhost:7087/api/Auth/login-user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then(async (res) => {
                if (!res.ok) {
                    const errorText = await res.text(); // log nếu cần
                    throw new Error("Incorrect email or password");
                }

                return res.json();
            })
            .then((data) => {
                const accessToken = data.data?.accessToken;
                const refreshToken = data.data?.refreshToken;
                if (!accessToken) {
                    throw new Error("Access token is missing");
                }
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);
                localStorage.setItem("email", formData.email);
                setFormData({ email: "", password: "" });
                navigate("/auth/bookingconfirm");
            })
            .catch((err) => {
                alert(err.message); // Hiển thị lỗi đúng
                console.error("Login failed:", err);
            })
            .finally(() => { 
                setLoading(true); 
            });
    };


    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-content">
                <div className="form-title">Login</div>
                <div className="form-subtitle">Access to management system</div>
                <div className="login-info"><strong>Email: thanhphongchupanh@gmail.com, Password: 123</strong></div>
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required />
                <label>Password</label>
                <PasswordToggleFieldInput value={formData.password} name={"password"} onChange={handleChange} />
                <Link to='/' className="forgot-pass">Forgot Password</Link>
            </div>
            <button className="btn-login" type="submit">
                {loading && <Spinner size="2" />} Login
            </button>

            <button className="btn-loginGoogle" type="button" onClick={() => {localStorage.removeItem("accessToken")}}>
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