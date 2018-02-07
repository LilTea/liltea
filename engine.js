var stack = [];
var flags = {
    preventPop: false,
    reverse: false,
    greed: false
} 
module.exports = {
    setPreventPop() {
        flags.preventPop = true;
    },

    setReverse() {
        flags.reverse = true;
    },

    setGreed() {
        flags.greed = true;
    },

    add() {
        stack.push(this.a(true) + this.a(true));
    },

    subtraction() {
        stack.push(this.a(true) - this.a(true));
    },

    mult() {
        stack.push(this.a(true) * this.a(true));
    },

    divide() {
        stack.push(this.a(true) / this.a(true));
    },

    a(toPop) {
        let toReturn;
        if (flags.reverse) {
            if (toPop && flags.preventPop == false) {
                return stack.shift();
            } else {
                return stack[0];
            }
        } else {
            if (toPop && flags.preventPop == false) {
                return stack.pop();
            } else {
                return stack[stack.length - 1];
            }
        }
    },

    deleteModificators() {
        flags.greed = false;
        flags.preventPop = false;
        flags.reverse = false;
    },

    b() {
        return stack[stack.length - 2];
    },

    ascendingSort() {
        if (typeof stack[lastArrayIndex()][0] == "Number") {
            stack[lastArrayIndex()].sort((a, b) => {
                return a - b;
            })
        } else {
            stack[lastArrayIndex()].sort();
        }
    },

    descendingSort() {
        if (typeof stack[lastArrayIndex()][0] == "Number") {
            stack[lastArrayIndex()].sort((a, b) => {
                return b - a;
            })
        } else {
            stack[lastArrayIndex()].sort();
            stack.reverse();
        }
    },

    square() {
        stack.push(this.a() * this.a(true));
    },

    sqrt() {
        stack.push(Math.sqrt(this.a(true)));
    },

    dup() {
        stack.push(stack[this.a()]);
    },

    tan() {
        stack.push(Math.tan(this.a(true)));
    },

    tan() {
        stack.push(Math.tan(this.a(true)));
    },

    sin() {
        stack.push(Math.sin(this.a(true)));
    },

    cos() {
        stack.push(Math.cos(this.a()));
    },

    empty() {
        stack = [];
    },

    stackLength() {
        stack.push(stack.length);
    },

    lastArrayIndex() {
        let i = stack.length - 1
        for (; i >= 0; i--) {
            if (Array.isArray(stack[i])) {
                break;
            }
        }
        return i
    },

    element() {
        stack.push(stack[lastArrayIndex()][this.a()])
        console.log(stack);
    },

    elementPop() {
        let index = lastArrayIndex()
        stack.push(stack[index][this.a()])
        stack.splice(index, 1);
        console.log(stack);
    },

    compare() {
        return this.a(true) == this.a(true)
    },

    printPop() {
        process.stdout.write(this.a(true).toString());
    },

    print() {
        process.stdout.write(this.a().toString());
    },

    increment() {
        stack[stack.length - 1]++;
    },

    decrement() {
        stack[stack.length - 1]--;;
    },

    setStack(st) {
        stack = st;
    }
}