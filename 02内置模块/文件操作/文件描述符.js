const fs = require("fs")

fs.open("./hello.txt", (err, fd) => {
    if (err) {
        console.log(err);
        return
    }
    //fd,描述符
    console.log(fd);
    //通过描述符，去操作文件
    fs.fstat(fd, (err, info) => {
        console.log(info);
    })
})