const yolo = ml5.YOLO(modelReady);
let upimg;
let img;
let objects = [];
let status;
let uploadLoading = false;
let uploadBtn;
let canvas;
let name = new Array();
let num = new Array();
let q = 0;

function uploaded(file) {
    uploadLoading = true;
    upimg = createImg(file.data, imageReady);
    upimg.hide();
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.addClass("canvas");
    //img = createImg(upimg, imageReady);
    $(".tag").hide();
    uploadBtn = createFileInput(uploaded);
    uploadBtn.addClass("upload-btn");
}

// Change the status when the model loads.
function modelReady() {
    console.log("Model is ready!");
    status = true;
}

function imageReady() {
    console.log("Detecting");
    yolo.detect(upimg, gotResult);
}

function gotResult(err, results) {
    //document.getElementByClassName('uploadBtn').opacity="0";
    uploadBtn.hide();
    $(".tag").show();
    let a = 0;
    if (err) {
        console.log(err);
    }
    console.log(results);
    objects = results;
    //upimg.resize(400,400);
    image(upimg, 0, 0, 300, 300);

    for (let i = 0; i < objects.length; i++) {
        if (i == 0) {
            name[q] = objects[i].label;
            //console.log(objects[i].label);
            num[q] = 1;
        } else if (i > 0 && objects[i].label != objects[i - 1].label) {
            //console.log(objects[i].label);
            q++;
            name[q] = objects[i].label;
            num[q] = 1;
        } else if (i > 0 && objects[i].label == objects[i - 1].label) {
            num[q]++;
            //num++;
        }

        if (objects[i].label == "cat") {
            console.log("1234444");
        }
        if (objects[i].label != "bowl") {
            noFill();
            strokeWeight(2);
            stroke(255, 255, 255);
            rect(
                objects[i].x * width + a,
                objects[i].y * height,
                objects[i].w * width,
                objects[i].h * height,
                5,
                5,
                5,
                5
            );
            strokeWeight(1);
            stroke(0, 0, 0);
            text(
                objects[i].label +
                    " " +
                    nfc(objects[i].confidence * 100.0, 0) +
                    "%",
                objects[i].x * width + 5 + a,
                objects[i].y * height + 15
            );
        }
    }
    for (i = 0; i <= q; i++) {
        console.log(name[i] + " ×" + num[i]);
    }

    //console.log(String(num));
    //text(objects[0].label + " " + nfc(objects[0].confidence * 100.0, 2) + "%");
}

function draw() {}

function reloadPage() {
    window.location.reload();
}
