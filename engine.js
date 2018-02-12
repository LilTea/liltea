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
        this.stack.push(this.a(true) - this.a(true));
    }

    mult() {
        this.stack.push(this.a(true) * this.a(true));
    }

    divide() {
        this.stack.push(this.a(true) / this.a(true));
    }

    a(toPop) {
        let toReturn;
        if (this.flags.reverse) {
            if (toPop && this.flags.preventPop == false) {
                return this.stack.shift();
            } else {
                return this.stack[0];
            }
        } else {
            if (toPop && this.flags.preventPop == false) {
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

    ascendingSort() {
        if (typeof this.stack[lastArrayIndex()][0] == "Number") {
            this.stack[lastArrayIndex()].sort((a, b) => {
                return a - b;
            })
        } else {
            this.stack[lastArrayIndex()].sort();
        }
    }

    descendingSort() {
        if (typeof this.stack[lastArrayIndex()][0] == "Number") {
            this.stack[lastArrayIndex()].sort((a, b) => {
                return b - a;
            })
        } else {
            this.stack[lastArrayIndex()].sort();
            this.stack.reverse();
        }
    }

    square() {
        this.stack.push(this.a() * this.a(true));
    }

    sqrt() {
        this.stack.push(Math.sqrt(this.a(true)));
    }

    dup() {
        this.stack.push(this.stack[this.a()]);
    }

    tan() {
        this.stack.push(Math.tan(this.a(true)));
    }

    tan() {
        this.stack.push(Math.tan(this.a(true)));
    }

    sin() {
        this.stack.push(Math.sin(this.a(true)));
    }

    cos() {
        this.stack.push(Math.cos(this.a()));
    }

    empty() {
        this.stack = [];
    }

    stackLength() {
        this.stack.push(this.stack.length);
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

    element() {
        this.stack.push(this.stack[lastArrayIndex()][this.a()])
    }

    elementPop() {
        let index = lastArrayIndex()
        this.stack.push(this.stack[index][this.a()])
        this.stack.splice(index, 1);
    }

    compare() {
        return this.a(true) == this.a(true)
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
        this.stack[this.stack.length - 1]--;;
    }

    setStack(st) {
        this.stack = st;
    }
}
module.exports.Engine = Engine