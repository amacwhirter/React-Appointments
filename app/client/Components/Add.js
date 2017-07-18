import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap';

import helper from "../utils/api";

import css from "../../public/css/main.scss";

class Add extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      time: "",
      description: ""
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
    this.handleInputChangeDate = this.handleInputChangeDate.bind(this);
    this.handleInputChangeTime = this.handleInputChangeTime.bind(this);
    this.handleInputChangeDesc = this.handleInputChangeDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChangeDate(event) {
    this.setState({ date: event.target.value });
  }
  handleInputChangeTime(event) {
    this.setState({ time: event.target.value });
  }
  handleInputChangeDesc(event) {
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
      const newAppt = {
          date: this.state.date,
          time: this.state.time,
          description: this.state.description
      };
      console.log(newAppt);
      helper.saveAppt(newAppt).then(this.props.getData);
      this.setState({ inputValue: "" });
      window.location.reload();
    }

    render() {
        return (
            <div className="container">
                <br/>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon>Date</InputGroup.Addon>
                        <FormControl type="date" onChange={this.handleInputChangeDate} value={this.state.inputValue} />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon>Time</InputGroup.Addon>
                        <FormControl type="time" onChange={this.handleInputChangeTime} value={this.state.inputValue}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon>Description</InputGroup.Addon>
                        <FormControl type="text" onChange={this.handleInputChangeDesc} value={this.state.inputValue} placeholder="Enter a description..."/>
                    </InputGroup>
                </FormGroup>
                <Button type="submit" className="btn btn-success" onClick={this.handleSubmit}>
                    ADD
                </Button>
            </div>
        );
    }
}

export default Add;
