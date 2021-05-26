import React, { useState } from 'react';
import Hamburger from './Hamburger';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import './navbar.css';

const Navbar = ({ page }) => {
	const [responsive, setResponsive] = useState('');

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				flexWrap: 'wrap',
			}}
		>
			<AniLink
				to='/'
				cover
				direction='right'
				bg='#2a2a72ff'
				className='logo'
				style={{ float: 'left' }}
			>
				INOVACT
			</AniLink>
			{page !== 'outline' ? (
				<div className={'topnav ' + responsive} id='myTopnav'>
					<AniLink swipe direction='up' to='/Contact'>
						Contact
					</AniLink>
					<AniLink>About</AniLink>
					<AniLink swipe direction='up' to='/Workshop' entryOffset={100}>
						Outline
					</AniLink>
				</div>
			) : (
				<div className={'topnav ' + responsive} id='myTopnav'>
					<AniLink
						swipe
						direction='right'
						to='/Contact'
						bg='#eaf6ffff'
						style={{ color: 'var(--bg)' }}
					>
						Contact
					</AniLink>
					<AniLink style={{ color: 'var(--bg)' }}>About</AniLink>
					<AniLink
						swipe
						to='/Workshop'
						entryOffset={100}
						style={{ color: 'var(--bg)' }}
					>
						Outline
					</AniLink>
				</div>
			)}
			<a href='javascript:void(0);' className='icon'>
				<Hamburger responsive={responsive} setRes={setResponsive} />
			</a>
		</div>
	);
};

export default Navbar;
