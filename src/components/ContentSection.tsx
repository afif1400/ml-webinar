import React from 'react';
import './contentsection.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const ContentSection = () => {
	return (
		<div>
			<div className='content'>
				<p>
					Learn from scratch and strengthen your fundamentals on Machine
					Learning with experienced Instructors and Kick-off your career in
					Machine learning.
				</p>
				<button>
					<AniLink className='anilink' cover to='/Workshop' bg='#081c52'>
						book your slot
					</AniLink>
				</button>
			</div>
		</div>
	);
};

export default ContentSection;
