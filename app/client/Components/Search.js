import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {FormGroup, InputGroup, FormControl, Button, ControlLabel} from 'react-bootstrap';
import Add from "./Add";

import helper from "../utils/api";

import css from "../../public/css/main.scss";

class Search extends React.Component {

  constructor() {
      super();

      this.state = {
          showresult: false,
          data: []
      };

      this.getData = this.getData.bind(this);
      this.showResult = this.showResult.bind(this);
      this.searchParent = this.searchParent.bind(this);

  }

  getData(event) {
      event.preventDefault();

      var data;

      for (var field in this.refs) {
          data = this.refs[field].value;

          console.log(data);
          this.refs[field].value = '';
      }

      helper.getAppointments(data).then(function(res) {
          this.props.setParent(res.data);

          console.log(res.data.length);

          if (res.data.length <= 0) {
              this.props.found(true);
              console.log(this.state.data);
              this.props.setParent(this.state.data);
          }
      }.bind(this)).catch(function(err) {
          console.log(err);

      }.bind(this));

  }

  showResult() {
      if (this.state.showresult) {
          this.setState({showresult: false});
      } else {
          this.setState({showresult: true});
      }
  }

  componentDidMount() {
      //this.setState({data: this.props.results});
      console.log(this.props.results);
  }

  searchParent(data) {
      this.props.setParent(data);
      this.setState({data: data});
  }

    render() {
        return (
            <div className="search">
                <div className="add">
                    <button className="btn btn-primary new" onClick={this.showResult}>{this.state.showresult
                            ? "CANCEL"
                            : "NEW"}</button>

                    {this.state.showresult
                        ? <Add searchParent={this.searchParent}/>
                        : null}
                </div>
                <hr />
                <div className="searchBar">
                    <FormGroup controlId="formValidationNull" validationState={null}>
                        <ControlLabel>Search Appointments Here:</ControlLabel>
                        <FormControl type="text" className="form-control" id="search" placeholder="search by keywords..." ref="search"/>
                    </FormGroup>
                    <Button type="submit" className="btn btn-default" onClick={this.getData}>
                        Search
                    </Button>

            </div>
          </div>
        );
    }
};


export default Search;
