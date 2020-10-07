"use strict"
let value1 = prompt('Enter first number','enter interger only')
let value2 = prompt('enter second number','enter interger only')
let op = prompt('what do you want', 'op: + - * / %')

let a = Number(value1)
let b = Number(value2)

if(op == '+'){
    alert(a+b)
}else if(op == '-'){
    alert(a-b)
}
else if(op == '*'){
    alert(a*b)
}
else if(op == '/'){
  alert(a+b)
}
else if(op == '%'){
    alert(a%b)
}else(
    alert('sorry there is no opertors like this')
)