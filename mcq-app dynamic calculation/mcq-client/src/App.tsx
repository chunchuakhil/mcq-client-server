import React from 'react';
import './App.css';
import ListQuestions from "./component/listQuestion";
import {  
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './component/homePage';
export default class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          {/* <Route exact path="/test" component={TestPage}></Route> */}
          <Route exact path="/test" component={ListQuestions}></Route>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
