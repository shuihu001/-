const {Queue} = require('./1.队列的封装')

function ans(arr, num) {
    let queue = new Queue();
    for(let item of arr) {
        queue.enqueue(item);
    }
    while(queue.size() > 1){
        for(let i=0; i < num - 1; i++) {
            queue.enqueue(queue.dequeue());
        }
        queue.dequeue();
    }
    return arr.indexOf(queue.front())
}

console.log(ans(['a','b','c','d', 'e'], 3));
