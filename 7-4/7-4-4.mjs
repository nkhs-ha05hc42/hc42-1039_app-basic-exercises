console.log("start", new Date())
const calc44 = (A1, A2) => {
    A1 = A1 + A2
    return A1
}

setTimeout(() => {
    const result = calc44(2, 3)
    console.log(result, new Date())
    setTimeout(() => {
        console.log("end", new Date())
    }, 2000)
}, 2000)