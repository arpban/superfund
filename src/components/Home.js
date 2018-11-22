import React, { Component } from 'react';
import './styles/Home.css';
import axios from 'axios'
import $ from 'jquery'

class Home extends Component {

	constructor(props) {
	  	super(props)
	  	this.state = {
	  		searchResults: []
	  	}
	  	this.getSearchResults = this.getSearchResults.bind(this)
	}

	componentDidMount(){

	}	

	getSearchResults(){
		let input = document.getElementById('search-input').value
		axios({
			method: 'post',
			url: 'https://api.piggy.co.in/v2/mf/search/',
			headers: {
				'Authorization': 'Bearer a41d2b39e3b47412504509bb5a1b66498fb1f43a',
				'Accept': 'application/json'
			},
			data: {
				search: input,
				rows: 5,
				offset: 1
			}
		}).then((response) => {
			console.log(response.data.data.search_results)
			this.setState({
				searchResults: response.data.data.search_results
			})
		})
	}

	render() {
		let search_results_rows = []
		for(let i=0; i<this.state.searchResults.length; i++){
			search_results_rows.push(
				<div className="result-item" onClick={() => {this.props.setMF(this.state.searchResults[i])}} 
				key={this.state.searchResults[i].details_id}>
					{this.state.searchResults[i].name}
				</div>
			)
		}
		return (
			<div className={this.props.display ? "home-view" : "home-view hidden"}>
				<section className="main">
					<div className="wrap">
						<div className="site-title">Superfund</div>
						<div className="search">
							<input type="text" onChange={this.getSearchResults} placeholder="Search for mutual funds.." id="search-input" />
							<div className="search-results">
								{search_results_rows}
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Home;