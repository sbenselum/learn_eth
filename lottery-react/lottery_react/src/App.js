import React from "react";
import web3 from "./web3";
import lottery from "./lottery";

class App extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = { manager: "" };
  }*/
  state = { 
            manager : "" ,
            players: [],
            balance:  "",
            value: "",
            message: ""
          }; // <- Goes directly to constructor

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({ manager, players, balance });
  };

  pickWinner = async (event) => {
    event.preventDefault();

    this.setState({ message: 'Waiting to pick winner...'});
    
    const accounts = await web3.eth.getAccounts();
    await lottery.methods.pickWinner().send({from: accounts[0]});

    this.setState({ message: 'Chicken chicken dinner winner!'});
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting for the transaction...'});

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({ message: 'You have been entered!' });
  };

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is currently managed by {this.state.manager}</p>
        <p>There are {this.state.players.length} playing</p>
        <p>The balance in this contract is {web3.utils.fromWei(this.state.balance, 'ether')} ether</p>


        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Play with us! </h4>
            <label>Amount of ether to enter</label>
            <input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })} 
            />
          <br /><button>Enter</button>
        </form>

        <hr />

          <button onClick={this.pickWinner}>Pick winner</button>
        
        <hr />
        <h1>{this.state.message}</h1>
      </div>  
    );
  }
}
export default App;