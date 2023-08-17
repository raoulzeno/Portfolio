import React from "react";
import { StyledMenu } from "./Menu.styled.tsx";

const Menu = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<a href="#home">Home</a>
			<a href="#toolbelt">ToolBelt</a>
			<a href="#toolbelt">Projects</a>
			<a href="#toolbelt">Blog</a>
			<a href="#toolbelt">About</a>
			<a href="#toolbelt">Contact</a>
		</StyledMenu>
	)
}

export default Menu;