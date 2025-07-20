import { useState } from "react";
import "../css/ContactForm.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        title: "",
        message: "",
    });


    const handleChange = (e) => {
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://localhost:7087/api/Email/contact-us", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to send");
                return res.json();
            })
            .then((data) => {
                alert("Message sent successfully!");
                setFormData({
                    fullname: "",
                    email: "",
                    title: "",
                    message: "",
                });
                return;
            })
            .catch((err) => {
                alert("Failed to send message.");
                console.error(err);
            });
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label style={{ color: "var(--black)" }}>Full Name</label>
                <input
                    type="text"
                    name="fullname"
                    placeholder="John Witch"
                    required
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label style={{ color: "var(--black)" }}>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label style={{ color: "var(--black)" }}>Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Time to book a court"
                    required
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label style={{ color: "var(--black)" }}>Message</label>
                <textarea
                    name="message"
                    placeholder="How can I book a court?"
                    rows="3"
                    required
                    onChange={handleChange}
                ></textarea>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
