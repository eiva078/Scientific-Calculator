let string = "";
let display = document.getElementById('input');
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '1' || e.target.innerHTML == '2' || e.target.innerHTML == '3' || e.target.innerHTML == '4' || e.target.innerHTML == '5' || e.target.innerHTML == '6' || e.target.innerHTML == '7' || e.target.innerHTML == '8' || e.target.innerHTML == '9' || e.target.innerHTML == '0' || e.target.innerHTML == '+' || e.target.innerHTML == '-' || e.target.innerHTML == '.' || e.target.innerHTML == '(' || e.target.innerHTML == ')') {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
function pi() {
    string = string + Math.PI;
    document.querySelector('input').value = string;
}
function squareRoot() {
    string = Math.sqrt(string);
    document.querySelector('input').value = string;
}
function e() {
    string = string + Math.E;
    document.querySelector('input').value = string;
}
function inverseofx() {
    string = 1 / string;
    document.querySelector('input').value = string;
}
function mod() {
    string = Math.abs(string);
    document.querySelector('input').value = string;
}
function percentage() {
    string = string*100/Math.pow(10,string.length);
    document.querySelector('input').value = string;
}
function sin() {
    string = Math.sin(string);
    document.querySelector('input').value = string;
}
function sinh() {
    string = Math.sinh(string);
    document.querySelector('input').value = string;
}
function cos() {
    string = Math.cos(string);
    document.querySelector('input').value = string;
}
function cosh() {
    string = Math.cosh(string);
    document.querySelector('input').value = string;
}
function tan() {
    string = Math.tan(string);
    document.querySelector('input').value = string;
}
function tanh() {
    string = Math.tanh(string);
    document.querySelector('input').value = string;
}
function sec() {
    string = 1/Math.cos(string);
    document.querySelector('input').value = string;
}
function cosec() {
    string = 1/Math.sin(string);
    document.querySelector('input').value = string;
}
function cot() {
    string = 1/Math.tan(string);
    document.querySelector('input').value = string;
}
function log10() {
    string = Math.log10(string);
    document.querySelector('input').value = string;
}
function ln() {
    string = Math.log(string);
    document.querySelector('input').value = string;
}
function exp() {
    string = Math.pow(e,string);
    document.querySelector('input').value = string;
}
function mul() {
    string += '*';
    document.querySelector('input').value = string;
}
function div() {
    string += '/';
    document.querySelector('input').value = string;
}
function backspace() {
    string=document.querySelector('input').value.slice(0, -1);
    document.querySelector('input').value=string;
}
function powof10(){
    string = Math.pow(10,string);
    document.querySelector('input').value = string;
}
function powof2(){
    string = Math.pow(2,string);
    document.querySelector('input').value = string;
}
function square(){
    string = Math.pow(string,2);
    document.querySelector('input').value = string;
}
function cube(){
    string = Math.pow(string,3);
    document.querySelector('input').value = string;
}
function cuberoot(){
    string = Math.cbrt(string);
    document.querySelector('input').value = string;
}


