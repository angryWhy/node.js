var name1 = "wzx"
console.log(name1);
//不能，node中有模块概念，在模块定义只属于我的模块，不能随便放在全局对象中
console.log(global.name1);