import VerificationForm from "../../../component/auth/VerificationForm";
import "../../../css/AuthenticatePage.css"
import { Fade } from "react-awesome-reveal";

function VerificationPage() {
    return (
            <div className="login-container">
                <Fade direction='up' duration={1000}>
                    <div className="logo">
                        <h1 className="logo-title">Badminton</h1>
                        <h2 className="logo-subtitle">Connected court booking system</h2>
                    </div>
                </Fade>
                <VerificationForm />
            </div>
    )
}

export default VerificationPage