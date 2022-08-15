console.log(process);
function foo() {
    bar()
}
function bar() {
    //执行顺序
    console.trace("trace")
}
foo()