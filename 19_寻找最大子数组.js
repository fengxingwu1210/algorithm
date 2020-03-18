// 给定一个整数数组，找到一个具有最大和的子数组，返回其子数组最大和和这个子数组。
// 比如数组[−2, 2, −3, 4, −1, 2, 1, −5,]。符合要求的子数组为[4, −1, 2, 1]，其最大和为 6。
// 再比如数组[1, 2, 3, 4]，符合要求的子数组为[1, 2, 3, 4]，其最大和为 10。
// 再比如数组[-5, 6, -2, -3, 4]，符合要求的子数组为[6, -2, -3, 4]，其最大和为5
 
 var arr=[-5, 6, -2, -3, 4];
// Infinity 属性用于存放表示正无穷大的数值。
// 负无穷大是表示负无穷大一个数字值。
 var max = -Infinity;

 var arr2=[];

 
 for (var i = 0; i < arr.length; i++) {
     for (var j = i + 1; j <= arr.length; j++) {
        //  /slice方法是提取字符串的某个部分，并以新的字符串返回被提取的部分
         var zishuzu = arr.slice(i, j);        
         var sum = 0;
         for (var m = 0; m < zishuzu.length; m++) {
             sum += zishuzu[m];
         }        
         if (sum > max) {
             max = sum;
             arr2 = zishuzu;
         }
     }
 }

 console.log('最大子数组是' + arr2 );