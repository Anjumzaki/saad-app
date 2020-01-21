import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MyNavbar from './MyNavbar'
export default class Login extends React.Component {
    render() {
        return (
            <div class="wrapper fadeInDown">
                <div id="formContent" style={{paddingTop:'50px',marginTop:'50px'}}>
                    <form>
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="First Name" />
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Last Name" />
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="User Name" />
                        <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password" />
                        <input type="submit" class="fadeIn fourth" value="Log In" />
                    </form>
                    <div id="formFooter">
                        <a class="underlineHover" href="/Login">Already have an Account? Login Here!</a>
                    </div>

                </div>
            </div>
        );
    }
}
