//某一个时刻执行
setTimeout(() => {
    console.log("计时器")
}, 500);
setInterval(() => {
    console.log("定时器")
}, 500);
setImmediate(() => {
    console.log("立即执行")
})
//进程的
process.nextTick(() => {
    console.log("process.nextTick");
})