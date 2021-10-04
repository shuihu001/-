function Queue() {
    //属性
    this.items = [];
    //方法
    Queue.prototype.enqueue = function(element) {
        this.items.push(element);
    }
    Queue.prototype.dequeue = function() {
        return this.items.shift();
    }
    Queue.prototype.front = function() {
        return this.items[0];
    }
    Queue.prototype.isEmpty = function() {
        return this.items.length === 0;
    }
    Queue.prototype.size = function() {
        return this.items.length;
    }
    Queue.prototype.toString = function() {
        let resultString = '';
        this.items.forEach(item => resultString+=item+' ');
        return resultString;
    }
}

//使用队列
let queue = new Queue()

queue.enqueue('abc');
queue.enqueue('cba');
queue.enqueue('nba');
queue.enqueue('bbc');
// console.log(queue);
// queue.dequeue();
// queue.dequeue();
// console.log(queue);
// console.log(queue.front());
// console.log(queue.size());
// console.log(queue.toString());
exports.Queue = Queue;
