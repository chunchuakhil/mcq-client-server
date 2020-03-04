import Connection from './src/database/connection';
import Controller from './src/controller/controller'
import ExamSchema from './src/database/schemaa'
import Routes from './src/routes/routes'
const Hapi = require('hapi')

const server = Hapi.server({
    port: 8080,
    // host: 'localhost',
    host: '10.57.18.47',
    "routes": { "cors": true }
});


async function dbConfig() {
    var con = new Connection();
    await con.connectToDB();
}
async function schemaConfig() {
    var schem = new ExamSchema();
    await schem.createSchema();
}

async function addingAnswers() {
    var schem = new ExamSchema();
    await schem.createAnswers();
}

async function addingQuestions() {
    var use = new ExamSchema();
    await use.createQues();
}


async function start() {
    try {
        await server.start();
    } catch (err) {
        console.log(err);
    }
    console.log("server running..", server.info.uri);
    await dbConfig();
    await schemaConfig();
    await addingQuestions();
    await addingAnswers();
}

server.route({
    method: 'GET',
    path: '/hello',
    handler: function (req, res) {
        return "hello client"
    }
});

server.route({
    method: 'POST',
    // path: '/score',
    path: Routes.checkAnswer,
    handler: function (req, res) {
        const ctrobj = new Controller();
        // console.log("req in index: ", req.payload);
        return ctrobj.checkAnswerC(req, res);
    }
});

server.route({
    method: 'GET',
    // path: '/list',
    path: Routes.listAllQuestions,
    handler: function (req, res) {
        const ctrobj = new Controller();
        return ctrobj.listAllQuestionsC();
    }
});;


start();
