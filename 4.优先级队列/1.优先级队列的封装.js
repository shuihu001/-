function PriorityQueue() {
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    this.items = [];
    PriorityQueue.prototype.enqueue = function(element, priority) {
        let queueElement = new QueueElement(element, priority);
        if(this.items.length == 0) {
            this.items.push(queueElement);
        } else {
            let added = false;
            for(let i=0; i< this.items.length; i++) {
                if(queueElement.priority < this.items[i].priority) {
                    this.items.splice(i,0, queueElement)
                    added = true;
                    break;
                }
            }
            if(!added) {
                this.items.push(queueElement);
            }
        }
    }
    PriorityQueue.prototype.dequeue = function() {
        return this.items.shift();
    }
    PriorityQueue.prototype.front = function() {
        return this.items[0];
    }
    PriorityQueue.prototype.isEmpty = function() {
        return this.items.length === 0;
    }
    PriorityQueue.prototype.size = function() {
        return this.items.length;
    }
    PriorityQueue.prototype.toString = function() {
        let resultString = '';
        this.items.forEach(item => resultString+=item.element+'-' + item.priority + ' ');
        return resultString;
    }

}

let pq = new PriorityQueue();

pq.enqueue('abc',111);
pq.enqueue('cbd',200);
pq.enqueue('nba',50);
pq.enqueue('cbb',60);
console.log(pq);
console.log(pq.toString());