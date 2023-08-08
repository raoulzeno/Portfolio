import React from 'react';
import '../containers/App.css';
import { useState } from 'react';

const NavigationBar = () => {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	return (
		<nav className='navigation'>
			<button className='hamburger' onClick={()=> {
				setIsNavExpanded(!isNavExpanded);
			}}>
				<svg className='hambIcon' fill="none" height="40" viewBox="0 0 20 20" width="40" xmlns="http://www.w3.org/2000/svg" id="fi_6995971"><path clip-rule="evenodd" d="m3 5c0-.26522.10536-.51957.29289-.70711.18754-.18753.44189-.29289.70711-.29289h12c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711s-.1054.51957-.2929.70711c-.1875.18753-.4419.29289-.7071.29289h-12c-.26522 0-.51957-.10536-.70711-.29289-.18753-.18754-.29289-.44189-.29289-.70711zm0 5c0-.26522.10536-.51957.29289-.70711.18754-.18753.44189-.29289.70711-.29289h6c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711 0 .2652-.1054.5196-.2929.7071s-.4419.2929-.7071.2929h-6c-.26522 0-.51957-.1054-.70711-.2929-.18753-.1875-.29289-.4419-.29289-.7071zm0 5c0-.2652.10536-.5196.29289-.7071.18754-.1875.44189-.2929.70711-.2929h12c.2652 0 .5196.1054.7071.2929s.2929.4419.2929.7071-.1054.5196-.2929.7071-.4419.2929-.7071.2929h-12c-.26522 0-.51957-.1054-.70711-.2929-.18753-.1875-.29289-.4419-.29289-.7071z" fill="rgb(255,255,255)" fill-rule="evenodd"></path></svg>
			</button>
			<div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
				<ul>
					<li className='listItems'>Home</li>
					<li className='listItems'>Toolbelt</li>
					<li className='listItems'>Projects</li>
					<li className='listItems'>Blog</li>
					<li className='listItems'>About</li>
					<li className='listItems'>Contact</li>
				</ul>
			</div>
		</nav>
		)
}

export default NavigationBar;