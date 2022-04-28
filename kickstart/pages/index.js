import React, { Component }  from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Layout from '../components/Layout'; 

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

		/*let items = [];
		let item;	
		for(let i = 0; i < campaigns.length; i++) {
			item = [
			  {
			    header: campaigns.address,
			    description: campaigns.description,
			    meta: 'ROI: 30%',
			  }]
			items.push(item);
		}
		const CardExampleGroupProps = () => <Card.Group items={items} />
		*/

		const items = this.props.campaigns.map(address => {
			return {
			    header: address,
			    description: <a>View Campaign</a>,
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
				<Button 
					content="Create Campaign"
					icon="add"
					floated="right"
					primary
				/>
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