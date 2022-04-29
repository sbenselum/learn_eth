//new.js
import React, { Component } from 'react';
import { Button, Form , Input, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/web3';
import Campaign from '../../../ethereum/campaign';
import { Router, Link } from '../../../routes';

class RequestNew extends Component {

	state = {
		value: '',
		description: "",
		recipient: "",
		loading: "",
		errorMessage: ""
	}

	static async getInitialProps(props) {

		const { address } = props.query;
		return { address };
	}

	onSubmit = async (event) => {
		event.preventDefault();

		this.setState({ loading : true });	
		this.setState({ errorMessage : "" });	
		
		const campaign = Campaign(this.props.address);
		const accounts = await web3.eth.getAccounts();

		try{
			const { description, value, recipient } = this.state;

			await campaign.methods
			.createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
			.send({
				from:accounts[0]
			});

			Router.pushRoute('/');
		} catch (err) {
			this.setState({ errorMessage: err.message })
		}
		this.setState({ loading : false });	
	}

	render() {
		return( 
			<Layout>
			<Link route={`/campaigns/${this.props.address}/requests`}>
				<a><Button secondary>Back</Button></a>
			</Link>
			<h3>Create a Request</h3>
			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				<Form.Field>
				<label>Description</label>
			      <Input 
			      	value={this.state.description}
			      	onChange={event => this.setState({ description: event.target.value })} 
			      />
				</Form.Field>
				<Form.Field>
				<label>Value in ether</label>
			      <Input 
			      	label='eth'
			      	labelPosition="right"
			      	value={this.state.value}
			      	onChange={event => this.setState({ value: event.target.value })} 
			      />
				</Form.Field>
				<Form.Field>
				<label>Recipient</label>
			      <Input 
			      	value={this.state.recipient}
			      	onChange={event => this.setState({ recipient: event.target.value })} 
			      />

				</Form.Field>
			  <Message error header="Oops!" content={this.state.errorMessage} />
			  <Button loading={this.state.loading} primary>Create Request</Button>

			</Form>
			</Layout>
		)
	}
}

export default RequestNew;