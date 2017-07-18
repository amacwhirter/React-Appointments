import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {FormGroup, InputGroup, FormControl, Button, ControlLabel} from 'react-bootstrap';
import Add from "./Add";

import helper from "../utils/api";

import css from "../../public/css/main.scss";

class Search extends React.Component {


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
