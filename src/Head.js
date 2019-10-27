import React, { Component } from 'react';
import InnerCard from './InnerCard';

class Head extends Component {
	render() {
		return (
			<div>
				<div className="header">
					<header>
						<a href="https://www.correiagoncalves.com" style={{ textDecoration: 'none', color: '#80848F' }}>
							Na'dia
							<br />
							Correia Gonc,alves
						</a>
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
