import { useEffect, useState } from 'react';
import NotFound from './NotFound';
import BookingDetail from '../component/BookingDetail';

function DashBoardPage() {
    const token = localStorage.getItem("accessToken");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        fetch('https://localhost:7087/api/Auth/check-token', {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
            // body: JSON.stringify(""),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Token is invalid");
                setIsLoggedIn(true);
            })
            .catch((err) => {
                console.error("Token check failed:", err);
                setIsLoggedIn(false);
                localStorage.removeItem("accessToken");
            });
    }, []);

    return (

        <div>
            {!isLoggedIn && <NotFound />}
        {/* <BookingDetail /> */}
        </div>

    )
}

export default DashBoardPage;