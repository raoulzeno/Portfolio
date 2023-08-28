import styled from "styled-components";

export const StyledSkill = styled.div`
	width: 100vw;
	height: 150px;
	background-image: linear-gradient(to right, rgba(136,250,168,1), rgba(44,192,255,1));
	grid-column: 1/2;
	grid-row: 3/4;
	justify-self: center;
	align-self: center;
	z-index: 5;
	transition: transform .5s ease-in-out;
	border: none;
	transform: ${({ clicked }) => clicked ? "rotateY(0)" : "rotate(0)"};
`;