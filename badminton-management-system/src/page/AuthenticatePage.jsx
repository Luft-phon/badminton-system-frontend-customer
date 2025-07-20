import "../css/AuthenticatePage.css"
import { Fade } from "react-awesome-reveal";
import LoginForm from "../component/LoginForm";
import SignUpForm from "../component/SignUpForm";

function AuthenticatePage() {
    return (
        <div className="login-container">
            <Fade direction='up' duration={1000}>
                <div className="logo">
                    <h1 className="logo-title">Badminton</h1>
                    <h2 className="logo-subtitle">Connected court booking system</h2>
                </div>
            </Fade>
           <LoginForm />
        </div>
    )
}

export default AuthenticatePage