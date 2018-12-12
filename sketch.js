var segment = [];
var einer, zehner, input;

function setup() {
  createCanvas(500, 200);
  segment.push(new Segment(100, 60, 10, 50, 9));
  segment.push(new Segment(100, 60, 90, 50, 9));
  segment.push(new Segment(100, 60, 170, 50, 9));
  segment.push(new Segment(100, 60, 250, 50, 9));
  segment.push(new Segment(100, 60, 330, 50, 9));
  segment.push(new Segment(100, 60, 410, 50, 9));
  frameRate(3);

  //console.log(time.getHours());
}

function draw() {
  background(0);
  var today = new Date();
  s = today.getSeconds();
  m = today.getMinutes();
  h = today.getHours();
  fill(255, 0,0);
  ellipse(160, 80, 10);
  ellipse(160, 120, 10);
  ellipse(320, 80, 10);
  ellipse(320, 120, 10);

  einer = Math.floor(s / 1) % 10;
  zehner = Math.floor(s / 10) % 10;
  segment[4].value = zehner;
  segment[5].value = einer;

  einer = Math.floor(m / 1) % 10;
  zehner = Math.floor(m / 10) % 10;
  segment[2].value = zehner;
  segment[3].value = einer;

  einer = Math.floor(h / 1) % 10;
  zehner = Math.floor(h / 10) % 10;
  segment[0].value = zehner;
  segment[1].value = einer;


  segment[0].output();
  segment[1].output();
  segment[2].output();
  segment[3].output();
  segment[4].output();
  segment[5].output();


}
