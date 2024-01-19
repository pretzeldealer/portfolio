// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/3-teachable-audio
// https://editor.p5js.org/codingtrain/sketches/e3nrNMG7A

function closePop(){
  document.getElementById("popUp").style.display="none"
}

// Storing the label
let label = "waiting...";
let playButton;
let wave;
let playing;
let turnOn;
let sel;
let freq;
let radios;
let chart;
let abchart, achart, bbchart, bchart, cchart, cschart, dchart, ebchart, echart, fchart, fschart, gchart;

// Classifier and model url
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/BszNPB19U/';


// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
  bg = loadImage('paper.jpg');
  abchart = loadImage('abchart.jpg');
  achart = loadImage('achart.jpg');
  bbchart = loadImage('bbchart.jpg');
  bchart = loadImage('bchart.jpg');
  cchart = loadImage('cchart.jpg');
  cschart = loadImage('cschart.jpg');
  dchart = loadImage('dchart.jpg');
  ebchart = loadImage('ebchart.jpg');
  echart = loadImage('echart.jpg');
  fchart = loadImage('fchart.jpg');
  fschart = loadImage('fschart.jpg');
  gchart = loadImage('gchart.jpg');
}

function setup() {
  createCanvas((displayWidth-20), displayHeight-230);

  // STEP 2: Start classifying (will listen to mic by default)
  classifyAudio();

  wave = new p5.Oscillator('sine');

  playButton = createButton('Hear note')
  .position(width/2.2, 100)
  .style('font-family', 'EB Garamond')
  .style('font-size', '24px')
  .style('background', 'black')
  .style('color', 'beige')
  .style('height', '40px')
  .style('width', '200px')

  .mouseOver(() => (playButton.style('background', 'none'), (playButton.style('border', '3px solid black')), (playButton.style('color', 'black'))))
  .mouseOut(() => (playButton.style('background', 'black'), (playButton.style('color', 'beige'))))
  playButton.mousePressed(turnOn);

  

}

// STEP 2 classify!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {

  background(bg);
  
  //code from https://stackoverflow.com/questions/15839169/how-to-get-the-value-of-a-selected-radio-button starts here
  sel = document.querySelector("input[type='radio'][name=mode]:checked").value;
  //code from https://stackoverflow.com/questions/15839169/how-to-get-the-value-of-a-selected-radio-button ends here
  console.log(sel);

  // STEP 4: Draw the label
  // textSize(32);
  textAlign(CENTER, CENTER);
  // fill(255);
  // text(label, width/2, height - 16);

  // Background noise is headphones
  let note = "silence";
  let color = "black"
  if (label == sel) {
    console.log("MATCHESSSS")
    color = "green"
  } else if (label != sel) {
    color = "red"
  }
  fill(color)
  textSize(60);
  noStroke()

  // Pick an emoji based on label
  if (label == "Ab") {
    note = "Ab";
    text("♭", 345, 460);
    noFill()
    stroke(color)
    ellipse(400, 475, 60, 40) 
  } else if (label == "A") {
    note = "A";
    stroke(color)
    noFill()
    ellipse(475, 475, 60, 40)
  }else if (label == "Bb") {
    note = "Bb";
    text("♭", 495, 435);
    noFill()
    stroke(color)
    ellipse(550, 450, 60, 40)
  }else if (label == "B") {
    note = "B";
    stroke(color)
    noFill()
    ellipse(625, 450, 60, 40)
  }else if (label == "C") {
    note = "C";
    stroke(color)
    noFill()
    ellipse(700, 425, 60, 40)
  }else if (label == "C#") {
    note = "C#";
    text("♯", 720, 410);
    noFill()
    stroke(color)
    ellipse(775, 425, 60, 40)
  }else if (label == "D") {
    note = "D";
    stroke(color)
    noFill()
    ellipse(850, 400, 60, 40)
  } else if (label == "Eb") {
    note = "Eb";
    text("♭", 870, 360);
    noFill()
    stroke(color)
    ellipse(925, 375, 60, 40)
  } else if (label == "E") {
    note = "E";
    stroke(color)
    noFill()
    ellipse(1000, 375, 60, 40)
  } else if (label == "F") {
    note = "F";
    stroke(color)
    noFill()
    ellipse(1075, 350, 60, 40)
  } else if (label == "F#") {
    note = "F#";
    text("♯", 1095, 335);
    noFill()
    stroke(color)
    ellipse(1150, 350, 60, 40)
  } else if (label == "G") {
    note = "G";
    stroke(color)
    noFill()
    ellipse(1225, 325, 60, 40)
  }

  if (sel == "Ab") {
    freq = 415;
    chart = abchart;
  } else if (sel == "A") {
    freq = 440;
    chart = achart;
  } else if (sel == "Bb") {
    freq = 466;
    chart = bbchart;
  } else if (sel == "B") {
    freq = 493;
    chart = bchart;
  } else if (sel == "C") {
    freq = 523;
    chart = cchart;
  } else if (sel == "C#") {
    freq = 554;
    chart = cschart;
  } else if (sel == "D") {
    freq = 587
    chart = dchart;
  } else if (sel == "Eb") {
    freq = 622;
    chart = ebchart;
  } else if (sel == "E") {
    freq = 659;
    chart = echart;
  } else if (sel == "F") {
    freq = 698;
    chart = fchart;
  } else if (sel == "F#") {
    freq = 739;
    chart = fschart;
  } else if (sel == "G") {
    freq = 783;
    chart = gchart;
  }

  strokeWeight(8)
  stroke('black')
  line(200, 350, 1300, 350);
  line(200, 400, 1300, 400);
  line(200, 450, 1300, 450);
  line(200, 500, 1300, 500);
  line(200, 550, 1300, 550);




  //treble clef symbol from https://www.piliapp.com/symbol/music/
  clef = createP("𝄞")
  .style('font-size', '270px')
  .position(200, 80);

  image(chart, (width/2)-500, 80, 900, 200);

  let selected =""
  if (playing){
  selected = "A"
    wave.amp(1);
    wave.freq(freq);
}

}

// STEP 3: Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Store the label
  label = results[0].label;
}

turnOn = () => {
  if (!playing){
       playing = true;
       wave.start();
  
  } else {
       playing = false
       wave.stop();
  }
}
