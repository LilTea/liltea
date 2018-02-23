class Engine{
    constructor(outputCallback){
        this.outputCallback = outputCallback
        this.stack = [];
        this.flags = {
                preventPop: false,
                reverse: false,
                greed: false
        }
    }
    setPreventPop() {
        this.flags.preventPop = true;
    }
    setReverse() {
        this.flags.reverse = true;
    }

    setGreed() {
        this.flags.greed = true;
    }

    add() {
        this.stack.push(this.a(true) + this.a(true));
    }

    subtraction() {
        let a = this.a(true);
        let b = this.a(true);
        this.stack.push(b - a);
    }

    mult() {
        this.stack.push(this.a(true) * this.a(true));
    }

    divide() {
        let a = this.a(true);
        let b = this.a(true);
        this.stack.push(b / a);
    }

    a(toPop) {
        let toReturn;
        if (this.flags.reverse) {
            if (toPop==true && this.flags.preventPop == false) {
                return this.stack.shift();
            } else {
                return this.stack[0];
            }
        } else {
            
            if (toPop==true && this.flags.preventPop == false) {
                return this.stack.pop();
            } else {
                return this.stack[this.stack.length - 1];
            }
        }
    }

    deleteModificators() {
        this.flags.greed = false;
        this.flags.preventPop = false;
        this.flags.reverse = false;
    }

    b() {
        return this.stack[this.stack.length - 2];
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
        this.stack.push(this.a() * this.a(true));
    }

    sqrt() {
        this.stack.push(Math.sqrt(this.a(true)));
    }

    dup() {
        this.stack.push(this.a(false));
    }

    tan() {
        this.stack.push(Math.tan(this.a(true)));
    }

    cotg() {
        this.stack.push(Math.cotg(this.a(true)));
    }

    sin() {
        this.stack.push(Math.sin(this.a(true)));
    }

    cos() {
        this.stack.push(Math.cos(this.a(true)));
    }

    empty() {
        this.stack = [];
    }

    stackLength() {
        this.stack.push(this.stack.length);
    }
    element() {
        this.stack.push(this.stack[this.lastArrayIndex()][this.a()])
    }

    elementPop() {
        let index = this.lastArrayIndex()
        this.stack.push(this.stack[index][this.a()])
        this.stack.splice(index, 1);
    }

    compare() {
       this.stack.push(this.a(true) == this.a(true) | 0)
    }

    printPop() {
        this.outputCallback(this.a(true).toString())
    }

    print() {
        this.outputCallback(this.a().toString());
    }

    increment() {
        this.stack[this.stack.length - 1]++;
    }

    decrement() {
        this.stack[this.stack.length - 1]--;
    }
    toString(){
        this.stack.push(this.a(true).toString())
    }
    toInteger(){
        this.stack.push(Number(this.a(true)))
    }
    toArray(){
        this.stack.push([this.a(true)])
    }
    fact(){
        let rval=1;
        let num = this.a(true)
        for (var i = 2; i <= num; i++)
            rval = rval * i;
        
        this.stack.push(rval)
    }
    setStack(st) {
        this.stack = st;
    }
    ceil(){
        this.stack.push(Math.ceil(this.a(true)))
    }
    floor(){
        this.stack.push(Math.floor(this.a(true)))
    }
    
}

module.exports.engine = Engine