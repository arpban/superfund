import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios'
import $ from 'jquery'

import Home from './Home'
import MFView from './MFView'

class App extends Component {

	constructor(props) {
	  	super(props)
	  	this.state = {
	  		isHomeActive: true,
	  		isMFViewActive: false,
	  		activeMF: ""
	  	}
	  	this.setMF = this.setMF.bind(this)
	  	this.returnHome = this.returnHome.bind(this)
	}

	componentDidMount(){
		
	}

	setMF(value){
		let mf_id = value.details_id
		console.log(mf_id)
		this.setState({
			activeMF: mf_id,
			isHomeActive: false,
			isMFViewActive: true
		})
	}

	returnHome(){
		this.setState({
			isHomeActive: true,
			isMFViewActive: false
		})
	}

	render() {
		return (
			<div className="App">
				<Home display={this.state.isHomeActive}
				setMF={this.setMF} />
				<MFView activeMF={this.state.activeMF} 
				display={this.state.isMFViewActive}
				returnHome={this.returnHome} />
			</div>
		);
	}
}

export default App;
