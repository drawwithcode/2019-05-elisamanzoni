var capture;
var rectangle;
var button;

function preload() {
  cowboy_hat = loadImage("./images/cowboy-hat.png");
  mustache = loadImage("./images/mustache.png");
  cilinder = loadImage("./images/cilinder.png");
  papillon = loadImage("./images/papillon.png");
  sunglasses = loadImage("./images/sunglasses.png");
  glasses = loadImage("./images/glasses.png");
  wood_frame = loadImage("./images/wood-frame.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  cowboy = new Images(300, 300, 100, 40, cowboy_hat);
  mustache2 = new Images(200, 100, 100, 40, mustache);
  cilinder3 = new Images(windowWidth - 200, 200, 100, 40, cilinder);
  papillon4 = new Images(windowWidth - 300, 500, 100, 40, papillon);
  sunglasses5 = new Images(300, 600, 100, 40, sunglasses);
  glasses6 = new Images(windowWidth - 200, 650, 100, 40, glasses);


  button = createButton('click to save');
  button.position(windowWidth / 2 - 75, windowHeight - 100);
  button.style('height', '50px');
  button.style('width', '150px');
  button.style('font-size', '20px');
  button.style('border', '0');
  button.style('background', 'white');
  button.mousePressed(savePicture);

}

function draw() {

  background('#ffecd5');

  var myFeed = capture.loadPixels();

  imageMode(CENTER);
  image(myFeed, windowWidth / 2, windowHeight / 2, 640, 480);
  image(wood_frame, windowWidth / 2, windowHeight / 2, wood_frame.width, wood_frame.height);

  textSize(40);
  textAlign(CENTER);
  text('accessorize yourself!', windowWidth / 2, 100);



  rectMode(CENTER);
  cowboy.display();
  mustache2.display();
  cilinder3.display();
  papillon4.display();
  sunglasses5.display();
  glasses6.display();


  //line(mouseX, mouseY, pmouseX, pmouseY);

  // you can also add filters!
}

function mouseDragged() {

  console.log("Mouse dragged");

  var r = cowboy_hat.height / 2;
  var x1 = cowboy.x;
  var y1 = cowboy.y;

  if (dist(x1, y1, mouseX, mouseY) < r) {
    cowboy.dragged();
  }

  //mustache

  var r = mustache.width / 2;
  var x2 = mustache2.x;
  var y2 = mustache2.y;

  if (dist(x2, y2, mouseX, mouseY) < r) {
    mustache2.dragged();
  }

  //cilinder

  var r = cilinder.width / 2;
  var x3 = cilinder3.x;
  var y3 = cilinder3.y;

  if (dist(x3, y3, mouseX, mouseY) < r) {
    cilinder3.dragged();
  }

  //papillon

  var r = papillon.width / 2;
  var x4 = papillon4.x;
  var y4 = papillon4.y;

  if (dist(x4, y4, mouseX, mouseY) < r) {
    papillon4.dragged();
  }

  //sunglasses

  var r = sunglasses.height / 2;
  var x5 = sunglasses5.x;
  var y5 = sunglasses5.y;

  if (dist(x5, y5, mouseX, mouseY) < r) {
    sunglasses5.dragged();
  }

  //glasses

  var r = glasses.height / 2;
  var x6 = glasses6.x;
  var y6 = glasses6.y;

  if (dist(x6, y6, mouseX, mouseY) < r) {
    glasses6.dragged();
  }






  // prevent default
  return false;
}

function Images(_x, _y, _width, _height, _imageName) {
  this.x = _x;
  this.y = _y;
  this.width = _width;
  this.height = _height;
  this.color = 'blue';
  this.name = _imageName

  this.display = function() {

    image(_imageName, this.x, this.y, _imageName.width, _imageName.height)
  }

  this.dragged = function() {
    this.x = mouseX;
    this.y = mouseY;
  }

}

function savePicture() {
  saveCanvas('myPicture.jpg');
}
