function preload() {
    video = createVideo("video.mp4");
    video.hide();
}

function setup() {
    canvas = createCanvas(400, 340);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 400, 340);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: detecting objects...";
}

function modelLoaded() {
    console.log("COCOSSD has loaded!");
    Status = true;

    video.loop();
    video.volume(0);
    video.rate(1);
}