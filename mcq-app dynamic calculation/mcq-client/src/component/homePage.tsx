import React from "react";
import { Link } from "react-router-dom";
import Services from "../services/services";

export default class HomePage extends React.Component{
    service=new Services();
    render(){
        return(
            <div>
            <ul>
            <Link to="/test"><h2>Start Test</h2></Link><br/><br/>
            </ul>
            </div>
        )
    }
    
}