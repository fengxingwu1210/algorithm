// 给你一个数组[1030, 56000, 20300040, 20, 8933, 28001020]。请将这个数组按各个数字含有零的数量进行排序，由少到多。
var arr = [1030, 56000, 20300040, 20, 8933, 28001020];

function calcZero(n) {
   var count =0;
        var str = n.toString();
        for (var j = 0; j < str.length; j++) {
            if (str[j] == "0") {
                count++;
            }
        }
    return count;
    
    }


arr.sort(function (a, b) {
    return calcZero(a) - calcZero(b);
});
console.log(arr);