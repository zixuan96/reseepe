const yolo = ml5.YOLO(modelReady);
let upimg;
let img;
let objects = [];
let status;
let uploadLoading = false;
let uploadBtn;
let canvas;

function uploaded(file) {
    uploadLoading = true;
    upimg = createImg(file.data, imageReady);
    upimg.hide();
    upimg.size(640, 420);
    //img = upimg;
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.addClass("canvas");
    //img = createImg(upimg, imageReady);

    uploadBtn = createFileInput(uploaded);
    uploadBtn.addClass("upload-btn");
}

// Change the status when the model loads.
function modelReady() {
    console.log("model Ready!");
    status = true;
}

// When the image has been loaded,
// get a prediction for that image
function imageReady() {
    console.log("Detecting");
    yolo.detect(upimg, gotResult);
}

// A function to run when we get any errors and the results
function gotResult(err, results) {
    //document.getElementByClassName('uploadBtn').opacity="0";
    uploadBtn.hide();
    let a = 100;
    if (err) {
        console.log(err);
    }
    console.log(results);
    objects = results;
    image(upimg, a, 0, 640, 420);
    for (let i = 0; i < objects.length; i++) {
        noStroke();
        fill(0, 255, 0);
        console.log(objects[i].label);
        text(
            objects[i].label +
                " " +
                nfc(objects[i].confidence * 100.0, 2) +
                "%",
            objects[i].x * width + 5 + a,
            objects[i].y * height + 15
        );
        if (objects[i].label == "cat") {
            console.log("1234444");
        }
        noFill();
        strokeWeight(4);
        stroke(0, 255, 0);
        rect(
            objects[i].x * width + a,
            objects[i].y * height,
            objects[i].w * width,
            objects[i].h * height
        );
    }
    //text(objects[0].label + " " + nfc(objects[0].confidence * 100.0, 2) + "%");
}

function draw() {}
