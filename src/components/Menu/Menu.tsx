import React from "react";
import { StyledMenu } from "./Menu.styled.tsx";

const Menu = ({ open, setOpen }) => {
	return (
		<StyledMenu open={open}>
			<a href="#home" onClick={() => setOpen(!open)}>Home</a>
			<a href="#toolbelt" onClick={() => setOpen(!open)}>ToolBelt</a>
			<a href="#toolbelt" onClick={() => setOpen(!open)}>Projects</a>
			<a href="#toolbelt" onClick={() => setOpen(!open)}>Blog</a>
			<a href="#toolbelt" onClick={() => setOpen(!open)}>About</a>
			<a href="#toolbelt" onClick={() => setOpen(!open)}>Contact</a>
		</StyledMenu>
	)
}

export default Menu;