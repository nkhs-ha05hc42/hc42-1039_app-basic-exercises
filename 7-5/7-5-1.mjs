const promiseSetTimeout = (timeout) =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
    // この例では処理が完了したことを返すだけなのでresolveには値を渡さない
    resolve()
    }, timeout)
    })

const promise751 = () => {
    promiseSetTimeout(10000)
    .then(() => {
    console.log("★", new Date())
    return promiseSetTimeout(10000)
    })
    .then(() => {
    console.log("◆", new Date())
    return promiseSetTimeout(5000)
    })
   }
console.log("start", new Date())
promise751()
console.log("end", new Date())