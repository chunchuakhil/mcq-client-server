import DataBase from '../database/db'
import ITest from '../interface/iTest';

export default class ExamImpl implements ITest {

    dbObj = null;
    constructor() {
        this.dbObj = new DataBase();
        console.log("inside ExamImpl class");
    }
    async listAllQuestion() {
        try {
            return await this.dbObj.listAllQues();
        } catch (err) {
            console.log("error in listAllQ->ExamImp", err);
        }
    }
    async checkAnswer(ans: any) {
        try {
            return await this.dbObj.checkAnsw(ans);
        } catch (err) {
            console.log("error in checkAnsw->ExamImp", err);
        }
    }
}