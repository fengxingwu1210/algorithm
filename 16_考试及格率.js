// 分别统计语文，数学，英语的及格率
var fs = require('fs');
var content = fs.readFileSync('./考试成绩.txt').toString();
var arr1 = content.split('\r\n');
// console.log(arr1);
var count=0;
var yuwen=0;
var math =0;
var yingyu =0;
for(var i=0;i<arr1.length;i++){
    var item =arr1[i];
    var arr2=item.split(' ');
    // console.log(arr2);
    count++;
    if(arr2[3]>=60){
        yuwen++;
    }
    if(arr2[5]>=60){
        math++;
    }
    if(arr2[7]>=60){
        yingyu++;
    }
}
        // console.log(count);
        // console.log(yuwen);
        // console.log(math);
        // console.log(yingyu);
        console.log('语文及格率为'+yuwen/(count-1));
        console.log('数学及格率为'+math/(count-1));
        console.log('英语及格率为'+yingyu/(count-1));
        

        

