import React, { Component } from 'react';
import './index.css';
import AddTask from '../../components/AddTask';

class Overview extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<span>HOLA MUNDO</span>
				<AddTask/>
			</div>
		);
	}
}

export default Overview;