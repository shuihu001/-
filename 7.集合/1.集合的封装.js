function Set() {
    this.items = {};

    Set.prototype.add = function(value) {
        if (this.has(value)) return false;
        this.items[value] = value;
        return true;
    }
    Set.prototype.has = function(value) {
        return this.items.hasOwnProperty(value)
    }

    Set.prototype.remove = function(value)  {
        if (!this.has(value)) return false;
        delete this.items[value];
        return true;
    }

    Set.prototype.clear =function()  {
        this.items = {};
    }
    Set.prototype.getValues = function() {
        return Object.keys(this.items);
    }

    Set.prototype.size = function()  {
        return Object.keys(this.items).length;
    }

    //集合间的操作
    Set.prototype.union = function(otherSet) {
        let unionSet = new Set();
        let values = this.getValues();
        for (let i=0;i<values.length;i++){
            unionSet.add(values[i])
        }
        values = otherSet.getValues();
        for (let i=0;i<values.length;i++){
            unionSet.add(values[i])
        }
        return unionSet;
    }

    Set.prototype.interSection = function(otherSet) {
        let interSectionSet = new Set();
        let values = this.getValues();
        for(let i = 0;i<values.length;i++){
            let item = values[i];
            if(otherSet.has(item)) {
                interSectionSet.add(item);
            }
        }
        return interSectionSet;
    }
    Set.prototype.difference = function(otherSet) {
        let differenceSet = new Set();
        let values = this.getValues();
        for(let i = 0;i<values.length;i++){
            let item = values[i];
            if(!otherSet.has(item)) {
                differenceSet.add(item);
            }
        }
        return differenceSet;
    }
    Set.prototype.subset = function(otherSet) {
        let values = this.getValues();
        for(let i = 0;i<values.length;i++){
            let item = values[i];
            if(!otherSet.has(item)) {
                return false;
            }
        }
        return true;
    }
}

var setA = new Set();
setA.add('abc');
// setA.add('abb');
// setA.add('acc');

var setB = new Set();
setB.add('abc');
setB.add('asdsad');
setB.add('adsa');
setB.add('bbbb');
// console.log(setA);
// console.log(setB);
// console.log(setA.items);
// console.log(setA.getValues());
// console.log(setB.values());
// console.log(setB.values());
let us = setA.union(setB);
let ins = setA.interSection(setB);
let dif = setA.difference(setB);
console.log(setA.subset(setB));