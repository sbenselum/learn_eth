import React, { Component }  from 'react';
import Layout from '../../components/Layout';
import 'semantic-ui-css/semantic.min.css';
import Campaign from '../../ethereum/campaign';
import { Grid, Card, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
	
	static async getInitialProps(props) {
		const campaign = Campaign(props.query.address);
		const summary = await campaign.methods.getSummary().call();
		return { 
				address: props.query.address,
				minimumContribution: summary[0],
		        balance : summary[1],
		        requestsCount : summary[2],
		        approversCount : summary[3],
		        manager : summary[4] };

	}



	onSubmit = async (event) => {
		const summary = await campaigns;
	}

	renderCards() {

		const {
				minimumContribution,
		        balance,
		        requestsCount,
		        approversCount,
		        manager
		} = this.props;

		const items = [
			{
				header: manager,
				meta: 'Address of Manager',
				description: 'The manager created this campaign',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: minimumContribution,
				meta: 'Minimum contribution (wei)',
				description: 'Minimum to contribute',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: requestsCount,
				meta: 'Number of Requests',
				description: 'A request to withdraw eth from contract',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: approversCount,
				meta: 'Number of Approvers',
				description: 'Quantity of people who donated to this campaign',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: web3.utils.fromWei(balance, 'ether'),
				meta: 'Balance on the contract (eth)',
				description: 'Total balance',
				style: { overflowWrap: 'break-word' }
			}

		]

		return <Card.Group items={items} />

	}

	render() {
		return(
			<Layout>
				<h3>Campaign Show</h3>	
				<Grid>
					<Grid.Row>
						<Grid.Column width={10}>
							{this.renderCards()}
						</Grid.Column>
						<Grid.Column width={6}>
							<ContributeForm address={this.props.address}/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column >
							<Link route={`/campaigns/${this.props.address}/requests`}>
								<a><Button primary>View Requests</Button></a> 
							</Link>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Layout>
		)
	}
}

export default CampaignShow;