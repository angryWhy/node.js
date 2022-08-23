const EventEmitter = require("events")

//创建发射器
const emitter = new EventEmitter()

//监听某一个事件
emitter.on('click', (args) => {
    console.log('监听111到click事件');
})
emitter.on('click', (args) => {
    console.log('监听222到click事件');
})
const listen = (args) => {
    console.log(args)
}
emitter.on('click', listen)
setTimeout(() => {
    emitter.emit("click", "payload1", "payload2")
    emitter.off("click", listen)
}, 2000);