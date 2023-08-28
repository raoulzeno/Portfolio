import styled from "styled-components";

export const StyledBurger = styled.button`
	position: absolute;
	right: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: none;
	border: none;
	cursor: pointer;
	padding: 0;
	margin: 0;
	top: 2rem;
	z-index: 11;

	div {
		width: 2rem;
		background-color: white;
		height: .25rem;
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;

		
	}
	div:first-child {
			transform: ${({ open }) => open ? 'rotate(45deg)' : "rotate(0)"};
		}
	div:nth-child(2) {
			opacity: ${({ open }) => open ? "0" : "1"};
		}
	div:nth-child(3) {
			transform: ${({ open }) => open ? 'rotate(-45deg)' : "rotate(0)"};
		}
	`;