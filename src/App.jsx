import React, { Component } from 'react';
import './App.css'

class App extends Component {

  state = {
    from :null,
    to:null,
    amount:null
  }
  getData = () => {
    fetch("https://acb-api.algoritmika.org/api/transaction")
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data })
        this.setState({from:data[0].from,to:data[0].to,amount:data[0].amount})
      })


  }
  componentDidMount() {
    this.getData();
  }


  render() {

    return (
      <div>
        <ul>
          <li>{this.state.from}</li>
          <li>{this.state.to}</li>
          <li>{this.state.amount}</li>
        </ul>
      </div>
    );
  }
}

export default App;