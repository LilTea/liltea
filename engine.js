var stack = [];
var flags = {
    preventPop : false,
    reverse : false,
    greed : false
}

function add(){
    stack.push(a(true) + a(true));
}
function subtraction(){
    stack.push(a(true) - a(true));
}
function mult(){
    stack.push(a(true) * a(true));
}
function divide(){
    stack.push(a(true) / a(true));
}
function a(toPop){
    if(toPop){
        return stack.pop();
    }else{
        return stack[stack.length - 1];
    }
}
function b(){
    return stack[stack.length -2];
}

function ascendingSort(){
    if(typeof stack[a()] == "Number"){
        stack.sort((a,b) => {
            return a - b;
        })
    }else{
        stack.sort();
    }
}
function descendingSort(){
    if(typeof stack[a()] == "Number"){
        stack.sort((a,b) => {
            return b - a;
        })
    }else{
        stack.sort();
        stack.reverse();
    }
}

function square(){
    stack.push(a() * a(true));
}
function sqrt(){
   
    stack.push(Math.sqrt(a(true)));
}
function dup(){
    stack.push(stack[a()]);
}
function tan(){
    stack.push(Math.tan(a(true)));
}
function tan(){
    stack.push(Math.tan(a(true)));
}
function sin(){
    stack.push(Math.sin(a(true)));
}
function cos(){
    stack.push(Math.cos(a()));
}
function empty(){
    stack = [];
}
function stackLength(){
    stack.push(stack.length);
}
function lastArrayIndex(){
    let i = stack.length - 1
    for(;i>=0;i--){
        if(Array.isArray(stack[i])){
            break;
        }
    } 
    return i 
}
function element(){
    stack.push(stack[lastArrayIndex()][a()])
    console.log(stack);
}
function elementPop(){
    let index = lastArrayIndex()
    stack.push(stack[index][a()])
    stack.splice(index, 1);
    console.log(stack);
}
function compare(){
    return a(true) == a(true)
}
function printPop(){
    process.stdout.write(a(true));
}
function print(){
    process.stdout.write(a());
}
function increment(){
    stack[stack.length - 1]++;
}
function decrement(){
    stack[stack.length - 1]--;;
}
decrement();
console.log(stack);