import React from 'react';
import SkillsList from './SkillsList.tsx'
import '../containers/App.css';

const ToolBelt = () => {
	return (
		<div className='toolbeltContainer'>
			<h1 className='headers' id="toolbelt">ToolBelt</h1>
			<SkillsList />
		</div>
		)
}

export default ToolBelt;

