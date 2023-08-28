import React from 'react';
import '../../containers/App.css';
import { StyledSkill } from "./Skills.styled.tsx";

const Skills = ( {clicked, setClicked} ) => {
	return(
		<StyledSkill clicked={clicked} onClick={() => setClicked(!clicked)}/>
	)
}

export default Skills;