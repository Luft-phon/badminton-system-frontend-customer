import { FaUser } from "react-icons/fa"
import BookingDetail from "../component/BookingDetail"
import "../css/BookingConfirmationPage.css"
import { useEffect, useState } from "react"
import { Badge } from "@radix-ui/themes";
function BookingConfirmationPage() {
    const [confirmation, setConfirmation] = useState([]);
    const [history, setHistory] = useState([]);
    const token = localStorage.getItem("accessToken");
    const email = localStorage.getItem("email");
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    useEffect(() => {
        fetch('https://localhost:7087/api/Booking/booking-detail', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ email }),
        })
            .then(res => {
                if (!res.ok) throw new Error("No list")
                return res.json()
            })
            .then(data => {

                if (Array.isArray(data)) {
                    setConfirmation(data);
                } else if (data && Array.isArray(data.data)) {
                    setConfirmation(data.data);
                } else {
                    console.error("Không tìm thấy danh sách booking");
                    setConfirmation([]); // fallback an toàn
                }
            })
            .catch((err) => {
                console.error("Login failed:", err);
            })
    }, [])

    useEffect(() => {
        fetch('https://localhost:7087/api/Booking/booking-history', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ email }),
        })
            .then((res) => {
                if (!res.ok) console.log("No history")
                return res.json();
            })
            .then((data) => {
                const fullname = data?.data?.[0]?.name;
                setUserName(fullname)
                const phone = data?.data?.[0]?.phone;
                setPhone(phone)
                if (Array.isArray(data)) setHistory(data)
                if (Array.isArray(data.data)) setHistory(data.data)
                else setHistory([])
            })
    }, []);
    return (
        <div className="bookingPage-container">
            <div className="customer-booking">
                <div className="customer-booking-icon"><FaUser size={40} /></div>
                <div className="customer-booking-info">
                    <p>Name: <strong>{userName}</strong></p>
                    <p>Phone: <strong>{phone}</strong></p>
                </div>
            </div>
            <div className="confirmation-booking">
                {confirmation.map((b) => <BookingDetail key={b.bookingID} info={b} />)}
            </div>
            <div className="booking-history">
                <div className="booking-title">Your Booking History</div>
                <div class="table-wrapper">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Court</th>
                                <th>Status</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((h) =>
                                <tr key={h.bookingID}>
                                    <td>#{h.bookingID}</td>
                                    <td>{h.bookingDate}</td>
                                    <td>{h.startTime} -{h.endTime}</td>
                                    <td>{h.courtName}</td>
                                    <td>
                                        <span
                                            className={`status ${h.bookingStatus === "Booked" ? "booked" : "cancelled"}`}
                                        >
                                            {h.bookingStatus}
                                        </span>
                                    </td>
                                    <td><Badge color={`${h.paymentStatus === "Uncomplete" ? "red" : "green"}`} size="2">{h.paymentStatus}</Badge></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default BookingConfirmationPage