import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MyNavbar from './MyNavbar'
export default class Login extends React.Component {

    componentDidMount(){
        axios.get('http://localhost:3000/get/pd')
        .then((resp) =>console.log(resp))
       
        console.log()
    }
    render() {
        return (
            <div class="wrapper fadeInDown">
                Home
            </div>
        );
    }
}
