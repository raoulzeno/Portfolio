import React from 'react';
import '../containers/App.css';
import { useState, useEffect } from 'react';
import Burger from "./Burger/Burger.tsx";
import Menu from "./Menu/Menu.tsx"

const NavigationBar = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav className="sticky">
			<Burger open={open} setOpen={setOpen}/>
			<Menu open={open} setOpen={setOpen}/>
		</nav>
		)
}

export default NavigationBar;