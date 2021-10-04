// import Stack from './1.栈的封装';
const Stack = require('./1.栈的封装')

function dec2bin(decNumber) {
    //1,定义栈对象
    let s =  new Stack.Stack();
    // console.log(s.Stack);
    //2。循环
    while (decNumber > 0) {
        s.push(decNumber % 2);
        decNumber = Math.floor(decNumber / 2)
    }
    let binaryString = '';
    while (!s.isEmpty()){
        binaryString +=s.pop()
    }
    console.log(binaryString);
}

dec2bin(100);