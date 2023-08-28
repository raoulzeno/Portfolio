import React from 'react';
import { useState } from "react";
import Skills from './SkillItem/Skills.tsx';
import '../containers/App.css';

const SkillsList = () => {
	const [clicked, setClicked] = useState(false);

	return(
		<div className="skillsContainer"> 
			<Skills clicked={clicked} setClicked={setClicked}/>
		</div>
		)
}

export default SkillsList;