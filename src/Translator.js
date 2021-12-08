import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

export default class TranslatorEngine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      translatedName: "",
      translatedAmount: ""
    }
  }

  //Function to handle name text value.
  handleNameInputChanged(event) {
    this.setState({
      name: event.target.value
    });
  }

  //Function to handle amount text value.
  handleAmountInputChanged(event) {
    this.setState({
      amount: event.target.value
    });
  }

  //Function to handle button click.
  handleButtonClicked() {
    axios.get('http://localhost:8080/translate?name=' + this.state.name + '&amount=' + this.state.amount).then(response => {
      this.setState({
        translatedName: response.data.name,
        translatedAmount: response.data.amount
      });
    })
  }

  render() {
    return (<div className="addmargin">
      <div className="col-md-3">
      </div>
      <div className="col-md-6">
        <div>
          <Panel bsStyle="info" className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Translate Engine App</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>Name</p>
              <p><input type="text" value={this.state.name} onChange={this.handleNameInputChanged.bind(this)} /></p>
              <p>Amount (in digits)</p>
              <p><input type="text" value={this.state.amount} onChange={this.handleAmountInputChanged.bind(this)} /></p>
              <p>
                <button type="submit" className="btn btn-info" onClick={this.handleButtonClicked.bind(this)}>
                  Click to View Details
                </button>
              </p>
              <p>Name : {this.state.translatedName}</p>
              <p>Amount : {this.state.translatedAmount}</p>
              <p>Amount (in words) : {this.state.translatedAmount}</p>
            </Panel.Body>
          </Panel>
        </div>
      </div>
      <div className="col-md-3">
      </div>
    </div>)
  }
}
