import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MyNavbar from './MyNavbar'
import axios from 'axios'
export default class Login extends React.Component {

    componentDidMount(){
        axios.get('http://localhost:3000/get/pd')
        .then((resp) =>console.log(resp))

        axios.get('http://localhost:3000/get/se')
        .then((resp) =>console.log(resp))

        // http://localhost:3000/getImages/saad.jpg
    }
    render() {
        return (
            <div style={{ height:'100vh',width:'100%',  backgroundImage:'url(https://i.picsum.photos/id/506/1000/1000.jpg?blur=2)',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed',backgroundSize:'cover',backgroundColor:'black'}} class="wrapper">
                <div className='row'>
                        <iframe width="50%" height="400px" src="https://www.youtube.com/embed/dlQ-5rAdbBA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="50%" height="400px" src="https://www.youtube.com/embed/dlQ-5rAdbBA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="50%" height="400px" src="https://www.youtube.com/embed/dlQ-5rAdbBA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="50%" height="400px" src="https://www.youtube.com/embed/dlQ-5rAdbBA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
               
            </div>
        );
    }
}
