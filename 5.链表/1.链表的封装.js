function LinkedList() {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    this.head = null;
    this.length = 0;
    LinkedList.prototype.append = function (data) {
        let newNode = new Node(data);
        if(this.length === 0){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length+=1;
    }
    LinkedList.prototype.toString = function () {
        let current = this.head;
        let listString = "";
        while(current) {
            listString+=current.data+' ';
            current = current.next;
        }
        return listString;

    }
    LinkedList.prototype.insert = function (position, data) {
        if(position<0 || position > this.length) return false;
        let newNode = new Node(data);
        if(position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
             let index = 0;
             let current = this.head;
             let pre = null;
             while(index++ < position) {
                 pre = current;
                 current = current.next;
                }
                newNode.next = current;
                pre.next = newNode;
        }
        this.length += 1;
        return true;
    }
    LinkedList.prototype.get = function (position) {
        if (position < 0 || position >= this.length) return null;
        let current = this.head;
        let index = 0;
        while (index++ < position) {
            current = current.next;
        }
        return current.data;
    }
    LinkedList.prototype.indexOf = function (data) {
        let current = this.head;
        let index = 0;
        while(current) {
            if(current.data === data) {
                return index;
            }
            current =current.next;
            index+=1;
        }
        return -1;
    }
    LinkedList.prototype.update = function (position, element){
        if (position < 0 || position >= this.length) return null;
        let current = this.head;
        let index = 0;
        while (index++ < position) {
            current = current.next;
        }
        current.data = element;
    }
    LinkedList.prototype.removeAt = function (position) {
        if (position < 0 || position >= this.length) return null;
        let current = this.head;
        if(position == 0) {this.head = this.head.next}
        else{
            let index = 0;
            let pre = null;
            while (index++ < position) {
                pre = current;
                current = current.next;
            }
            pre.next = current.next;
        } 
        this.length -= 1;
        return current.data;
    }
    LinkedList.prototype.remove = function (data) {
        let positon = this.indexOf(data);
        return this.removeAt(positon)
    }
    LinkedList.prototype.isEmpty = function () {
        return this.length === 0;
    }
    LinkedList.prototype.size = function () {
        return this.length;
    }
}

let list = new LinkedList();

list.append('abc');
list.append('cba');
list.append('cdd');
list.append('cbb');
list.insert(2,'aaa')
list.update(2,'bbb')
console.log(list.get(2));
console.log(list.indexOf('bbb'));
list.removeAt(2)
list.remove('cbb')
console.log(list.toString());
console.log(list.isEmpty());
console.log(list.size());
