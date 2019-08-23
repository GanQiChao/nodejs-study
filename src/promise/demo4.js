// resolve object, init
const init = { times: 1 }

const resolve = res => {
  console.trace('resolve')
  console.log(res.times++)
  return Promise.resolve(init)
}
const reject = err => {
  console.trace('reject')
  console.log(err)
  return Promise.reject('reject')
}

const interceptors = {
  request: [],
  response: []
}

function exec() {
  // 强制执行 resolve
  let promise = Promise.resolve(init)

  let chain = [resolve, undefined]

  interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected)
  })

  interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected)
  })

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift())
  }

  return promise
}

interceptors.request.push({ fulfilled: reject, rejected: reject })
interceptors.response.push({ fulfilled: reject, rejected: resolve })

exec().catch(err => console.log(`catch: ${err}`))
