import { useEffect, useState } from "react"
import "../css/AuthenticatePage.css"
import { Link, useNavigate } from "react-router-dom"
import { Spinner } from "@radix-ui/themes"
function VerificationForm() {
    const navigate = useNavigate();

    const [secondsLeft, setSecondsLeft] = useState(300); // 5 minutes = 300 seconds

    useEffect(() => {
        if (secondsLeft <= 0) return;
        const timer = setInterval(() => {
            setSecondsLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [secondsLeft]);

    const formatTime = (secs) => {
        const min = Math.floor(secs / 60);
        const sec = secs % 60;
        return `${min}:${sec.toString().padStart(2, "0")}`;
    };

    const email = localStorage.getItem("email");
    const [formData, setFormData] = useState({
        email: email,
        code: ""
    })

    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch('https://localhost:7087/api/Auth/register-user', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                if (!res.ok) throw new Error("User registration failed");

                return res.json();
            })
            .then((data) => {
                alert("Message sent successfully!");
                navigate("/login");
                return;
            })
            .catch((err) => {
                console.log("Data: ", formData);
                console.error(err);

                alert("Failed to send message.");
            })
            .finally(() => {
                localStorage.removeItem("email");
            });
    }
    const handleChange = (e) => {
        console.log("OTP:", e.target.value); 
        setFormData((prev) => ({
            ...prev,
            code: e.target.value
        }));
        console.log("OTP:", e.target.value); 
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-content">
                <div className="form-img"><img src="./photos/verification.png" alt="" /></div>
                <div className="form-title" style={{ fontSize: "2em" }}>Two-step Verification</div>
                <div className="form-subtitle">A 6-digits code has been sent to</div>
                <div className="form-subtitle"><strong>{email}</strong></div>
            </div>
            <div className="form-group">
                <div className="form-group-input">
                    <label>Your verification code</label>
                    <input type="text" placeholder="Enter your otp" name="code"  onChange={handleChange} required />
                    {/* <OTPField onChange={handleChange} /> */}
                    {/*  */}
                </div>

            </div>
            <div className="form-subtitle">The OTP will be expired in <strong>{formatTime(secondsLeft)}</strong></div>
            <button className="btn-login" type="submit">
                {loading && <Spinner size="2" />}  Verify
            </button>
            <div className="form-footer">
                <div className="copy-right">© Badminton court service linked system</div>
            </div>
        </form>
    )
}

export default VerificationForm