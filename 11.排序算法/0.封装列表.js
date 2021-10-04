function ArraryList() {
    //属性
    this.array = []

    //方法
    ArraryList.prototype.insert = function (item) {
        this.array.push(item)
    }
    ArraryList.prototype.toString = function () {
        return this.array.join(' ')
    }

    ArraryList.prototype.swap = function (m, n) {
        let temp = this.array[m];
        this.array[m] = this.array[n];
        this.array[n] = temp;
    }

    //排序
    //1.冒泡排序: 相邻位置两两比较，每次将最大的数放在最后，比较和交互复杂度都是o(N2)
    ArraryList.prototype.bubbleSort = function () {
        let length = this.array.length;
        for (let j = length - 1; j >= 0; j--) {
            for (let i = 0; i < length - 1; i++) {
                if (this.array[i] > this.array[i + 1]) {
                    this.swap(i, i + 1)
                }
            } 
        }

    }
    //2.选择排序: 每次找出最小的数，放到前面,比较o(N2),交互复杂度O(N)
    ArraryList.prototype.selectionSort = function () {
        let length = this.array.length;

        for(let j=0; j< length-1; j++) {
            let min = j;
            for(let i = min+1; i < length; i++) {
                if(this.array[min] > this.array[i]) {
                    min = i;
                }
            }
            this.swap(min, j);
        }
    }
    //3.插入排序：局部有序，
    ArraryList.prototype.insertionSort = function() {
        let length = this.array.length;
        for(let i=0; i<length; i++) {
            let temp = this.array[i];
            let j=i;
            while(this.array[j-1] > temp && j>0) {
                this.array[j] = this.array[j-1];
                j--;
            }
            this.array[j] = temp;
        }
    }

    //4.希尔排序：分组进行排序，1，3，5间隔，尽量保证初始数据的有序
    ArraryList.prototype.cellSort = function() {
        let length = this.array.length;
        //初始化增量
        let gap = Math.floor(length / 2);
        while(gap >= 1) {
            //以gap为间隔进行插入排序
            for(let i = gap; i< length; i++) {
                let temp = this.array[i];
                let j = i;
                while(this.array[j - gap] > temp && j > gap-1) {
                    this.array[j] = this.array[j - gap];
                    j-=gap;
                }
                this.array[j] = temp;
            }
            gap = Math.floor(gap/2);
        }

    }
    //5.快速排序: 分治
    //1.选择枢纽
    ArraryList.prototype.mediumn = function(left, right) {
        let medium = Math.floor((left+right)/2);
        if(this.array[left] > this.array[medium]) {
            this.swap(left, medium);
        }
        if(this.array[medium] > this.array[right]) {
            this.swap(medium, right);
        }
        if(this.array[left] > this.array[medium]) {
            this.swap(left, medium);
        }
        this.swap(medium,right-1);
        return this.array[right-1];

    }
    ArraryList.prototype.quickSort = function() {
        this.quick(0,this.array.length-1);

    }
    ArraryList.prototype.quick = function(left, right) {
        if(left>=right) return;

        let pivot = this.mediumn(left, right);
        let i = left;
        let j = right-1;
        while(i<j) {
            while(this.array[++i] < pivot) {

            }
            while(this.array[--j] > pivot) {}
                if(i < j) {
                    this.swap(i,j)
                } else {
                    break;
                }
            }
        this.swap(i, right-1)
        this.quick(left, i-1);
        this.quick(i+1, right);

    }

}

let list = new ArraryList();

list.insert(66);
list.insert(76);
list.insert(56);
list.insert(89);
list.insert(34);
list.insert(62);
console.log(list.toString());
list.quickSort()
console.log(list.toString());