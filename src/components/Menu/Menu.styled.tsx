import styled from "styled-components";

export const StyledMenu = styled.nav`
	background: linear-gradient(to right, rgba(21, 150, 150, 1), rgba(21, 200, 150, 1));
	display: flex;
	position: absolute;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	align-content: center;
	text-align: left;
	width: 100vw;
	right: 0;
	z-index: 10;
	transition: transform 0.5s ease-in-out;
	transform: translateY(100%);
	transform: ${({ open }) => open ? "translateY(0)" : "translateY(+100%) transition-delay: 200ms"};

	a {
		text-decoration: none;
		text-transform: uppercase;
		font-size: 2rem;
		color: #FFFFF8;
		padding: .5rem 0;
		margin: 0 20px;
		transition: transform 1.1s ease-in-out;
		transform: translateX(-100%);

	}

	a:first-child {
		transition-delay: 100ms;
		transform: ${({ open }) => open ? "translateX(0)" : "translateX(-100%)"}
	}

	a:nth-child(2) {
		transition-delay: 200ms;
		transform: ${({ open }) => open ? "translateX(0)" : "translateX(-100%)"}
	}

	a:nth-child(3) {
		transition-delay: 300ms;
		transform: ${({ open }) => open ? "translateX(0)" : "translateX(-100%)"}
	}

	a:nth-child(4) {
		transition-delay: 400ms;
		transform: ${({ open }) => open ? "translateX(0)" : "translateX(-100%)"}
	}

	a:nth-child(5) {
		transition-delay: 500ms;
		transform: ${({ open }) => open ? "translateX(0)" : "translateX(-100%)"}
	}

	a:nth-child(6) {
		transition-delay: 600ms;
		transform: ${({ open }) => open ? "translateX(0)" : "translateX(-100%)"}
	}


	a:hover {
		background: linear-gradient(to right, rgba(136,250,168,1), rgba(44,192,255,1));
  		-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
	}
`;