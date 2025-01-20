console.log("start", new Date())
setTimeout(() => {
 console.log("★", new Date())
}, 2000)
setTimeout(() => {
    console.log("◆", new Date())
    setTimeout(() => {
        console.log("end", new Date())
    },2000)
}, 3000)