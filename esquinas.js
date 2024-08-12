function drawAxis(largo, size){
  fill(255,0,0)
  noStroke()
  box(largo,size,size)
  fill(0,0,255)
  box(size,largo,size)
  fill(0,255,0)
  box(size,size,largo)
}

function pattern1(deep){
    //Start
  push()
  translate(0,0,deep*d)
  stroke(0)
  box(w, h, d)
  for(let i=0; i<3; i++){
    let diferenciaY = (w+h)/2
    let diferenciaX = (w-h)/2
    translate(diferenciaX,diferenciaY) //Avanzamos en x e y
    rotate(PI/2) //rotamos
    box(w,h,d)
    }
  pop()
}

function pattern2(deep){
  stroke(0)
  push()
  translate(-w/2,0,deep*d)
  box(w, h, d)
  for(let i=0; i<3; i++){
    let diferenciaY = (w-h)/2
    let diferenciaX = (w+h)/2
    translate(diferenciaX,diferenciaY) //Avanzamos en x e y
    rotate(PI/2) //rotamos
    box(w,h,d)
    }
  pop()
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
let w = 100
let h = 50
let d = 25
function draw() {
  orbitControl()
  background(220);
  translate(0,0,-100)
  rotateX(PI/4)
  fill(255)
  pattern1(0)
  pattern2(1)

  drawAxis(400, 2)
}