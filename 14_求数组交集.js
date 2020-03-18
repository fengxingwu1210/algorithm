// 求数组[1,3,8,10,12]和数组[4,2,10,1,3,9,17,3]的交集
var arr1 = [1, 3, 8, 10, 12];
var arr2 = [4, 2, 10, 1, 3, 9, 17, 3];
var arr3 = [];
var arr4 = [];

for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
            arr3.push(arr1[i]);

        }
    }
}


for (var k = 0; k < arr3.length; k++) {
    if (!arr4.includes(arr3[k])) {
        arr4.push(arr3[k]);
    }
}
console.log(arr4);
