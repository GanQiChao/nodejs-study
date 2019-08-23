async function timeout() {
  return 'hello world'
}

// output: Promise { 'hello world' }
// console.log(timeout())

// 因异步执行信息输出在同步之后
timeout().then(result => {
  console.log(result)
})

console.log('虽然在后面，但是我先执行')
