import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Button} from 'reactstrap'
import MyNavbar from './MyNavbar'
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            lName: '',
            userName: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }


    render() {
        console.log("state", this.state)
        return (
            <div class="wrapper fadeInDown">
                <div id="formContent" style={{paddingTop:'50px',marginTop:'50px'}}>
                    <form>
                        <input type="text" id="login" class="fadeIn second" value={this.state.fName} onChange={this.handleChange} name="fName" placeholder="First Name" />
                        <input type="text" id="login" class="fadeIn second" value={this.state.lName} onChange={this.handleChange} name="lName" placeholder="Last Name" />
                        <input type="text" id="login" class="fadeIn second" value={this.state.userName} onChange={this.handleChange} name="userName" placeholder="User Name" />
                        <input type="text" id="password" class="fadeIn third" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
                    </form>
                    <Button classname="btn btn-primary" onClick={() => console.log("ho")} class="fadeIn fourth"  > Sign Up</Button>

                    <div id="formFooter">
                        <a class="underlineHover" href="/Login">Already have an Account? Login Here!</a>
                    </div>

                </div>
            </div>
        );
    }
}
