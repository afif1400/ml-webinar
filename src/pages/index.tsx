import React from 'react';
import Navbar from '../components/Navbar';
// import heroImage from '../images/hero.jpg';
import './index.css';
import ContentSection from '../components/ContentSection';

const Home = (): JSX.Element => {
	return (
		<>
			<div className='homepage'>
				<Navbar page='' />
				<ContentSection />
				<div>
					<p className='title'>MACHINE LEARNING</p>
					<p className='workshop'>WORKSHOP</p>
				</div>
			</div>
			<hr />
		</>
	);
};

export default Home;
