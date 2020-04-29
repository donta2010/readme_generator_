function generateMarkdown(data) {
  return `
 ${data.title}
 Username : ${data.username}
 Table of Contents
 ${data.contents}
 Installations
 ${data.installations}
 Usage:${data.usage}
 License:${data.license}
 Contributers:${data.contributers}
 Test:${test}
 Questions:${questions}

`;
}

module.exports = generateMarkdown;










// let fs =require("fs");
// const makeResponse = {

// function generateMarkdown() {}



// module.exports = makeResponse;