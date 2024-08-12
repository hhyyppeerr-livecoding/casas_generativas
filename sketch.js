function drawAxis(largo, size){
  fill(255,0,0)
  noStroke()
  box(largo,size,size)
  fill(0,0,255)
  box(size,largo,size)
  fill(0,255,0)
  box(size,size,largo)
}


let ladrillos = []
let altoHabitacion = 10
let anchoHabitacion = 8
class Ladrillo{
  constructor(tipo, posicion, anchoHabitacion, altoHabitacion, z){
    this.tipo = tipo
    this.posicion = posicion
    this.anchoHabitacion = anchoHabitacion
    this.altoHabitacion = altoHabitacion
    
    this.w = 14
    this.h = 11
    this.d = 5
    this.z = z*this.d
  }
  show(){
    if(this.z % 2 == 0){
    if(this.tipo == "A"){
      push()
      translate(this.w * this.posicion, 0, this.z)
      box(this.w, this.h, this.d)
      pop()
    }
    if(this.tipo == "B"){
      push()
      let diferenciaY = (this.w-this.h)/2
      let diferenciaX = (this.w+this.h)/2
      translate(this.w * (this.anchoHabitacion-1), 0, this.z)
      translate(diferenciaX, diferenciaY)
      rotateZ(PI/2)
      translate(this.w * this.posicion, 0, 0)
      box(this.w, this.h, this.d)
      pop()
    }
    if(this.tipo == "C"){
      push()
      let diferenciaY = (this.w-this.h)/2
      let diferenciaX = (this.w+this.h)/2
      translate(this.w * (this.anchoHabitacion-1), 0, this.z)
      translate(diferenciaX, diferenciaY)
      rotateZ(PI/2)
      translate(this.w*(this.altoHabitacion-1),0,0)
      translate(diferenciaX, diferenciaY)
      rotateZ(PI/2)
      translate(this.w * this.posicion, 0, 0)
      box(this.w, this.h, this.d)
      pop()
    }
    if(this.tipo == "D"){
      push()
      let diferenciaY = (this.w-this.h)/2
      let diferenciaX = (this.w+this.h)/2
      translate(this.w * (this.anchoHabitacion-1), 0, this.z)
      translate(diferenciaX, diferenciaY)
      rotateZ(PI/2)
      translate(this.w*(this.altoHabitacion-1),0,0)
      translate(diferenciaX, diferenciaY)
      rotateZ(PI/2)
      translate(this.w * (this.anchoHabitacion-1), 0, 0)
      translate(diferenciaX, diferenciaY)
      rotateZ(PI/2)
      translate(this.w * this.posicion, 0, 0)
      box(this.w, this.h, this.d)
      pop()
    }
  }
    else{
      //Capas con el patron de las capas impares
      if(this.tipo == "A"){}
      if(this.tipo == "B"){}
      if(this.tipo == "C"){}
      if(this.tipo == "D"){}
    }
  }
}

function createLayer(array,z){
    for(let i=0; i<anchoHabitacion; i++){
      array.push(new Ladrillo("A", i, anchoHabitacion, altoHabitacion,z))
  }
  for(let i=0; i<altoHabitacion; i++){
      array.push(new Ladrillo("B", i, anchoHabitacion, altoHabitacion, z))
  }
  for(let i=0; i<anchoHabitacion; i++){
      array.push(new Ladrillo("C", i, anchoHabitacion, altoHabitacion, z))
  }
for(let i=0; i<altoHabitacion; i++){
      array.push(new Ladrillo("D", i, anchoHabitacion, altoHabitacion, z))
}
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
createLayer(ladrillos, 0)



}
let index_animation = 0
function draw() {
  background(220);
  rotateX(PI/4)
  rotateZ(PI/4)
  fill(255)
  stroke(0)
  for(let i=0; i < index_animation; i++){
    ladrillos[i].show()
  }
  index_animation++
  if(index_animation > ladrillos.length){
    index_animation = 0
  }
  drawAxis(100,1)
}