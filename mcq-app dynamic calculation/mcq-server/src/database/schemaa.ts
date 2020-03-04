const mongoose = require('mongoose');
import Connection from "./connection";
export default class ExamSchema {
    static examModel;
    static examModel1;

    async createSchema() {
        //required: true
        const examSchema = Connection.connectionToDB.Schema({
            id: { type: Number, unique: true },
            Ques: { type: String },
            opt1: { type: String },
            opt2: { type: String },
            opt3: { type: String },
            opt4: { type: String }
        })

        const answerSchema = Connection.connectionToDB.Schema({
            id: { type: Number, unique: true },
            ans: { type: String }
        })

        try {
            ExamSchema.examModel = await Connection.connectionToDB.model('questions', examSchema)
            ExamSchema.examModel1 = await Connection.connectionToDB.model('answers', answerSchema)
            console.log("Models is created");
        } catch (error) {
            console.log("error inside ques model-creation------->:", error);
        }
    }

    async createQues() {
        await mongoose.connection.dropCollection('questions', function(err, result) {
            if(err)console.log("error in ques drop",err);
            else console.log("deleted collections i s......",result);
        }
        );
        
        var ques1 = ExamSchema.examModel({
            id: "1",
            Ques: "Capital of India is?",
            opt1: "Mumbai",
            opt2: "Delhi",
            opt3: "Chennai",
            opt4: "Kolkatta",
        })
         ques1.save(function (err, ques) {
            if (err) {
                console.log(err);
            } else {
                console.log("ques created!", ques.id);
            }
        })
        var ques2 = ExamSchema.examModel({
            id: "2",
            Ques: "National bird of India is?",
            opt1: "Parrot",
            opt2: "Crow",
            opt3: "Penguin",
            opt4: "Peacock",
        })
         ques2.save(function (err, ques) {
            if (err) {
                console.log(err);
            } else {
                console.log("ques created!", ques.id);
            }
        })

        var ques3 =  ExamSchema.examModel({
            id: "3",
            Ques: "National animal of India is?",
            opt1: "Tiger",
            opt2: "Lion",
            opt3: "Elephant",
            opt4: "Leopard",
        })
         ques3.save(function (err, ques) {
            if (err) {
                console.log(err);
            } else {
                console.log("ques created!", ques.id);
            }
        })

        var ques4 =  ExamSchema.examModel({
            id: "4",
            Ques: "Number of states in India?",
            opt1: "28",
            opt2: "29",
            opt3: "27",
            opt4: "26",
        })

         ques4.save(function (err, ques) {
            if (err) {
                console.log(err);
            } else {
                console.log("ques created!", ques.id);
            }
        })


        var ques5 =ExamSchema.examModel({
            id: "5",
            Ques: "Number of states in India?",
            opt1: "28",
            opt2: "29",
            opt3: "27",
            opt4: "26",
        })

         ques5.save(function (err, ques) {
            if (err) {
                console.log(err);
            } else {
                console.log("ques created!", ques.id);
            }
        })


    }

    async createAnswers() {
        await mongoose.connection.dropCollection('answers', function(err, result){
            if(err)console.log("error in ans drop",err);
            else console.log("deleted collections answers......",result);
        })

        var ans1 = ExamSchema.examModel1({
            id: "1",
            ans: "Delhi"
        })
        ans1.save(function (err, ans) {
            if (err)
                console.log(err);
            else
                console.log("answer1 entered");
        })

        var ans2 = ExamSchema.examModel1({
            id: "2",
            ans: "Peacock"
        })
        ans2.save(function (err, ans) {
            if (err)
                console.log(err);
            else
                console.log("answer2 entered");
        })

        var ans3 = ExamSchema.examModel1({
            id: "3",
            ans: "Tiger"
        })
        ans3.save(function (err, ans) {
            if (err)
                console.log(err);
            else
                console.log("answer3 entered");
        })
        var ans4 = ExamSchema.examModel1({
            id: "4",
            ans: "29"
        })
        ans4.save(function (err, ans) {
            if (err)
                console.log(err);
            else
                console.log("answer4 entered");
        })
        var ans5 = ExamSchema.examModel1({
            id: "5",
            ans: "29"
        })
        ans5.save(function (err, ans) {
            if (err)
                console.log(err);
            else
                console.log("answer5 entered");
        })

    }

}