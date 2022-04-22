// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
	// Get a list of all accounts

	accounts = await web3.eth.getAccounts();
	/*web3.eth.getAccounts().then(fetchedAccounts => {
		console.log(fetchedAccounts);
	} );*/

	// Use one fo those accounts to deploy the contract
	inbox = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode, arguments: ['Hi there!'] })
		.send({ from: accounts[0], gas: '1000000' });
})

describe('Inbox', () => {
	it('deploys a contract', () => {
		assert.ok(inbox.options.address);
	})

	it('has a default message', async () => {
		const message = await inbox.methods.message().call(); 
		assert.equal(message, 'Hi there!');
	})

	it('can change the message', async () => {
		await inbox.methods.setMessage('New mail').send({ from: accounts[0], gas: 1000000 });
		const message = await inbox.methods.message().call(); 
		assert.equal(message, 'New mail');

	})
})

/*
class Car {
	park() {
		return 'stopped';
	}

	drive() {
		return 'vroom';
	}
}

let car;

beforeEach(() =>{
	car = new Car();	
});

describe('Car1',() => {
	it('park test', () => {

		assert.equal(car.park(), 'stopped');

	})
	it('drive test', () => {

		assert.equal(car.drive(), 'vroom');

	})
})
*/