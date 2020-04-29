//dotenv is to require the env page which has private items
// require("dotenv").config();
const axios = require("axios")
// //fs is build into node- dont need to download it, it is the file system- allows on to save files
const fs = require("fs");
const api = require("./utils/api.js");
// const generatorMarkdown = require("generatorMarkdown");
const inquirer = require("inquirer")
//to get responses
const generateMarkdown = require("./utils/generateMarkdown.js");
//npm stands for node package manager - store things from the internet


const questions = [
    {
        type:"input",
        message: "What is your github username?",
        name:"username"
    },
    {
        type:"input",
        message:"What is the title?",
        name:"title"
    },
    {
        type:"input",
        message:"What is the Table of Contents?",
        name:"contents"
    },
    {
        type:"input",
        message:"What are the installations?",
        name:"installations"
    },
    {
        type:"input",
        message:"What is the usage?",
        name:"usage"
    },
    {
        type:"input",
        message:"What licenses?",
        name:"license"
    },
    {
        type:"input",
        message:"Who are the contributers?",
        name:"contributers"
    },
    {
        type:"input",
        message:"What are the test?",
        name:"test"
    },
    {
        type:"input",
        message:"Any questions",
        name:"questions"
    }
];

function init() {
//We are going to prompt the user.
inquirer.prompt(questions).then(response=>{
    // .then(response=>{ this is the same thing as above
    const answers = {...response}
    console.log(answers)
        // axios.get(`https://api.github.com/users/${username}`)

    api.getUser(answers.username).then(res=>{
        console.log(res);
      console.log(res.data.avatar_url);
        const newData = {...answers, image: res.data.avatar_url, userEmail:res.data.email}
        console.log(newData);
        const readMetext = generateMarkdown(newData);
        writeToFile("README.md", readMetext);
        // api.getUser(response.username)
    })   
    })       
.catch(error =>{
    console.log(error);})
}
//why isn't this working? How do I relate this to the generate mark down?
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err)=> console.log(err));
}

init();