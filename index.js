var num = [1, 5, 1, 3, 8, 6, 9, 7, 5, 4, 1, 5];
var uniqNum = [];
for (i =0; i<num.length; i ++){
    var element = num[i];
    var index = uniqNum.indexOf(element);
    if (index == -1){
        uniqNum.push(element);
    }
}
console.log(uniqNum);