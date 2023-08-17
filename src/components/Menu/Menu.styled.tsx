import styled from "styled-components";

export const StyledMenu = styled.nav`
	background: linear-gradient(to right, rgba(136,250,168,0.5), rgba(44,192,255,0.5));
	display: flex;
	position: absolute;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	align-content: center;
	text-align: right;
	padding: 0 1vw 0 0;
	width: 49vw;
	right: 0;
	z-index: 10;
	transition: transform 0.3s ease-in-out;
	transform: translateX(+100%);
	transform: ${({ open }) => open ? "translateX(0)" : "translateX(+100%)"};

	a {
		text-decoration: none;
		text-transform: uppercase;
		font-size: 2rem;
		color: white;
		padding: .5rem 0;
	}

	a:hover {
		background: linear-gradient(to right, rgba(136,250,168,1), rgba(44,192,255,1));
  		-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
	}
`;