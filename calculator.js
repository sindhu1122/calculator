/*
1.Take the input from command line argument
2.parse the input string to perform the operations
3.calculate the result of the given expression
*/
//Imports the required functions
var sum = require("./sum")
var diff = require("./diff")
var multiply = require("./multiply")
var divide = require("./divide")
var str = process.argv[2]
var inp = [], j = 0, res, l = 0
var operator = []
//parse the input and seperate operators and operands
for (var i = 0; i < str.length; i++) {
    var s = str.charAt(i)
    if (s == '+' || s == '-' || s == '*' || s == '/') {

        operator[l++] = s

    }
    else {

        inp[j++] = Number(s)
    }
}
console.log(inp)
console.log(operator)
var k = 0
//perfom the operation based on the operator
for (var i = 0; i < operator.length; i++) {
    var s = operator[i]
    if (k == 0) {
        p = inp[k]
        q = inp[k + 1]
        k = k + 2
    }
    else {
        p = res //update the first operand with output of previous operation
        q = inp[k]
        k = k + 1

    }
    switch (s) {
        case '+': res = sum.sum(p, q)

            break
        case '-': res = diff.diff(p, q)

            break
        case '*': res = multiply.multiply(p, q)

            break
        case '/': res = divide.divide(p, q)

            break
    }

}
console.log(res)

