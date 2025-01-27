const func1 = (A1) => {
    A1 = "Test1";
    return A1;
};

const func2 = (A2) => {
    A2 = "Test2";
    return A2;
};

const func3 = (A3, B3) => {
    A3 = A3 + B3;
    return A3;
};

const promiseSetTimeout = (timeout) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });

const promise755 = () => {
    promiseSetTimeout(3000)
        .then(() => {
            const result = func3(B, C)
            console.log(result);
            return promiseSetTimeout(2000);
        });
};

let B;
const A = "";
B = func1(A);
const C = func2(B);
promise755();