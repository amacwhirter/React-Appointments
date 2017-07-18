import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {Table} from 'react-bootstrap';
import helper from "../utils/api.js";
import css from "../../public/css/main.scss";

var moment = require("moment");

class TableAppointments extends Component {

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
                    <tbody>

                    {this.props.results.map(({date, time, description, id}) => (
                        <tr key={ id }>
                            <td>{ id }</td>
                            <td>{ moment(date).format("MM-DD-YYYY") }</td>
                            <td>{ time }</td>
                            <td>{ description }</td>

                        </tr>
                    ))}

                    </tbody>
                </Table>
            </div>
        );
    }
}
export default TableAppointments;
