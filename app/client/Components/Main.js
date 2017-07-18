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

import helper from "../utils/api";

import css from "../../public/css/main.scss";

class Main extends Component {

    render() {
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Appointment Scheduling</h1>
                    <p>Add a new appointment, or search saved appointments below!</p>
                </Jumbotron>
                <hr/>
                <Search />
                <hr/>
                <TableAppointments />
            </div>
        );
    }
}

export default Main;
