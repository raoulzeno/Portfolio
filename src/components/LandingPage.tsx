import React from 'react';
import '../containers/App.css';
import LandingHeader from '../components/LandingHeader.tsx';
import CustomParticles from '../components/Particles.tsx';
import ArrowDown from '../components/ArrowDown.tsx';

const LandingPage = () => {
	return (
		<div className='container'>
			<CustomParticles className="particles" />
	      	<LandingHeader />
	      	<h2 className='headerSub'>I'm Raoul <span id='zeno'>Zeno</span> Huber. <br/> A web developer.</h2>
	      	<ArrowDown />
	    </div>
		)
}


export default LandingPage;