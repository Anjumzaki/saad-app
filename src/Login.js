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

    login() {
        console.log("Login")
        this.setState({ loading: true })
        if (this.state.userName) {
            // if (this.state.userName.length > 5) {
            if (this.state.password) {
                console.log("Loginpass")

                axios
                    .post('http://localhost:3000/login', {
                        userName: this.state.userName,
                        password: this.state.password
                    })
                    .then((response) => {
                        console.log("resp1", response.data.response._id)
                        this.props.getUserAsync(response.data.response._id)
                        
                        setTimeout(() => {
                      
                        if (response.data.resp === "match") {
                            window.location = "http://localhost:3001/dashboard/"+response.data.response._id
                            this.setState({ loading: false })

                        } else if (response.data.resp === "wrong") {
                            window.location = "http://localhost:3001/home"
                            this.setState({ msg: "password is incorrect" })
                        }
                    }, 2000) 
                    }).catch((error) => {
                        console.log("mongodb get register error", error)
                        this.setState({ msg: "login info is incorrect" })
                    })
        
            }
            else {
                this.setState({
                    msg: 'Please enter your Password'
                })
            }
        }
        else {
            this.setState({
                msg: 'Please enter your Username'
            })
        }
        this.setState({
            loading: false
        })
    }



    render() {
        return (

            <div class="wrapper fadeInDown">
                <div id="formContent" style={{paddingTop:'50px',marginTop:'50px'}}>
                    <form>
                        <input type="text" id="login" class="fadeIn second" value={this.state.userName} onChange={this.handleChange} name="userName" placeholder="User Name" />
                        <input type="text" id="password" class="fadeIn third"value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
                        {/* <input type="submit" class="fadeIn fourth" value="Log In" /> */}
                    </form>
                    <p style={{textAlign: "center", color: "red"}}>{this.state.msg}</p>
                    <Button classname="btn btn-primary" onClick={() => this.login()} class="fadeIn fourth" > Log In</Button>

                    <div id="formFooter">
                        <a class="underlineHover" href="/signUp">Not have an Account? Register Here!</a>
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