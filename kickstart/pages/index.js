import React, { Component }  from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Layout from '../components/Layout'; 
import { Link } from '../routes'

class CampaignIndex extends Component {

	static async getInitialProps() {
		const campaigns = await factory.methods.getDeployedCampaigns().call();
	
		return { campaigns };
	}

	async componentDidMount() {
		const campaigns = await factory.methods.getDeployedCampaigns().call();
		console.log(campaigns);
	}


	renderCampaigns() {

		const items = this.props.campaigns.map(address => {
			return {
			    header: address,
			    description: (
			    	<Link route={`/campaigns/${address}`}><a>View Campaign</a></Link>
			    ),
			    fluid: true

			};
		});

		return <Card.Group items={items} />;
	}
	
	render() {
		return (
			<Layout>
			<div>
				<h3>Open Campaigns</h3>
				<Link route='/campaigns/new'><a>
					<Button 
						content="Create Campaign"
						icon="add"
						floated="right"
						primary
					/>
				</a></Link>
				{this.renderCampaigns()}
			</div>
			</Layout>
		)
	}
}

/*<link
    async
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
  />*/

export default CampaignIndex;