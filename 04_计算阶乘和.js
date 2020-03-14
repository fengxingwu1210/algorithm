// 第4题 【计算阶乘和】请计算1! + 2! + 3! + 4! + 5! + …… +9!的结果，叹号表示阶乘。
// 外面遍历1-9
// 先定义个
var sum=0
for(var i=1;i<=9;i++){
    // 里面累加乘积
    var chengji=1;

    for(j=1;j<=i;j++){
        chengji*=j
    }
    sum+=chengji;
}
console.log(sum);
