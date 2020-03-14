// 第7题 【多次开方】请计算下面表达式的值，要求使用循环语句
 var ab = Math.sqrt(2);
 for (var i = 0; i < 4; i++) {
     ab = Math.sqrt(ab / 2);
 }
 console.log(ab);
