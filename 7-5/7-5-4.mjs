const func1 = (A1) => {
    A1 = "Test1";
    return A1;
};

const func2 = (A2) => {
    A2 = "New" + A2;
    return A2;
};

const promiseSetTimeout = (timeout) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });

const promise754 = () => {
    let B;

    promiseSetTimeout(2000)
        .then(() => {
            const A = "";
            B = func1(A);
            return promiseSetTimeout(3000);
        })
        .then(() => {
            const result = func2(B);
            console.log(result);
            return promiseSetTimeout(4000);
        });
};

promise754();
