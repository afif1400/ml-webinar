import React from 'react';
import './contact.css';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
	return (
		<div>
			<Navbar page='' />
			<div className='contactBx'>
				<div className='color'>
					<div>
						<FontAwesomeIcon
							icon={faInstagram}
							size='2x'
							className='social-icon'
						/>
						<FontAwesomeIcon
							icon={faEnvelope}
							size='2x'
							className='social-icon'
						/>
					</div>
				</div>
				<div className='infoBx'>
					<h2>
						CONTACT <br />
						<span style={{ fontWeight: 200, color: 'var(--secondary)' }}>
							US
						</span>
					</h2>
					<div>
						<div>
							<p className='name'>Raiba Bhosle</p>
							<p className='number'>+91 7788676778</p>
							<p className='email'> raibabhosle@gmail.com</p>
						</div>
						<div>
							<p className='name'>Raiba Bhosle</p>
							<p className='number'>+91 7788676778</p>
							<p className='email'> raibabhosle@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
