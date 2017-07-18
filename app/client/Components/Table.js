import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {Table} from 'react-bootstrap';

import helper from "../utils/api";

import css from "../../public/css/main.scss";

class TableAppointments extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        helper.getData().then(function(res) {
            this.setState({data: res.data});
            console.log(this.state.data);
        }.bind(this)).catch(function(err) {
            console.log(err);
        }.bind(this));
    }

    render() {

        return (

            <div className="container">
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Description</th>
                        </tr>
                    </thead>

                    <tbody>{this.state.data.map(function() {

                            return (
                                <tr key={this.state.id}>
                                    <td>{this.state.id}</td>
                                    <td>{this.state.date}</td>
                                    <td>{this.state.time}</td>
                                    <td>{this.state.description}</td>
                                </tr>
                            )

                        })}</tbody>
                </Table>
            </div>
        );
    }
}

export default TableAppointments;
