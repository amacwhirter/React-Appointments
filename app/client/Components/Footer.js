import React, {Component} from 'react';

import css from "../../public/css/main.scss";


class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <a className="footer-text" href="http://amacwhirter.com" target="_blank">Ashley D MacWhirter</a>
                    <br />
                    <a className="footer-text" href="https://github.com/amacwhirter/React-Appointments" target="_blank">App GitHub Repo</a>
                </div>
            </footer>
        );
    }
}

export default Footer;
