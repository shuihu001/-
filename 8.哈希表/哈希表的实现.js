function HashTable() {
    //属性
    this.storage = [];
    this.count = 0;
    this.limit = 7;

    //方法
    HashTable.prototype.hashFunc = function (str, size) {
        let hashCode = 0;
        //遍历，计算hash值
        for (let i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i);
        }
        //取余
        let index = hashCode % size;
        return index;

    }
    HashTable.prototype.put = function (key, value) {
        let index = this.hashFunc(key, this.limit);
        let bucket = this.storage[index];
        if (bucket == null) {
            bucket = [];
            this.storage[index] = bucket;
        }
        //是否修改数据
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] === key) {
                tuple[1] = value;
                return
            }
        }
        bucket.push([key, value]);
        this.count += 1;
        //判断是否需要扩容
        if (this.count > this.limit * 0.75) {
            let newSize = this.limit * 2;
            let newPrime = this.getPrime(newSize);
            this.resize(newPrime);
        }
    }
    HashTable.prototype.get = function (key) {
        let index = this.hashFunc(key, this.limit);
        let bucket = this.storage[index];
        if (bucket == null) return null;
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] == key) {
                return tuple[1];
            }
        }
        return null;
    }

    HashTable.prototype.remove = function (key) {
        let index = this.hashFunc(key, this.limit);
        let bucket = this.storage[index];
        if (bucket == null) return null;
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] == key) {
                bucket.splice(i, 1);
                this.count -= 1;
                //缩小容量、
                if (this.limit > 7 && this.count < this.limit * 0.25) {
                    let newSize = Math.floor(this.limit / 2);
                    let newPrime = this.getPrime(newSize);
                    this.resize(newPrime);
                }
                return tuple[1];

            }
        }
    }

    HashTable.prototype.isEmpty = function () {
        return this.count == 0;
    }
    HashTable.prototype.size = function () {
        return this.count;
    }

    HashTable.prototype.resize = function (newLimit) {
        let oldStorage = this.storage;

        this.storage = [];
        this.count = 0;
        this.limit = newLimit;
        for (let i = 0; i < oldStorage.length; i++) {
            let bucket = oldStorage[i];
            if (bucket == null) {
                continue
            }
            for (let j = 0; j < bucket.length; j++) {
                let tuple = bucket[j];
                this.put(tuple[0], tuple[1]);
            }
        }

    }
    HashTable.prototype.isPrime = function (num) {
        if (num === 1) return true;
        let temp = parseInt(Math.sqrt(num));
        for (let i = 2; i <= temp; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true;
    }
    HashTable.prototype.getPrime = function(num) {
        while(!this.isPrime(num)) {
            num++;
        }
        return num;
    }

}


let ht = new HashTable();
ht.put('abc', '123');
ht.put('bbc', '234');
ht.put('bcc', '345');
console.log(ht.size());

console.log(ht.get('abc'));
ht.put('abc', '111');
console.log(ht.get('abc'));
ht.remove('abc');
console.log(ht.get('abc'));
console.log(ht.size());