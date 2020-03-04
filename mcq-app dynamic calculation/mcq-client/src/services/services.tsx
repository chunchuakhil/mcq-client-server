//axios
import axios from "axios";
import { Constants } from "../constants/constants";
// import HomePage from "../component/homePage";
export default class Services{
    getListOfQuestions(){
         const URL=Constants.serverPath+"/list";
         return axios.get(URL);
    }
    hello(){
        const URL=Constants.serverPath+"/";
        return axios.get(URL);
    }
    submitAnswers(ans:any){
        const URL=Constants.serverPath+"/score";
        return axios.post(URL,ans);
    }
}