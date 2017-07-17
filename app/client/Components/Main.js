import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Jumbotron, Button, FieldGroup } from 'react-bootstrap';

import css from "../../public/css/main.scss";

class Main extends Component {

	render() {
		return (
			<div className="container">
						<Jumbotron>
							<h1>Appointment Scheduling</h1>
							<p>Add a new appointment, or search saved appointments below!</p>
							<p><Button bsStyle="primary">Add</Button></p>
						</Jumbotron>

						<form>
							<FieldGroup
								id="formControlsText"
								type="text"
								label="Text"
								placeholder="Enter text"
							/>
							<Button type="submit">
								Submit
							</Button>
						</form>
		</div>
		);
	}
}

export default Main;
