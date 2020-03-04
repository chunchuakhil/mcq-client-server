import CustSchema from "../database/schemaa";
import ExamImpl from "../implementation/examImpl"
export default class Controller {
    examObj = new ExamImpl()
    constructor() {
        console.log("Inside controller class");
    }
    listAllQuestionsC() {
        console.log("inside list");
        try {
            return this.examObj.listAllQuestion()
        } catch (error) {
            console.log("error inside listAllCustomer controller", error);
            return false;
        }
    }
    async checkAnswerC(req, res) {
        let ans;
        try {
            // console.log("request", req);
            //console.log("res.payload", req.payload);

            // return await this.examObj.checkAnswer(ans)
            if (req?.payload) {
                return await this.examObj.checkAnswer(req)
            }
            else {
                console.log("error in payload");
                return "no payload"
            }
        } catch (err) {
            console.log("error inside checkAnsweC", err);
            return false;
        }
    }
}