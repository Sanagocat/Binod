console.log("Danwoo's Program");

var number_1 = document.getElementById('num_1');//variable link
var number_2 = document.getElementById('num_2');//variable link
var result = document.getElementById('result');//variable link

var plus_button = document.getElementById('plus'); //variable link
plus_button.addEventListener('click', add_number); //Function Link
var minus_button = document.getElementById('minus'); //variable link
minus_button.addEventListener('click', subtract_number); //Function Link
var multiply_button = document.getElementById('multiply'); //variable link
multiply_button.addEventListener('click', multiply_number); //Function Link
var divide_button = document.getElementById('divide'); //variable link
divide_button.addEventListener('click', divide_number); //Function Link

function add_number() {
  var rst = 0;
  rst = Number(number_1.value) + Number(number_2.value);

  result.value = rst;
}

function subtract_number(){
  var rst=0;
  rst = Number(number_1.value) - Number(number_2.value);

  result.value = rst;
}

function multiply_number(){
  var rst=0
  rst = Number(number_1.value) * Number(number_2.value);

  result.value = rst;
}

function divide_number(){
  var rst=0
  rst = Number(number_1.value) / Number(number_2.value);

  result.value = rst;
}









