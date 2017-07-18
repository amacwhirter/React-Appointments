import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {
    Jumbotron,
    Button,
    FormControl,
    FormGroup,
    ControlLabel,
    Table,
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import TableAppointments from "./Table";
import Search from "./Search";
import Add from "./Add";
import Footer from "./Footer";

import helper from "../utils/api";

import css from "../../public/css/main.scss";

class Main extends Component {

  constructor(){
          super();
          this.state = {
              data:[],
              noresult: false
          };

          this.setParent = this.setParent.bind(this);
          this.found = this.found.bind(this);

      }

      setParent(response){
          this.setState({data: response});
          //console.log(response);
      }

      found(data){
          this.setState({noresult: true});
      }


      componentDidMount(){
          helper.getData()
              .then(function (data) {
                  this.setState({data: data.data});
                  //console.log(this.state.data);
              }.bind(this))

              .catch(function (err) {
                  console.log(err);
              }.bind(this));
      }

    render() {
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Appointment Scheduling</h1>
                    <p>Add a new appointment, or search saved appointments below!</p>
                </Jumbotron>
                <hr/>
                <Search setParent = {this.setParent} found = {this.found} results = {this.state.data} />
                <hr/>
                <TableAppointments results = {this.state.data} setParent = {this.setParent} status = {this.state.noresult} />
                <br />
                <Footer />

            </div>

        );
    }
}

export default Main;
