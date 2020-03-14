// 第1题 【判断质数】请判断数字45887是不是质数？质数是指只有1和它本身两个约数，即约数个数是2。
var n =45887;
var geshu =0;
for(var i =1;i<=45887;i++){
    if(n%i==0){
        geshu++;
    }

}
if(geshu==2){
    console.log(n+'是质数');
    
}else{
    console.log(n+'不是质数');
    
}