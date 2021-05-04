class Stack{
    constructor(){
        this.stack = []
    }
    push(elemento){
        this.stack.push(elemento)
        return this.stack
    }
    pop(){
        return this.stack.pop()
    }
    peek(){
        return this.stack[this.stack.length -1]
    }
    size(){
        return this.stack.length;
    }
    print() {
        console.log(this.stack)
    }
}

const stack = new Stack()

console.log(stack.size())
console.log(stack.push('Santo Cardona'))
console.log(stack.push('Santiago Cardona'))
console.log(stack.size())
stack.print()

console.log(stack.peek())
console.log(stack.pop())
stack.print()
console.log(stack.peek(), 'Ultimo')




/* class Stack{

    constructor(){
        this.stack= {}
        this.count = 0
    }
    push(elemento){
        this.stack[this.count]= elemento
        this.count++
        return this.stack
    }

    pop(){
        this.count--
        const element = this.stack[this.count]
        delete this.stack[this.count]
        return element
    }

    peek(){
        return this.stack[this.count -1]
    }

    size(){
        return this.count
    }

    print(){
        console.log(this.stack)
    }
}

const stack = new Stack()

console.log(stack.size())

console.log(stack.push('Santiago'))
console.log(stack.size())
console.log(stack.peek())
console.log(stack.push('Yamile'))
console.log(stack.size())
stack.print()

console.log(stack.peek())
console.log(stack.pop())
stack.print()
console.log(stack.size())
console.log(stack.peek())



 */