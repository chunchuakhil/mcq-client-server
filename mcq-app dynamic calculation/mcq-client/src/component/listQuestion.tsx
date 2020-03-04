import React from "react";
import Services from "../services/services";
import { Link } from "react-router-dom";
import Axios from "axios";
export default class ListQuestions extends React.Component<any,any>{
    service=new Services();
    obj={
        id:"",
        data:""
    }
    // obj={}
    constructor(props:any){
        super(props)
        this.state={
            questions:[],
            answers:[]
        };
    }
    async componentDidMount(){
         await this.service.getListOfQuestions()
        .then((response:any)=>{
            console.log(response);
            
            this.setState({questions:response.data})
            // console.log("inside state",this.state.questions);
        })
        .catch((error)=>{console.log("error");
        })
        console.log(this.state.answers);
    }
    doSomeThing(x:any){
        var temp=Object.assign({},this.obj);
        console.log(x.target.name,x.target.value);
        temp.id=x.target.name;
        temp.data=x.target.value;
        console.log(temp);
        this.state.answers.push(temp)
        console.log(this.state.answers);
    }
    onClickSubmit(event:any){
        event.preventDefault()
        console.log(this.state.answers);
        this.service.submitAnswers(this.state.answers)
        .then((response)=>{console.log(response);
            document.write("your score is: ",response.data," %")
        })
        .catch((error)=>{console.log(error);
        })
    }
    
    render(){
    var x=this.state.questions.map((element:any) => {
        console.log("inside map...");
        return (
            <ol key={element.id}>
            {<h4> {element.id} {element.Ques}</h4>}
            <li><input type="radio"  name={element.id} value={element.opt1} onChange={(e)=>{this.doSomeThing(e)}}/>{element.opt1}<br/></li>
            <li> <input type="radio"   name={element.id} value={element.opt2}onChange={(e)=>{this.doSomeThing(e)}}/>{element.opt2}<br/></li>
            <li> <input type="radio"   name={element.id} value={element.opt3}onChange={(e)=>{this.doSomeThing(e)}}/>{element.opt3} <br/></li>
            <li> <input type="radio"  name={element.id} value={element.opt4}onChange={(e)=>{this.doSomeThing(e)}}/>{element.opt4} <br/></li>
            </ol>
        )
    })
    return(
        <div>
            <form action="/submit" method="POST">
            {x}
                <input type="submit" value="submit" onClick={(event)=>{this.onClickSubmit(event)}}/>
            {/* <Link to="/submit">
            </Link> */}
            </form>
        
        </div>
    )
}

}