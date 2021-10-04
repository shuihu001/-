function DoublyLinkedList() {
    function Node(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    this.head = null;
    this.tail = null;
    this.length = 0;
    DoublyLinkedList.prototype.append = (data) => {
        let newNode = new Node(data);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length+=1;
    }
    DoublyLinkedList.prototype.insert = (position, data) => {
        if(position<0 || position > this.length) return false;
        let newNode = new Node(data);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if(position === 0) {
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            } else if(position === this.length) {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
            } else {
                let index = 0;
                let current = this.head;
                while(index++ < position){
                    current=current.next;
                }
                newNode.next = current;
                newNode.prev = current.prev;
                current.prev.next = newNode;
                current.prev = newNode;
            }
        } 
        this.length+=1;

    }
    DoublyLinkedList.prototype.get = (position) => {
        if(position<0 || position>=this.length) return false;
        if(position<this.length/2) {
            let index = 0;
            let current = this.head;
            while(index++ < position) {
                current = current.next;
            }
            return current.data;
        } else {
            let index = this.length-1;
            let current = this.tail;
            while(index-- > position) {
                current = current.prev;
            }
            return current.data;
        }
    }
    DoublyLinkedList.prototype.indexOf = (data) => {
        let current = this.head;
        let index = 0;
        while(current) {
            if(current.data === data) return index;
            current = current.next;
            index+=1;
        }
        return -1;
    }
    DoublyLinkedList.prototype.update = (position, data) => {
        if( position<0 || position>= this.length) return false;
        if(position< this.length/2) {
            let current = this.head;
            let index = 0;
            while(index++ < position) {
                current = current.next;
            }
            current.data =data;
        } else {
            let current = this.tail;
            let index = this.length-1;
            while(index-- > position) {
                current = current.prev;
            }
            current.data =data;
        }

        return true;
    }
    DoublyLinkedList.prototype.removeAt = (position) => {
        if( position < 0 || position >= this.length || this.length===0) return null;
        let current = this.head;
        if(this.length===1) {
            this.head = null;
            this.tail = null;
        } else {
            if(position===0) {
                this.head.next.prev = null;
                this.head = this.head.next;
            } else if(position===this.length-1) {
                current = this.tail;
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
            } else {
                let index = 0;
                while(index++ < position) {
                    current = current.next;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
        }
        this.length-=1;
        return current.data 
    }

    DoublyLinkedList.prototype.remove = (data) => {
        let index = this.indexOf(data);
        return this.removeAt(index);
    }
    DoublyLinkedList.prototype.isEmpty = () => {
        return this.length === 0;
    }
    DoublyLinkedList.prototype.size = () => {
        return this.length;
    }

    DoublyLinkedList.prototype.toString = () => {
        return this.backwardString()
    }
    DoublyLinkedList.prototype.forwardString = () => {
        let current = this.tail;
        let res = '';
        while(current) {
            res+=current.data + ' ';
            current = current.prev;
        }
        return res;
    }
    DoublyLinkedList.prototype.backwardString = () => {
        let current = this.head;
        let res = '';
        while(current) {
            res+=current.data + ' ';
            current = current.next;
        }
        return res;
    }

    DoublyLinkedList.prototype.getHead = () => {
        return this.head.data;
    }
    DoublyLinkedList.prototype.getTail = () => {
        return this.tail.data;
    }
}

let list = new DoublyLinkedList();

list.append('abc');
list.append('bbc');
list.append('nba');
list.insert(0,'a');
list.insert(4,'b');
list.insert(2,'bb');
list.insert(2,'bbbb');
list.removeAt(1);
list.remove('bbbb');
console.log(list.toString());
console.log(list.get(4));
console.log(list.forwardString());
console.log(list.indexOf('b'));
console.log(list.isEmpty());
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
// console.log(list);