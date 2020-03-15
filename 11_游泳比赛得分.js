// 4. 游泳比赛六个评委打分分别为39、45、42、44、51和48，最终得分计算方法是：去掉一个最高分、去掉一个最低分，剩下4个数字取平均。请问这个选手最终得分是多少？
var arr = [39, 45, 42, 44, 51, 48];
var min = arr[0];
var max = 0;
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    } else if (arr[i] > max) {
        max = arr[i];
    }
    sum += arr[i];
}
var fenshu = (sum - min - max) / 4;

console.log(fenshu);

