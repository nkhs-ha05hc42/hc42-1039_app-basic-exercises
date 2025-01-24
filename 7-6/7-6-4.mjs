const func1 = (A1) => {
    A1 = "Test1";
    return A1;
};

const func2 = (A2) => {
    A2 = A2 + "Test2";
    return A2;
};

const promiseSetTimeout = (timeout) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });

let B;

const promiseA = async () => {
    const A = "";
    await promiseSetTimeout(2000);
    B = func1(A);
};

const promiseB = async () => {
    await promiseSetTimeout(3000);
    if (B !== undefined) {
        const result = func2(B);
        console.log(result);
    }
};

const main = async () => {
    await promiseA();
    await promiseB();
};

main();
