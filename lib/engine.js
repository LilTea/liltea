class Engine {
    constructor(outputCallback) {
        this.outputCallback = outputCallback
        this.stack = [];
        this.flags = {
            preventPop: false,
            reverse: false,
            greed: false
        },
        
        this.defvalues = {
            0 : 'abcdefghijklmnopqrstuvwxyz'.split(''),
            1 : [0,1,2,3,4,5,6,7,8,9],
            2 : Math.PI,
            3 : new Date().getDate(),
            4 : new Date().getHours(),
            5 : new Date().getMinutes()
        }
        this.variables = [];
        this.prepVars();
        this.skipNextCommand = false;
    }
    prepVars(){
        for(let i=0;i<7;i++){
            this.variables.push(this.defvalues[i]);
        }
    }
    setVar(index){
        this.variables[index] = this.pop();
        
    }
    getVar(index){
        this.stack.push(this.variables[index]);
    }
    setPreventPop() {
        this.flags.preventPop = true;
    }
    setReverse() {
        this.stack.reverse();
        this.flags.reverse = true;
    }

    setGreed() {
        this.flags.greed = true;
    }

    popCondition()
    {
        return !!this.pop();
    }

    add() {
        this.push(this.pop() + this.pop());
    }

    subtraction() {
        let a = this.pop();
        let b = this.pop();
        this.push(b - a);
    }

    mult() {
        this.push(this.pop() * this.pop());
    }

    divide() {
        let a = this.pop();
        let b = this.pop();
        this.push(b / a);
    }
    pop() {     
        if (this.flags.preventPop)
            return this.top();
        else
            return this.stack.pop();
    }
    bottom(){
        return this.stack[0]
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    get2(){
        if(this.flags.preventPop)
            return [this.stack[this.stack.length - 1],  this.stack[this.stack.length - 2]]
        else 
            return [this.pop(), this.pop()]
    }

    deleteModificators() {
        if (this.flags.reverse) this.stack.reverse();
        this.flags.preventPop = false;
        this.flags.reverse = false;
        this.flags.greed = false;
    }
        
    lastArrayIndex() {
        let i = this.stack.length - 1
        for (; i >= 0; i--) {
            if (Array.isArray(this.stack[i])) {
                break;
            }
        }
        return i
    }
    ascendingSort() {
        if (typeof this.stack[this.lastArrayIndex()][0] == "number") {

            this.stack[this.lastArrayIndex()].sort((a, b) => {
                return a - b;
            })
        } else {
            this.stack[this.lastArrayIndex()].sort();
        }
    }

    descendingSort() {
        if (typeof this.stack[this.lastArrayIndex()][0] == "number") {
            this.stack[this.lastArrayIndex()].sort((a, b) => {
                return b - a;
            })
        } else {
            this.stack[this.lastArrayIndex()].sort();
            this.stack[this.lastArrayIndex()].reverse();
        }
    }

    square() {
        this.push(this.top() * this.pop());
    }

    sqrt() {
        this.push(Math.sqrt(this.pop()));
    }

    dup() {
        this.push(this.top());
    }

    tan() {
        this.push(Math.tan(this.pop()));
    }

    cotg() {
        this.push(Math.cotg(this.pop()));
    }

    sin() {
        this.push(Math.round(Math.sin(this.pop() * Math.PI / 180.0, 4)));
    }

    cos() {
        this.push(Math.round(Math.cos(this.pop() * Math.PI / 180.0, 4)));
    }

    empty() {
        this.stack = [];
    }

    stackLength() {
        this.push(this.stack.length);
    }
    element() {
        this.push(this.stack[this.lastArrayIndex()][this.top()])
    }

    elementPop() {
        let index = this.lastArrayIndex()
        this.push(this.stack[index][this.top()])
        this.stack.splice(index, 1);
    }

    notEqual(){
        let[a,b] = this.get2()
        this.push(a!=b | 0)
    }
    compare() {
        let[a,b] = this.get2()
        this.push(a==b | 0)
    }
    bigger(){
        let [a,b] = this.get2()
        this.push(a > b)
    }
    less(){
        let [a,b] = this.get2()
        this.push(a < b)
    }
    bitwiseAnd(){
        let [a,b] = this.get2()
        this.push(a & b)
    }
    bitwiseOr(){
        let [a,b] = this.get2()
        this.push(a | b)
    }
    bitwiseXor(){
        let [a,b] = this.get2()
        this.push(a ^ b)
    }
    printPop() {
        
        this.outputCallback(this.pop().toString())
        
    }

    print() {
        
        this.outputCallback(this.stack[this.stack.length - 1].toString());
        
    }

    increment() {
        this.stack[this.stack.length - 1]++;
    }

    decrement() {
        this.stack[this.stack.length - 1]--;
    }
    toString() {
        this.push(this.pop().toString())
    }
    toInteger() {
        this.push(Number(this.pop()))
    }
    toArray() {
        this.push([this.pop()])
    }
    fact() {
        let rval = 1;
        let num = this.pop()
        for (var i = 2; i <= num; i++)
            rval = rval * i;

        this.push(rval)
    }
    setStack(st) {
        this.stack = st;
    }
    ceil() {
        this.push(Math.ceil(this.pop()))
    }
    floor() {
        this.push(Math.floor(this.pop()))
    }
    doubleDup() {
        this.flags.preventPop = true;
        let [a,b] = this.get2()
        this.push(b);  
        this.push(a);
        this.flags.preventPop = false;
    }
    modulo() {
        let a = this.pop();
        let b = this.pop();
        this.push(b % a);
    }

    do(instruction)
    {
        if(!this.skipNextCommand)
        {
            this[instruction]();
        }
        this.skipNextCommand = false;
    }

    push(value) {
        this.stack.push(value);
    }

    swap() {
        let [a,b]=this.get2();
        this.push(a)
        this.push(b)
    }
    
    debugPrintStack() {
        this.outputCallback(JSON.stringify(this.stack))
    }

    NOP() {} // Do nothing

}

module.exports.engine = Engine