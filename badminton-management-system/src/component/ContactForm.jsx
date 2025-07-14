import { useRef, useState } from 'react';
import '../css/ContactForm.css';
import ToastButton from './ToastButton';

function ContactForm() {
    const [showToast, setShowToast] = useState("Please fill out the form");
    const nameRef = useRef();
    const emailRef = useRef();
    const titleRef = useRef();
    const messageRef = useRef();

   const handleSubmit = (e) => {
  e.preventDefault();
  if (
    !nameRef.current.value.trim() ||
    !emailRef.current.value.trim() ||
    !titleRef.current.value.trim() ||
    !messageRef.current.value.trim()
  ) {
    setShowToast("Please fill out the form");
  } else {
    setShowToast("Email is sent. Please check your email");
  }
};
    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Full Name</label>
                <input ref={nameRef} type="text" placeholder="Nguyễn Văn A" required />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input ref={emailRef} type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
                <label>Title</label>
                <input ref={titleRef} type="" placeholder="0123 456 789" required />
            </div>
            <div className="form-group">
                <label>Message</label>
                <textarea ref={messageRef} placeholder="" rows="3"></textarea>
            </div>

            <button type="submit">
                Submit
                {/* <ToastButton button="Submit" title={showToast} /> */}
            </button>
        </form>
    );
}

export default ContactForm
