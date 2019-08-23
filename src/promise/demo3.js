/**
 * 现在写一个函数，让它返回promise 对象
 * 该函数的作用是2s 之后让数值乘以2
 * @param {Number} num
 */
function doubleAfter2seconds(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2 * num)
    }, 2000)
  })
}

/**
 * 现在再写一个 async 函数，从而可以使用 await 关键字
 * await 后面放置的就是返回 promise 对象的一个表达式
 * 所以它后面可以写上 doubleAfter2seconds 函数的调用
 */
async function testResult() {
  console.log('请等待异步的函数完成')

  // let result = await doubleAfter2seconds(30)
  // console.log(result)
  let first = await doubleAfter2seconds(30)
  console.log('2s ...')
  let second = await doubleAfter2seconds(50)
  console.log('4s ...')
  let third = await doubleAfter2seconds(30)
  console.log('6s ...')

  console.log(first + second + third)

  console.log('异步未能按照同步效果完成')
}

testResult()
