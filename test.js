function aaa(a,b,x) {
    let ans = 0;
    if(b===1) return 1;
    for(let i =x;i<=(a/b);i++) {
        ans+=aaa(a-i,b-1,i);
        return ans;
    }
}
console.log(aaa(9,3,0));
