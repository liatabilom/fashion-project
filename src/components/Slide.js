import React from 'react';

const Slide = ({ image }) => {
	const styles = {
		backgroundImage: `url(${image})`,
		backgroundSize: '500px 500px',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 60%',
	};
	return <div className="slide" style={styles}></div>;
};

export default Slide;
