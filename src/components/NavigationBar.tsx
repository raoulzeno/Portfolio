import React from 'react';
import '../containers/App.css';
import { useState, useEffect } from 'react';
import Burger from "./Burger/Burger.tsx";
import Menu from "./Menu/Menu.tsx"

const NavigationBar = () => {
	const [stickyClass, setStickyClass] = useState("navigation");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", stickNavbar);

		return () => {
			window.removeEventListener("scroll", stickNavbar);
		};
	}, []);

	const stickNavbar = () => {
		if (window !== undefined) {
			let windowHeight = window.innerHeight - 1;
			let scroll = window.scrollY;
			scroll > windowHeight ? setStickyClass("sticky") : setStickyClass("navigation")
		}
	}

	return (
		<nav className={stickyClass}>
			<Burger open={open} setOpen={setOpen}/>
			<Menu open={open} setOpen={setOpen}/>
		</nav>
		)
}

export default NavigationBar;