const promiseSetTimeout = (timeout) =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve()
    }, timeout)
    })
const promise753 = () => {
    promiseSetTimeout(2000)
    .then(() => {
        console.log("★", new Date())
        return promiseSetTimeout(3000)
    })
    .then(() => {
     console.log("◆", new Date())
    return promiseSetTimeout(5000)
    })
    .then(() => {
    console.log("end", new Date())
    })
}
console.log("start", new Date())
promise753()