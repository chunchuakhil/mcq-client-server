import ExamSchema from "./schemaa";

export default class DataBase {
    constructor() { }
    async listAllQues() {
        let value = null;
        try {
            value = await ExamSchema.examModel.find().sort({id:"1"});
            console.log("list is displaying\n", value[0]);
            if (value)
                return value;
            else
                return false;
        } catch (err) {
            console.log("error inside listAllQues-db", err);
            return false;
        }
    }

    async checkAnsw(ans) {
        let value = null;
        let x = null;
        try {
            value = await ExamSchema.examModel1.find().sort({ id: "1" });
            console.log("value---->", value);
            console.log("");
            
            let score = 0;
            let correctAnswers=0;
           
            for (let i = 0; i < ans.payload.length; i++) {
                console.log();
                
                for (x of value) {
                    if ((x.id == ans.payload[i].id) && x.ans == ans.payload[i].data) {
                        // score = score + 25;
                        correctAnswers++;

                    }
                }
            }
            score=(100/value.length)*correctAnswers;


            console.log("score--->", score);

            console.log("answer list", value[0]);
            if (value)
                return score;
            else
                return false;

        } catch (err) {
            console.log("error in checkanswer-db", err);
            return false;
        }
    }
}
