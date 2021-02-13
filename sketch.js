//VALENTINES DAY//


//speed of jitters
let speed = 1;
//stars array
let stars = [];
//shooting star variables
let shootheight = 0;
let shootwidth = 1500;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //add 50 stars to array and instantiate the class
  for (let i = 0; i < 50; i++) {
  stars.push(new Jitter());
  }
}

function draw() {
  background(255, 192, 203, 100);

  //buttons
  fill(255);
  square(50, 50, 50);
  square(50, 150, 50);
  square(50, 250, 50);
  square(50, 350, 50);
  square(50, 450, 50);
  //buttons text
  fill(234, 145, 90);
  textSize(30);
  text('1', 66, 85);
  text('2', 66, 185);
  text('3', 66, 285);
  text('4', 66, 385);
  text('5', 66, 485);



  //HEART//
  let ww = width/2;
  let hh = height+50;
  ww = ww+(random(-speed, speed));
  hh = hh+(random(-speed, speed));
  //HEART//
  fill(255, 0, 0);
  noStroke();
  beginShape();
  curveVertex(ww, hh);
  curveVertex(ww, hh-330);
  curveVertex(ww-120, hh-450);
  curveVertex(ww-75, hh-525);
  curveVertex(ww, hh-500);
  curveVertex(ww, hh-300);
  endShape();
  //HEART//
  beginShape();
  curveVertex(ww, hh-300);
  curveVertex(ww, hh-500);
  curveVertex(ww+75, hh-525);
  curveVertex(ww+120, hh-450);
  curveVertex(ww, hh-330);
  curveVertex(ww, hh);
  endShape();
  //HEART//


  if (mouseIsPressed == true){
    textFont('Georgia');
    textSize(25);

    //first button
    if (mouseX > 50 && mouseX < 100 && mouseY > 50 && mouseY < 100){
      fill(255);
      text('hi lukey', width-300, height-100);
      speed = 3;

      //second button
    } else if (mouseX > 50 && mouseX < 100 && mouseY > 150 && mouseY < 200){
      fill(255);
      text('i just wanted to say that', width-300, height-100);
      speed = 10;
    
      //third button
    } else if (mouseX > 50 && mouseX < 100 && mouseY > 250 && mouseY < 300){
      fill(255);
      text('you are the love of my life!', width-300, height-100);
      speed = 50;

      //fourth button
    } else if (mouseX > 50 && mouseX < 100 && mouseY > 350 && mouseY < 400){
      fill(255);
      text('and i will be in love with you until the end of time', width-500, height-100);
      speed = 75;

      //fifth button
    } else if (mouseX > 50 && mouseX < 100 && mouseY > 450 && mouseY < 500){
      speed = 100;
    }
}

if (speed == 100){
  //ending screen
  bigend();
}
}

function bigend(){
  background(7, 11, 52);
  textFont('Georgia');
  textSize(25);
  text('heart exploded sorry love ya too much', (width/2)-350, (height/2)-100);
  text('happy valentines day my angel ;)', width/2, (height/2));
  text('A&L forever <3', width/2-150, height/2 + 100);

  //move and display stars
  for (let i = 0; i < stars.length; i++) {
    stars[i].move();
    stars[i].display();
  }

  //shooting star
    if (shootheight<height+50){
      for(let j = 0; j < 15; j++){
        fill(255, 190, 56);
        ellipse(shootwidth-j*-4, shootheight-j*4, 15-j);
        shootheight++;
        shootwidth--;
      }
}
}
 




//star jitters
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(5, 10);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    fill(192, 192, 192);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}


