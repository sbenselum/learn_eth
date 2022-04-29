//ContributeForm.js
import React, { Component } from 'react';
import {  Button, Form , Input, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import { Router } from '../routes';

class ContributeForm extends Component {
	state = {
		contribution: "",
		loading: "",
		errorMessage: ""
	}

	onSubmit = async (event)  => {
		event.preventDefault();

		this.setState({ loading : true });	
		this.setState({ errorMessage : "" });	
		try{
			const accounts = await web3.eth.getAccounts();
			const campaign = Campaign(this.props.address);

			await campaign.methods
			.contribute()
			.send({
				from:accounts[0],
				value: web3.utils.toWei(this.state.contribution,'ether')
			});

		} catch (err) {
			this.setState({ errorMessage: err.message })
		}
		this.setState({ loading : false, value : 0 });	
		Router.replaceRoute(`/campaigns/${this.props.address}`);	
	}

	render() {
		return ( 

			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				<Form.Field>
					<label>Amount to Contribute</label>
					<Input 
				      	label='eth'
				      	labelPosition="right"
				      	value={this.state.contribution}
				      	onChange={event => this.setState({ contribution: event.target.value })} 
				      />
				      <Message error header="Oops!" content={this.state.errorMessage} />
			  		  <Button loading={this.state.loading} primary>Contribute</Button>

				</Form.Field>
			</Form>
		)

	}
}

export default ContributeForm;