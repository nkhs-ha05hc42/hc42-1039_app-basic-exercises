const 呼び出し元の関数 = async () => {
    const Promise関数の戻り値を入れる変数 = await Promise関数()
   }
   const promiseSetTimeout = (timeout) =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve()
    }, timeout)
    })
   const promiseA = async () => {
    await promiseSetTimeout(10000)
    console.log("★", new Date())
   }
   const promiseB = async () => {
    await promiseSetTimeout(20000)
    console.log("◆", new Date())
   }
   console.log("start", new Date())
   promiseA()
   promiseB()
   console.log("end", new Date())