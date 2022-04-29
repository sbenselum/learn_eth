import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xa7096B118c8B52C687ca3B5C6b3E287790e4F247'
);

export default instance;