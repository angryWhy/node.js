const fs = require("fs")
const path = require("path")

//创建文件夹
const dirname = "./hahah"
if (!fs.existsSync(dirname)) {
    fs.mkdir(dirname, err => {
        console.log(err);
    })
}


//读取所有文件

fs.readdir(dirname, (err, files) => {
    console.log(files);
})
//
function getFiles(dir) {
    fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
        for (let file of files) {
            if (file.isDirectory()) {
                console.log(111);
                const filepath = path.resolve(dirname, file.name)
                getFiles(filepath)
            } else {
                console.log(file.name);
            }
        }
    })
}
getFiles(dirname)
//文件夹重命名