const dir = {
  name: 'Tom',
  sex: 'boy',
  age: 22,
  link: {
    address: 'gz',
    phone: 13612345678
  }
}

const timer = 'TIMER'
console.time(timer)

console.log(dir)

console.dir(dir)

console.dirxml(dir)

console.table(dir)

console.timeEnd(timer)

console.trace('trace')
