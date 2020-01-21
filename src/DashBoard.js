import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MyNavbar from './MyNavbar'
export default class DashBoard extends React.Component {
    render() {
        return (
            <div class="wrapper fadeInDown">
                Dash Board
            </div>
        );
    }
}
