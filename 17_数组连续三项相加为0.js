// 数组[1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5]中有没有任意连续3项相加为0？如果有，请输出这3项。
var arr=[1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5];
for(var i=0;i<arr.length;i++){
    if(arr[0]+arr[1]+arr[2]!=0){
        arr.splice(0,1);
    }else{
        console.log(arr[0],arr[1],arr[2]);
        
    }
    
}