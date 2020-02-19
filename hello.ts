// /* 構文例 */
// function <Function名>(<引数名>:<引数型>):<戻り値型>{
//   const <変数名>:<変数型> = 'Hello!';
//   return message + target ;
// }

function getMessage(target:string):string{
  const message:string = 'Hello!';
  return message + target ;
}
document.body.innerHTML = getMessage('TypeScript');

interface Diagram {
  name: string;
  height: number;
  width: number;
  getHeight:Function;
}
let draw = function(diag:Diagram) {
    console.log('name: ' + diag.name);
}

let getH = function() {
    return this.height;
}
draw({name:'四角', height:100, width:100, getHeight:getH});

function logging<T>(content:T):T {
  console.log(content);
  return content;
}
logging<string>('LOGGING Data');

let array1:Array<number> = [10,1,30,20];
let array2:Array<string> = ['10','1','30','20'];
