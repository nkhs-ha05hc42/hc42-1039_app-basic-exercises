const calc76 = (A1) => {
    if (A1 > 100) {
        return
    }
    console.log(A1)
    calc76(A1 * 2)
}

const result1 = calc76(10)
const result2 = calc76(25)