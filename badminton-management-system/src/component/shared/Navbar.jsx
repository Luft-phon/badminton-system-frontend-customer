import { useEffect, useRef, useState } from "react";
import "../../css/Navbar.css"
import { FaArrowUp, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import AvatarDropbox from "./AvatarDropbox";



function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

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
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<Link to='/'>About</Link>
				<Link to='/regulation'>Rule & Regulation</Link>
				<Link to='/'>Contact</Link>

				{!isLoggedIn && <button className="login-btn"><Link to='/login'>Sign in</Link></button>}

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>

			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			{isLoggedIn && <AvatarDropbox />}
		</header>
	);
}

export default Navbar