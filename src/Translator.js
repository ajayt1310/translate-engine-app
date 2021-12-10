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
      translatedAmount: "",
      translatedAmountWords: "",
      regexp : /^[0-9\b]+$/,
      nameError: "",
      amountError:""
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
    const amount = (event.target.validity.valid) ? event.target.value : this.state.amount;
    this.setState({ amount });
  }

  //Function to handle button click.
  handleButtonClicked(event) {
    let valid = true;
    this.setState({ nameError:"", amountError:"" })
    // name validation
    if (!this.state.name) {
      this.setState({ nameError : "*Please enter your name."});
      valid = false;
    }
    // amount validation
    if (!this.state.amount) {
      this.setState({ amountError : "*Please enter amount in number."});
      valid = false;
    }


    event.preventDefault();
    console.log("valid = " + valid);
    if (valid) {
      axios.get('http://localhost:8080/translate?name=' + this.state.name + '&amount=' + this.state.amount).then(response => {
      this.setState({
        translatedName: response.data.name,
        translatedAmount: response.data.amount,
        translatedAmountWords: response.data.amountInWords
      });
    })}
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
              <div className="errorMsg">{this.state.nameError}</div>
              <p>Amount (in digits)</p>
              <p><input type="text" value={this.state.amount} maxLength="10" pattern="[0-9]*"  onInput={this.handleAmountInputChanged.bind(this)} /></p>
              <div className="errorMsg">{this.state.amountError}</div>
              <p>
                <button type="submit" className="btn btn-info" onClick={this.handleButtonClicked.bind(this)}>
                  Click to View Details
                </button>
              </p>
              <p>Name : {this.state.translatedName}</p>
              <p>Amount : {this.state.translatedAmount}</p>
              <p>Amount (in words) : {this.state.translatedAmountWords}</p>
            </Panel.Body>
          </Panel>
        </div>
      </div>
      <div className="col-md-3">
      </div>
    </div>)
  }
}
