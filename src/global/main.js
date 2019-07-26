// 输出全局变量 __filename 的值
console.log(__filename)

// 输出全局变量 __dirname 的值
console.log(__dirname)

// 定时器
function printHello() {
  console.log('Hello, World!')
}
// 0.2 秒后执行以上函数
setTimeout(printHello, 200)

// 停止定时器
function printHello() {
  console.log('Hello, World!')
}
// 0.2 秒后执行以上函数，返回定时器的句柄只
var t = setTimeout(printHello, 200)

// 清除定时器
clearTimeout(t)

console.log('end')
