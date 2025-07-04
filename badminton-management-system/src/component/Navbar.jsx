import { useRef, useState } from "react";
import "../css/Navbar.css"
import { FaArrowUp, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Link as Scroll } from 'react-scroll';
import { Fade } from "react-awesome-reveal";


function Navbar() {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<Link to='/'>About</Link>
				<Link to='/regulation'>Rule & Regulation</Link>
				<Link to='/'>Contact</Link>
				<button className="login-btn"><Link to='/login'>Sign in</Link></button>
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
		</header>
	);
}

export default Navbar