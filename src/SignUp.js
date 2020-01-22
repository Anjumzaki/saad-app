import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Button} from 'reactstrap'
import MyNavbar from './MyNavbar'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUserAsync } from "./store/actions";
import axios from 'axios'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            lName: '',
            userName: '',
            password: '',
            msg: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    signup() {
        console.log("in login")
        this.setState({ loading: true })
        if (this.state.fName) {
            if (this.state.lName) {
                if (this.state.userName) {
                        if (this.state.password) {
                                axios
                                    .post('http://localhost:3000/register', {
                                        fName: this.state.fName,
                                        lName: this.state.lName,
                                        userName: this.state.userName,
                                        password: this.state.password,
                                    })
                                    .then((response) => {
                                        console.log("resp1", response.data)
                                        this.props.getUserAsync(response.data.response._id)

                                        if (response.data.resp === "registered") {
                                            this.setState({ loading: false })
                                        } else if (response.data.resp === "exist") {
                                            this.setState({ msg: "username already exist" })
                                        }
                                    }).catch((error) => {
                                        console.log("mongodb get register error", error)
                                        this.setState({ msg: "signup info is incorrect" })
                                    })
                            
                        
                    }
                    else {
                        this.setState({
                            msg: 'Please Enter Correct Password'
                        })
                    }
                }
                else {
                    this.setState({
                        msg: 'Please enter your UserName'
                    })
                }
            }
            else {
                this.setState({
                    msg: 'Please enter your Last Name'
                })
            }
        }
        else {
            this.setState({
                msg: 'Please enter your First Name'
            })
        }

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
                    <p style={{textAlign: "center", color: "red"}}>{this.state.msg}</p>
                    <Button classname="btn btn-primary" onClick={() => this.signup()} class="fadeIn fourth" > Sign Up</Button>

                    <div id="formFooter">
                        <a class="underlineHover" href="/Login">Already have an Account? Login Here!</a>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.getUser.user,
});
const mapDispatchToProps = (dispatch, ownProps) =>
    bindActionCreators(
        {
            getUserAsync

        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);