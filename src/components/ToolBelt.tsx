import React from 'react';
import SkillsList from './SkillsList.tsx'
import NavigationBar from './NavigationBar.tsx'
import '../containers/App.css';

const ToolBelt = () => {
	return (
		<div className='toolbeltContainer'>
			<NavigationBar />
			<h1 className='headers'>ToolBelt</h1>
			<SkillsList />
		</div>
		)
}

export default ToolBelt;

