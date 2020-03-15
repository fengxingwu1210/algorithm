// 第6题 【莱布尼茨级数】 圆周率π可以由下面的公式计算出来，请由用户输入参数n，计算圆周率π
var now = 1;
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
        now *= i / (2 * i + 1);
        sum += now;
    }
    console.log((sum + 1) * 2);
    
