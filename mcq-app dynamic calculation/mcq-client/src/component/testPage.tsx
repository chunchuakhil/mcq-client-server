import React from "react";
import { Constants } from "../constants/constants";
import axios from "axios";
import Services from "../services/services";
export default class TestPage extends React.Component<any,any>{
    service=new Services();
    
    constructor(props:any){
        super(props)
        this.state={
            questions:[]
        }
    }
    
    async componentDidMount(){
        await this.service.getListOfQuestions()
        .then((response:any)=>{console.log(response.data);
            let d=response.data;
            this.setState(this.state.questions.push(d))
        })
        .catch((error)=>{console.log(error);
        })
        console.log("inside state",this.state.questions);
        
    }



    render(){
        return(
            <div>
            this is exam
            {/* {this.state.questions.map((q:any)=><li>{q.name}</li>)} */}

            </div>
        )
    }

}