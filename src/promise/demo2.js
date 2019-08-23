async function timeout(flag) {
  if (flag) {
    return 'hello world'
  } else {
    throw 'my god, failure'
  }
}
// 调用Promise.resolve() 返回promise 对象。
console.log(timeout(true))

// 调用Promise.reject() 返回promise 对象
timeout(false).catch(err => {
  console.log(err)
})
