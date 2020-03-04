const mongoose = require('mongoose');

export default class Connection {
    static connectionToDB = null;
    async connectToDB() {
        try {
            Connection.connectionToDB = await mongoose.connect('mongodb://localhost:27017/exams',
                { useNewUrlParser: true, useUnifiedTopology: true }
            );
            // console.log("Connection.connectionToDB------>", Connection.connectionToDB);
            console.log("connected to DB");
        } catch (error) {
            console.log("error inside conncet", error);
        }
    }
}