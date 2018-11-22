import React, { Component } from 'react';
import './styles/MFView.css';
import axios from 'axios'
import $ from 'jquery'

class MFView extends Component {

	constructor(props) {
	  	super(props)
	  	this.state = {
	  		name: "",
	  		nav: "",
	  		riskometer: "",
	  		return_3yr: "",
	  		rating: "",
	  		category: "",

	  	}
	  	this.getMF = this.getMF.bind(this)
	}

	UNSAFE_componentWillReceiveProps(nextProps){
		if(nextProps !== this.props){
			console.log(nextProps)
			this.getMF(nextProps.activeMF)
		}
	}

	componentDidMount(){

	}

	componentDidUpdate(){

	}

	getMF(id){
		axios({
			method: 'get',
			url: 'https://api.piggy.co.in/v1/mf/?key=' + id
		}).then((response)=>{
			console.log(response)
			this.setState({
				name: response.data.data.mutual_fund.details.name,
				nav: response.data.data.mutual_fund.nav,
				riskometer: response.data.data.mutual_fund.details.riskometer,
				return_3yr: response.data.data.mutual_fund.details.return_3yr,
				rating: response.data.data.mutual_fund.details.rating,
				category: response.data.data.mutual_fund.details.category
			})
		})
	}

	render() {
		return (
			<div className={this.props.display ? "mf-view" : "mf-view hidden"}>
				<button onClick={()=>{this.props.returnHome()}} className="back-button">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
				</button>	
				<div className="mf-name">{this.state.name}</div>
				<div className="property">
					<div className="title">Nav</div>
					<div className="value">{this.state.nav}</div>
				</div>
				<div className="property">
					<div className="title">Category</div>
					<div className="value">{this.state.category}</div>
				</div>
				<div className="property">
					<div className="title">Rating</div>
					<div className="value">{this.state.rating}</div>
				</div>
				<div className="property">
					<div className="title">return_3y</div>
					<div className="value">{this.state.return_3yr}</div>
				</div>
				<a target="_blank" className="buy-button" href="https://piggy.co.in">Buy</a>
			</div>
		);
	}
}

export default MFView;