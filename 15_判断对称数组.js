// 数组[1，3，4，5，3，5，4，3，1]是不是对称
var arr=[1,3,4,5,3,5,4,3,1];
for (var i = 0; i < arr.length / 2; i++) {
    if (arr[i] == arr[arr.length - 1 - i]) {
        console.log('数组是对称的');
        
    }else{
        console.log('不是对称的');
        
    }
}