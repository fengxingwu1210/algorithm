// 模拟抛硬币一百万次，显示出现正面和反面的次数，并显示出占比
// 记录正面
var zm = 0;
// 记录反面
var fm = 0
for (var i = 0; i <= 1000000; i++) {
    var num = parseInt(Math.random() * 2);
    if (num == 0) {
        // 如果现实为0则记录正面+1
        zm++;
    } else {
        fm++;
    }

}
console.log('正面占比' + (zm / 1000000));
console.log('反面占比' + (fm / 1000000));

