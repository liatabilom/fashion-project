import React, { Component } from 'react';
import InnerCard from './InnerCard';

class Head extends Component {
	render() {
		return (
			<div>
				<div className="header">
					<header>
						Na'dia
						<br />
						Correia Gonc,alves
					</header>
				</div>
				<div>
					<InnerCard />
				</div>
			</div>
		);
	}
}

export default Head;
