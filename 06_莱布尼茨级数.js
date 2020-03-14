// 第6题 【莱布尼茨级数】 圆周率π可以由下面的公式计算出来，请由用户输入参数n，计算圆周率π
var ji=1;
var jiji=1;
var sum=0;
for(var i=1;i<=1;i++){
    ji*=i;
    console.log(ji);
    
}
    for(var j=3;j<(2*i+1);j+=2){
        
        
        jiji*=j
    console.log(jiji);
}
sum+=(ji/jiji);
console.log(sum);

console.log('圆周率是'+((1+sum)*2));
