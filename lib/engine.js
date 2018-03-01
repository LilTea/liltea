class Engine {
    constructor(outputCallback) {
        this.outputCallback = outputCallback
        this.stack = [];
        this.flags = {
            preventPop: false,
            reverse: false,
            greed: false
        }
        this.skipNextCommand = false;
    }
    setPreventPop() {
        this.flags.preventPop = true;
    }
    setReverse() {
        stack.reverse();
        this.flags.reverse = true;
    }

    setGreed() {
        this.flags.greed = true;
    }

    singleIf()
    {
        let condition = this.pop();
        if(!condition)
        {
            this.skipNextCommand = true;
        }
    }

    add() {
        this.stack.push(this.pop() + this.pop());
    }

    subtraction() {
        let a = this.pop();
        let b = this.pop();
        this.stack.push(b - a);
    }

    mult() {
        this.stack.push(this.pop() * this.pop());
    }

    divide() {
        let a = this.pop();
        let b = this.pop();
        this.stack.push(b / a);
    }

    pop() {
        if (this.flags.preventPop)
            return this.top();
        else
            return this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
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
        this.stack.push(this.top() * this.pop());
    }

    sqrt() {
        this.stack.push(Math.sqrt(this.pop()));
    }

    dup() {
        this.stack.push(this.top());
    }

    tan() {
        this.stack.push(Math.tan(this.pop()));
    }

    cotg() {
        this.stack.push(Math.cotg(this.pop()));
    }

    sin() {
        this.stack.push(Math.sin(this.pop()));
    }

    cos() {
        this.stack.push(Math.cos(this.pop()));
    }

    empty() {
        this.stack = [];
    }

    stackLength() {
        this.stack.push(this.stack.length);
    }
    element() {
        this.stack.push(this.stack[this.lastArrayIndex()][this.top()])
    }

    elementPop() {
        let index = this.lastArrayIndex()
        this.stack.push(this.stack[index][this.top()])
        this.stack.splice(index, 1);
    }

    compare() {
        this.stack.push(this.pop() == this.pop() | 0)
    }

    printPop() {
        this.outputCallback(this.pop().toString())
    }

    print() {
        this.outputCallback(this.top().toString());
    }

    increment() {
        this.stack[this.stack.length - 1]++;
    }

    decrement() {
        this.stack[this.stack.length - 1]--;
    }
    toString() {
        this.stack.push(this.pop().toString())
    }
    toInteger() {
        this.stack.push(Number(this.pop()))
    }
    toArray() {
        this.stack.push([this.pop()])
    }
    fact() {
        let rval = 1;
        let num = this.pop()
        for (var i = 2; i <= num; i++)
            rval = rval * i;

        this.stack.push(rval)
    }
    setStack(st) {
        this.stack = st;
    }
    ceil() {
        this.stack.push(Math.ceil(this.pop()))
    }
    floor() {
        this.stack.push(Math.floor(this.pop()))
    }

    do(instruction)
    {
        if(!this.skipNextCommand)
        {
            this[instruction]();
        }
        this.skipNextCommand = false;
    }

}

module.exports.engine = Engine