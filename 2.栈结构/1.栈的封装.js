function Stack() {
    //栈的属性
    this.items = [];
    
    //栈的相关操作
    //1.元素压入栈
    Stack.prototype.push = function(element) {
         this.items.push(element);
    }

    //2.从栈中取出元素、
    Stack.prototype.pop = function() {
        return this.items.pop();
   }
    //3.查看栈顶元素
    Stack.prototype.peek = function() {
        this.items[this.items.length-1];
   }
    //4.判断栈是否为空
    Stack.prototype.isEmpty = function() {
        return this.items.length === 0;
   }
    //5.获取栈中元素个数
    Stack.prototype.size = function() {
        return this.items.length;
   }
    //6.toString
    Stack.prototype.toString = function() {
        let resultString = '';
        this.items.forEach(item => resultString+=item+' ');
        return resultString;
    }


}
exports.Stack = Stack;
//栈的使用
let s = new Stack();
s.push(20);
s.push(10);
s.pop();
s.push(1);
console.log(s)
console.log(s.isEmpty())
console.log(s.size())
console.log(s.toString())