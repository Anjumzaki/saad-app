import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { SketchPicker } from 'react-color';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUserAsync } from "./store/actions";
import MyNavbar from './MyNavbar'
import axios from "axios";
import {Button} from 'reactstrap'

class DashBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            route: 1,
            bgImage:'',
            bgColor:'#fdffff',
            txtColor:'#fdffff',
            bordColor:'#fdffff',
            borderSize:'',
            mTop:'',
            mLeft:'',
            mRight:'',
            mBottom:'',
            ifType:'',
            ifLink:'',
            pTop:'',
            pBottom:'',
            pLeft:'',
            pRight:'',
            iWidth:'',
        }
        this.handleChange = this.handleChange.bind(this)
        this.imgHandle = this.imgHandle.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state)
    }
    imgHandle(e){
        this.setState({
            bgImage:e.target.files[0]
        })
        console.log(this.state)
    }

    componentWillMount(){
        console.log("userrrrrrrrrrrrr",this.props.match)
        // axios.get('http://localhost:3000/get/user/'+this.props.match.params.id)
        // .then((resp) =>console.log(resp))
        // if(this.props.user === null){
        //     // window.location = "http://localhost:3001/login"
        // }
    }
    render() {
        // console.log("userrrrrrrrrrrrr1",this.props.match)
         console.log("state",this.state)

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
                                        <input onChange={(e)=>this.imgHandle(e)} type="file" class="form-control" name="bgIamge" placeholder="Top" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <label>Background Color</label>
                                    <div class="form-group form-material floating" data-plugin="formMaterial">
                                        <input onChange={(e)=>this.handleChange(e)} type="color" class="form-control" name="bgColor" value={this.state.bgColor} /> 
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label>Text Color</label>
                                    <div class="form-group form-material floating" data-plugin="formMaterial">
                                        <input onChange={(e)=>this.handleChange(e)} type="color" class="form-control" name="txtColor" value={this.state.txtColor} /> 
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label>Border Color</label>
                                    <div class="form-group form-material floating" data-plugin="formMaterial">
                                        <input  onChange={(e)=>this.handleChange(e)} type="color" class="form-control" name="bordColor" value={this.state.bordColor} />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label>Border Size</label>
                                    <div class="form-group form-material floating" data-plugin="formMaterial">
                                        <select onChange={(e)=> this.setState({borderSize:  e.target.value})} name="borderSize" class="form-control" required="">
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
                                                <input  onChange={(e)=>this.handleChange(e)}  type="number" class="form-control" name="mTop" />
                                            </div>
                                            <div class="col-md-3">
                                                <input  onChange={(e)=>this.handleChange(e)} type="number" class="form-control" name="mRight" />
                                            </div>
                                            <div class="col-md-3">
                                                <input  onChange={(e)=>this.handleChange(e)} type="number" class="form-control" name="mBottom" />
                                            </div>
                                            <div class="col-md-3">
                                                <input  onChange={(e)=>this.handleChange(e)} type="number" class="form-control" name="mLeft" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <Button classname="btn btn-primary" onClick={() => 
                                    axios.post('http://localhost:3000/post/pd', {
                                        bgColor: this.state.bgColor,
                                        textColor: this.state.txtColor,
                                        borderColor: this.state.bordColor,
                                        borderSize: this.state.borderSize,
                                        mTop: this.state.mTop,
                                        mBottom: this.state.mBottom,
                                        mLeft: this.state.mLeft,
                                        mRight: this.state.mRight
                                    })
                                } class="fadeIn fourth" > Save</Button>
                            </div>
                        </div>
                    }
                    {this.state.route == 2 &&
                        <div>
                            <div class="form-group">
                        <label class="font-weight-bold">Type</label>
                        <select  onChange={(e)=> this.setState({ifType: e.target.value})}  name="ifType" class="form-control" id="sel1" >
                            <option value="" >Select</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Youtube">Youtube</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label    name="ifLink" class="font-weight-bold">Iframe Link</label>
                        <div class="row">
                            <div class="col-md-12">
                                <input onChange={(e)=>this.setState({ifLink: e.target.value})} type="text" class="form-control" name="password" placeholder="Enter Link" />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="font-weight-bold">Padding ( px )</label>
                        <div class="row">
                            <div class="col-md-3">
                                <input  onChange={(e)=>this.handleChange(e)}  type="number" class="form-control" name="pTop" placeholder="0" />
                            </div>
                            <div class="col-md-3">
                                <input  onChange={(e)=>this.handleChange(e)}  type="number" class="form-control" name="pRight" placeholder="0 px" />
                            </div>
                            <div class="col-md-3">
                                <input   onChange={(e)=>this.handleChange(e)}  type="number" class="form-control" name="pBottom" placeholder="0 px" />
                            </div>
                            <div class="col-md-3">
                                <input  onChange={(e)=>this.handleChange(e)}  type="number" class="form-control" name="pLeft" placeholder="0 px"/>
                            </div>
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="font-weight-bold">Width</label>
                        <div class="custom-control custom-radio">
                            <input value="auto" name="iWidth" onChange={(e)=>this.handleChange(e)} type="radio" class="custom-control-input" id="auto" name="defaultExampleRadios"/>
                            <label class="custom-control-label" for="auto">Auto</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input value="25%" name="iWidth" onChange={(e)=>this.handleChange(e)}  type="radio" class="custom-control-input" id="w-1-4" name="defaultExampleRadios"/>
                            <label class="custom-control-label" for="w-1-4">1/4</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input value="33%" name="iWidth" onChange={(e)=>this.handleChange(e)}  type="radio" class="custom-control-input" id="w-1-3" name="defaultExampleRadios"/>
                            <label  class="custom-control-label" for="w-1-3">1/3</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input value="50%" name="iWidth" onChange={(e)=>this.handleChange(e)}  type="radio" class="custom-control-input" id="w-1-2" name="defaultExampleRadios" />
                            <label class="custom-control-label"  for="w-1-2">1/2</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input  value="70%" name="iWidth" onChange={(e)=>this.handleChange(e)} type="radio" class="custom-control-input" id="w-2-3" name="defaultExampleRadios" />
                            <label class="custom-control-label"  for="w-2-3">2/3</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input value="85%" value="col-3" name="iWidth" onChange={(e)=>this.handleChange(e)}  type="radio" class="custom-control-input" id="w-3-4" name="defaultExampleRadios" />
                            <label class="custom-control-label"  for="w-3-4">3/4</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input value="100%" name="iWidth" onChange={(e)=>this.handleChange(e)}  type="radio" class="custom-control-input" id="ful" name="defaultExampleRadios" />
                            <label  class="custom-control-label"  for="ful"> Full</label>
                        </div>

                    </div>
                    <div class="modal-footer text-left">
                        <button  id="btn_create" class="btn btn-primary">Create</button>
                        <a class="btn btn-sm btn-white" data-dismiss="modal">Cancel</a>
                    </div>
                    <Button classname="btn btn-primary" onClick={() => 
                                    axios.post('http://localhost:3000/post/se', {
                                        ifType: this.state.ifType,
                                        ifLink: this.state.ifLink,
                                        width: this.state.defaultExampleRadios,
                                        pTop: this.state.pTop,
                                        pBottom: this.state.pBottom,
                                        pLeft: this.state.pLeft,
                                        pRight: this.state.pRight
                                    })
                                } class="fadeIn fourth" > Save</Button>
                        </div>
                    }
                     
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
)(DashBoard);