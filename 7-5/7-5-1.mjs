const promiseSetTimeout = (timeout) =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
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