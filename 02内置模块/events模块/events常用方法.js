const EventEmitter = require("events")
const emitter = new EventEmitter()
emitter.on('click', (args) => {
    console.log('click事件');
})
emitter.on("tap", (args) => {
    console.log('tap事件');
})
//只监听一次
emitter.once("tap", (args) => {
    console.log('tap事件');
})
//事件名
console.log(emitter.eventNames());
//具体函数
console.log(emitter.listeners());
//数量
console.log(emitter.listenerCount());1