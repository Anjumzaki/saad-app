import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { SketchPicker } from 'react-color';
import MyNavbar from './MyNavbar'
export default class DashBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            route: 1
        }
    }
    render() {

        return (
            <div class="row">
                <div className="dashBoard">
                    <div onClick={() => this.setState({ route: 1 })} className="Mylinks">Page Designs</div>
                    <div onClick={() => this.setState({ route: 2 })} className="Mylinks">Set Elements </div>
                    <div onClick={() => this.setState({ route: 3 })} className="Mylinks">Sign Out</div>
                </div>
                <div className="content">
                    {this.state.route == 1 &&
                        <div>
                            <div class="row">
                                <div class="col-12">
                                    <label>Background Image</label>
                                    <div class="form-group form-material floating" data-plugin="formMaterial">
                                        <input type="file" class="form-control" name="password" placeholder="Top" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <label>Background Color</label>
                                    <div class="form-group form-material floating" data-plugin="formMaterial">
                                        <input type="color" class="form-control" name="favcolor" value="#ff0000" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label>Text Color</label>
                                    <div class="form-group form-material floating" data-plugin="formMaterial">
                                        <input type="color" class="form-control" name="password" value="blue" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label>Border Color</label>
                                    <div class="form-group form-material floating" data-plugin="formMaterial">
                                        <input type="color" class="form-control" name="password" value="blue" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label>Border Size</label>
                                    <div class="form-group form-material floating" data-plugin="formMaterial">
                                        <select name="type" class="form-control" required="">
                                            <option value="">Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label>Page Margin ( px )</label>
                                    <div class="form-group form-material floating" data-plugin="formMaterial">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <input type="number" class="form-control" name="password" />
                                            </div>
                                            <div class="col-md-3">
                                                <input type="number" class="form-control" name="password" />
                                            </div>
                                            <div class="col-md-3">
                                                <input type="number" class="form-control" name="password" />
                                            </div>
                                            <div class="col-md-3">
                                                <input type="number" class="form-control" name="password" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>

            </div>
        );
    }
}
