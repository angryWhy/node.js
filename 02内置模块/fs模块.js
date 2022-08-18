const fs = require("fs")

//读取文件信息
const filePath = "./hello.txt"

//方式一:同步
const info = fs.statSync(filePath)
console.log("后续执行代码");
console.log(info);

//方式二:异步,不会阻塞
console.log("info");
fs.stat(filePath, (err, info) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(info);
})

//方式三:Promise
fs.promises.stat(filePath).then(info => {
    console.log(info);
}, err => {
    console.log(err);
})