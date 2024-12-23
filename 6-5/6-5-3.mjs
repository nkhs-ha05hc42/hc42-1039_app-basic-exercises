let sum = 0
for (let num = 1; num <= 100; num++) {
    if (num % 2 === 0) {
        sum = sum + num
        if (sum > 50) {
            console.log(sum)
            console.log(num)
            break
        }
    }
}