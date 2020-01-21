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
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Login" />
                        <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password" />
                        <input type="submit" class="fadeIn fourth" value="Log In" />
                    </form>
                    <div id="formFooter">
                        <a class="underlineHover" href="/signUp">Not have an Account? Register Here!</a>
                    </div>

                </div>
            </div>
        );
    }
}
