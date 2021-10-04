// 1.将字符串转成较大的数字
// 2.将大数字压缩到数组范围
function hashFunc(str, size) {
    
    let hashCode = 0;
    //遍历，计算hash值
    for(let i =0;i<str.length;i++) {
        hashCode = 37 * hashCode + str.charCodeAt(i);
    }
    //取余
    let index = hashCode % size;
    return index;

}
console.log(hashFunc('wangcong',7));
console.log(hashFunc('bbc',7));
console.log(hashFunc('bfr',7));