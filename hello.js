// /* 構文例 */
// function <Function名>(<引数名>:<引数型>):<戻り値型>{
//   const <変数名>:<変数型> = 'Hello!';
//   return message + target ;
// }
function getMessage(target) {
    var message = 'Hello!';
    return message + target;
}
document.body.innerHTML = getMessage('TypeScript');
var draw = function (diag) {
    console.log('name: ' + diag.name);
};
var getH = function () {
    return this.height;
};
draw({ name: '四角', height: 100, width: 100, getHeight: getH });
function logging(content) {
    console.log(content);
    return content;
}
logging('LOGGING Data');
var array1 = [10, 1, 30, 20];
