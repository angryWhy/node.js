const fs = require("fs")
const content = "hello-wzx"
fs.writeFile("./a.txt", content, { flag: "w+" }, err => {
    console.log(err);
})