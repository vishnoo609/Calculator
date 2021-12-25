let n1, n2;
let num1, num2;
let b1, b2, b3, b4;

function setup() {
  createCanvas(800,600);

  //input boxes for numbers
  num1 = createInput()
  num1.position(5,200)
  
  num2 = createInput()
  num2.position(200,200)

  //buttons for the mathematical operations
  b1 = createButton("ADD")
  b1.position(10,350)
  b1.mousePressed(add())
  
  b2 = createButton("SUBTRACT")
  b2.position (55,350)
  b2.mousePressed(subtract())

  b3 = createButton("MULTIPLY")
  b3.position (143,350)
  b3.mousePressed(multiply())

  b4 = createButton("DIVIDE")
  b4.position (223,350)
  b4.mousePressed(divide())
}

function draw() {

  background(30);

  textSize(20)
  textAlign(CENTER)

  //stroke('yellow')
  fill('yellow')
  text("Number 1", 85,150 )
  text("Number 2", 285,150 )

  //console.log(num1.value())

  n1 = parseInt(num1.value())
  n2 = parseInt(num2.value())

  //console.log(n1+n2)

}

function add(){
  console.log(n1+n2)
}
function subtract (){
 console.log(n1-n2)
}
function multiply (){
  console.log(n1*n2)
}
function divide (){
  console.log(n1/n2)
}