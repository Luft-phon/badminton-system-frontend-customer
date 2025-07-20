import { FaUser } from "react-icons/fa";
import "../css/UserDetail.css";
import { useEffect, useMemo, useState } from "react";
import DialogFeature from "./Dialog";

function UserDetail() {
    const [user, setUser] = useState([]);
    const token = localStorage.getItem("accessToken");
    const email = localStorage.getItem("email");
    const [fullName, setFullName] = useState("");
    useEffect(() => {
        fetch('https://localhost:7087/api/Customer/user-detail', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ email }),
        })
            .then(res => {
                if (!res.ok) throw new Error("Not Found User")
                return res.json()
            })
            .then(data => {
                const firstName = data?.data?.firstName;
                const lastName = data?.data?.lastName;
                const fullName = `${firstName} ${lastName}`;
                setFullName(fullName);
                setUser(data.data);
                console.log(data.data.userID)
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);

    const isLoyal = useMemo(() => {
        if (!user?.createAt) return false;
        const joinDate = new Date(user.createAt);
        const now = new Date();
        const diffInYears = now.getFullYear() - joinDate.getFullYear();
        return diffInYears >= 1;
    }, [user]);
    return (
        <div className="user-detail">
            <div className="profile-header">
                <div className="avatar"><FaUser size={48} /></div>
                <div className="fullname">{fullName}</div>
                <div className="tagline">🏸 {isLoyal ? "Loyal Member - Since " + new Date(user.createAt).getFullYear() : "New Member"} </div>
            </div>


            <div className="user-detail-info">
                <div className="user-group">
                    <label>First name</label>
                    <input type="text" value={user.firstName} disabled />
                </div>
                <div className="user-group">
                    <label>Last name</label>
                    <input type="text" value={user.lastName} disabled />
                </div>
                <div className="user-group">
                    <label>Date of birth</label>
                    <input type="text" value={user.dob} disabled />
                </div>
                <div className="user-group">
                    <label>Phone</label>
                    <input type="text" value={user.phone} disabled />
                </div>
                <div className="user-group">
                    <label>Email</label>
                    <input type="text" value={user.email} disabled />
                </div>
                <div className="user-group">
                    <label>Points</label>
                    <input type="text" value={user.exp} disabled />
                </div>
            </div>
            <div className="edit-btn-wrapper">
                <DialogFeature className={"edit-btn"} userID={user.userID} dob={user.dob} firstName={user.firstName} lastName={user.lastName} email={user.email} phone={user.phone}/>
            </div>
        </div>
    );
}

export default UserDetail;
