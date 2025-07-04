import '../css/ContactForm.css';

function ContactForm() {
    return (
        <form className="booking-form">
            <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Nguyễn Văn A" required />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
                <label>Title</label>
                <input type="" placeholder="0123 456 789" required />
            </div>
            <div className="form-group">
                <label>Message</label>
                <textarea placeholder="" rows="3"></textarea>
            </div>

            <button type="submit">Send Email</button>
        </form>
    );
}

export default ContactForm
