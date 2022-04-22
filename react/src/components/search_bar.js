import React, { Component } from 'react';
//import Component from 'react'

class SearchBar extends Component {

	constructor(props){
		super(props);

		this.state = { term: '' }; // Search term -> property
	};


	render() {

		//return <input onChange={(event) => console.log(event.target.value)} />;
		return (
			<div>
				<input className="search-bar"
					value={this.state.term} 
					onChange={(event) => this.onInputChange(event.target.value)} 
				/>
			</div>
		);
	};

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	};

/*
	onInputChange(event) {
		console.log(event.target.value);
	}
*/
}


/*const SearchBar = () => {
	return <input />;
};*/

export default SearchBar;