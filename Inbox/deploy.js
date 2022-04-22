// deploy code will go here
const HDWalletProvider  = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const provider = new HDWalletProvider(
	'nominee pet orient impose assault antenna tent easily sad powder bird develop',
	'https://rinkeby.infura.io/v3/7e68ca0c4cec4ca783607cf22d403e93'	
);
const web3 = new Web3(provider);


const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode, arguments: ['Hello!'] })
		.send( { gas: '1000000', from: accounts[0] } );

	console.log('Contract deployed to', result.options.address);
	provider.engine.stop();
};
deploy();