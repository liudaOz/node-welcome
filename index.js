'use strict';


console.log('hello world');
console.log(2+2);

function sum(a, b) {
    return a+b;
}

console.log(sum(2, 4));


class MyMath {
    static sum = (a, b) => a+b;
    static sub = (a, b) => a-b;
    static div = (a, b) => a/b;
    static multy = (a, b) => a*b;
}


class Component {
    render() {
        return 'Test Component'
    }
}

const sum2n2 = MyMath.sum(2, 2);
console.log(sum2n2);
const multy3n5 = MyMath.multy(2, 2);
console.log(multy3n5);