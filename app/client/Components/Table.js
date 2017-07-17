import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {Table} from 'react-bootstrap';

import helper from "../utils/api";

import css from "../../public/css/main.scss";

class TableAppointments extends Component {
	constructor(){
			 super();
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

										<tbody>

										{this.props.results.map(({date, time, description, id}) => (
												<tr key={ id }>
														<td>{ date }</td>
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
