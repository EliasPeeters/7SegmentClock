function setColor(input) {
  if (input) {
    fill(255, 0, 0);
  }
  else {
    fill(50, 0, 0);
  }
}

function Segment(height, width, x, y, barWidth) {
  this.height = height;
  this.width = width;
  this.x = x;
  this.y = y;
  this.barWidth = barWidth;
  this.barLengthV = (this.height - this.barWidth*3) / 2;
  this.barLengthH = (this.width) - (2*this.barWidth);
  this.segmentsOnOff = [false, false, false, false, false, false, false];
  this.value = -1;

  //console.log(this.barLengthV);

  this.update = function() {
    if (this.value == -1) {
      this.segmentsOnOff = [false, false, false, false, false, false, false];
      console.log('0');
    }
    if (this.value == 0) {
      this.segmentsOnOff = [true, true, true, false, true, true, true];
      console.log('0');
    }
    else if (this.value == 1) {
      this.segmentsOnOff = [false, false, true, false, false, true, false];
    }
    else if (this.value == 2) {
      this.segmentsOnOff = [true, false, true, true, true, false, true];
    }
    else if (this.value == 3) {
      this.segmentsOnOff = [true, false, true, true, false, true, true];
    }
    else if (this.value == 4) {
      this.segmentsOnOff = [false, true, true, true, false, true, false];
    }
    else if (this.value == 5) {
      this.segmentsOnOff = [true, true, false, true, false, true, true];
    }
    else if (this.value == 6) {
      this.segmentsOnOff = [true, true, false, true, true, true, true];
    }
    else if (this.value == 7) {
      this.segmentsOnOff = [true, false, true, false, false, true, false];
    }
    else if (this.value == 8) {
      this.segmentsOnOff = [true, true, true, true, true, true, true];
    }
    else if (this.value == 9) {
      this.segmentsOnOff = [true, true, true, true, false, true, true];
    }
  }

  this.draw = function() {
    setColor(this.segmentsOnOff[0]);
    rect(this.x + this.barWidth , this.y ,this.barLengthH, this.barWidth, this.barWidth);                      //1

    setColor(this.segmentsOnOff[1]);
    rect(this.x, this.barWidth+this.y, this.barWidth, this.barLengthV, this.barWidth);                //2

    setColor(this.segmentsOnOff[2]);
    rect(this.width+this.x-this.barWidth, this.barWidth + this.y, this.barWidth, this.barLengthV, this.barWidth);       //3

    setColor(this.segmentsOnOff[3]);
    rect(this.barWidth+this.x, this.y + this.height/2 - this.barWidth/2,this.barLengthH, this.barWidth, this.barWidth);      //4

    setColor(this.segmentsOnOff[4]);
    rect(this.x, this.y+ this.barLengthV + 2*this.barWidth, this.barWidth, this.barLengthV, this.barWidth); //5

    setColor(this.segmentsOnOff[5]);
    rect((this.width+this.x-this.barWidth), this.y+ this.barLengthV + 2*this.barWidth, this.barWidth, this.barLengthV, this.barWidth);

    setColor(this.segmentsOnOff[6]);
    rect(this.barWidth+this.x,this.y+ this.height - this.barWidth, this.barLengthH, this.barWidth, this.barWidth);
  }

  this.output = function() {
    this.update();
    this.draw();
  }
}
