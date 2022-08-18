const path = require("path")

const base = "/user"
const road = "a.txt"
//不可取拼接，linux和windows不一样文件符号
const pa = base + "/" + road


//path模块
//自动转义
const filePath = path.resolve(base, road)