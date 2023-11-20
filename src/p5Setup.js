// Used to load all assets such as images and fonts
let font;
let buttonImg;

let buzzSnd;
let winSnd;
let beepSnd;
let buttonSnd;
let whooshSnd;

let introMus;

let introVid;
let introGif;

function preload() {
    userStartAudio();
    font = loadFont("./assets/fonts/Nunito-Light.ttf");
    buttonImg = loadImage("./assets/images/green-button.png");

    introVid = createVideo("./assets/videos/APPIntro.mp4");
    introGif = loadImage("./assets/videos/APPIntro.gif");
    introGif.resize(400, 300);
    
    soundFormats('wav');

    buzzSnd = loadSound("./assets/sounds/BuzzSnd");
    winSnd = loadSound("./assets/sounds/WinSnd");
    beepSnd = loadSound("./assets/sounds/BeepSnd");
    buttonSnd = loadSound("./assets/sounds/ButtonSnd");
    whooshSnd = loadSound("./assets/sounds/whooshSnd");

    introMus = loadSound("./assets/sounds/introMus");
}

// The setup function that initializes the p5 code and canvas
// Automatically called
function setup() {
    createCanvas(400, 500);
    changePage("intro");
}

function mouseClicked() {}

//let img = introVid.get();
        //image(img, 0, (height-vidHeight)/2);
      //introVid.loop();


     /* {
        changePage("menu");
          stop(0);
          vPlay(introMus);
      
          background(0);
          frameRate(60);
          let vidHeight = 300;
          introVid.size(width, vidHeight);
          introVid.volume(0);
          introVid.loop();
          introVid.play();
      
          let secCount = 11.0;
          let frameCount = 0;
      
          textSize(30);
          fill(255);
          textAlign(CENTER);
          function draw() {
      
              if (frameCount >= secCount*60) {
                  changePage("menu");
              }
              frameCount++;
              text("Double tap to skip", 0, 450, width);
          }
      
          function doubleClicked() {
              changePage("menu");
          }
      }*/