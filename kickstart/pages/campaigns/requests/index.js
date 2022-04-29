//index.js
import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import 'semantic-ui-css/semantic.min.css';
import { Button, Grid, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import web3	from '../../../ethereum/web3';
import RequestRow from '../../../components/RequestRow';


class RequestIndex extends Component {
	static async getInitialProps(props) {

		const { address } = props.query;
		const campaign = Campaign(address);
		const requestCount = await campaign.methods.getRequestsCount().call();
		const approversCount = await campaign.methods.approversCount().call();

		const requests = await Promise.all(
			Array(parseInt(requestCount)).fill().map((element, index) => {
				return campaign.methods.requests(index).call();
			})
		)

		return { address, requests, requestCount, approversCount };

	}

	renderRow() {
		return this.props.requests.map((request, index) => {
			return (<RequestRow
				key={index}
				id={index}
				request={request}
				address={this.props.address}
				approversCount={this.props.approversCount} />
			)
		});
	}

	render(){

		const { Header, Row, HeaderCell, Body } = Table;

		return( 
			<Layout>
				<Grid>
					<Grid.Row>
						<Grid.Column width={10}>
							<h3>Pending Requests</h3>
						</Grid.Column>
						<Grid.Column width={6}>
							<Link route={`/campaigns/${this.props.address}/requests/new`}>
								<a><Button floated='right' primary>Add Request</Button></a>
							</Link>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<Table>
					<Header>
						<Row>
					        <Table.HeaderCell>Id</Table.HeaderCell>
					        <Table.HeaderCell>Description</Table.HeaderCell>
					        <Table.HeaderCell>Amount</Table.HeaderCell>
					        <Table.HeaderCell>Recipient</Table.HeaderCell>
					        <Table.HeaderCell>Approval Count</Table.HeaderCell>
					        <Table.HeaderCell>Approve</Table.HeaderCell>
					        <Table.HeaderCell>Finalize</Table.HeaderCell>
				     	</Row>
				    </Header>

				    <Body>
				    	{this.renderRow()}
				    </Body>
			    </Table>
			    <div>Found {this.props.requestCount} requests</div>
			</Layout>
		)
	}

}

export default RequestIndex;