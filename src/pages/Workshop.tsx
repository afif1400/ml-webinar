import React from 'react';
// import mlImage from '../images/ml.jpg';
import './workshop.css';
import Navbar from '../components/Navbar';

const WorkshopDetails = () => {
	return (
		<div style={{ background: 'var(--primary)' }}>
			<Navbar page='outline' />
			<div className='workshopDiv'>
				<div className='outline'>
					<h2>OUTLINE</h2>
					<div className='timeline'>
						<div className='left'>11:00 - 12:00 PM</div>
						<div className='right'>
							DATA PRE-PROCESSING <br />
							SUPERVISED MACHINE LEARNING ALGORITHMS
						</div>
					</div>
					<div className='timeline'>
						<div className='left'>11:00 - 12:00 PM</div>
						<div className='right'>
							REGRESSION <br />
							DESISION TRESS <br />
							RANDOM FOREST
						</div>
					</div>
					<div className='timeline'>
						<div className='left'>11:00 - 12:00 PM</div>
						<div className='right'>
							DATA PRE-PROCESSING <br />
							SUPERVISED MACHINE LEARNING ALGORITHMS
						</div>
					</div>
					<div className='timeline'>
						<div className='left'>11:00 - 12:00 PM</div>
						<div className='right'>
							DATA PRE-PROCESSING <br />
							SUPERVISED MACHINE LEARNING ALGORITHMS
						</div>
					</div>
					<div className='timeline'>
						<div className='left'>11:00 - 12:00 PM</div>
						<div className='right'>
							DATA PRE-PROCESSING <br />
							SUPERVISED MACHINE LEARNING ALGORITHMS
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkshopDetails;
