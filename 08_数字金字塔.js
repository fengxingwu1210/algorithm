// 1. 使用for循环语句输出下面的图形
for (var i = 1; i <= 6; i++) {
        // 每行的字符串
        var rowStr = '';
    
        // 追加空格
        rowStr += ' '.repeat(12 - 2 * i);
        // 追加一个字
        rowStr += '1';
    
        console.log(rowStr);
    }
    
