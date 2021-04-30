import React from 'react';
import './contact.scss';

const EMAIL = {
	prefix: 'kimseyerik',
	suffix: 'gmail.com'
};

// window.open( String( 'mailto:recipient^example.com' ).replace('^', '@') );
const Contact = () => {
	const sendEmail = () => {
		console.log('sending');
		window.open(String(`mailto:${EMAIL.prefix}^${EMAIL.suffix}`).replace('^', '@'));
	};
	return (
		<div className="contact-container">
			<div className="email-address contact-item" id="email-address" onClick={sendEmail}>
				{EMAIL.prefix}
				<span className="email-address contact-item">@</span>
			</div>
			<div className="email-address contact-item" id="email-address" onClick={sendEmail}>
				gmail.com
			</div>
		</div>
	);
};

export default Contact;
