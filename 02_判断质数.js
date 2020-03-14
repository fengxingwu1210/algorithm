// 第2题 【判断质数】寻找100以内的所有质数。
for(var i=1;i<=100;i++){
    var geshu=0;
    for(var j=1;j<=i;j++){
        if(i%j==0){
            geshu++;
        }

    }
    if(geshu==2){
        console.log(i);
        
    }
}