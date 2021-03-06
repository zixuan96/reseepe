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
let sum = 0;

let fruit = new Array(
    "apple",
    "banana",
    "cherry",
    "grape",
    "kiwi",
    "orange",
    "peach",
    "pear",
    "plum",
    "pineapple",
    "strawberry",
    "broccoli",
    "carrot",
    "cucumber",
    "cabbage",
    "lettuce",
    "tomato",
    "potato"
);
let calo = new Array(
    52,
    87,
    5,
    3,
    2,
    45,
    42,
    96,
    30,
    96,
    38,
    45,
    30,
    14,
    26,
    10,
    25,
    110
);

function uploaded(file) {
    uploadLoading = true;
    upimg = createImg(file.data, imageReady);
    upimg.hide();
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.addClass("canvas");
    $(".tag").hide();
    uploadBtn = createFileInput(uploaded);
    uploadBtn.addClass("upload-btn");
}

function modelReady() {
    console.log("Model is ready!");
    status = true;
}

function imageReady() {
    console.log("Detecting");
    yolo.detect(upimg, gotResult);
}

function gotResult(err, results) {
    uploadBtn.hide();
    $(".tag").show();

    let a = 0;
    if (err) {
        console.log(err);
    }
    console.log(results);
    objects = results;
    image(upimg, 0, 0, 300, 300);

    for (let i = 0; i < objects.length; i++) {
        if (i == 0) {
            name[q] = objects[i].label;
            num[q] = 1;
        } else if (i > 0 && objects[i].label != objects[i - 1].label) {
            q++;
            name[q] = objects[i].label;
            num[q] = 1;
        } else if (i > 0 && objects[i].label == objects[i - 1].label) {
            num[q]++;
        }

        noFill();
        strokeWeight(2);
        stroke(0, 0, 0);
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
        text(
            objects[i].label,
            objects[i].x * width + 5 + a,
            objects[i].y * height + 15
        );
    }
    for (i = 0; i <= q; i++) {
        document.getElementById("ing").innerHTML =
            document.getElementById("ing").innerHTML +
            name[i] +
            " × " +
            num[i] +
            "<br>";
        console.log(name[i] + " × " + num[i]);

        for (h = 0; h <= fruit.length; h++) {
            if (name[i] == fruit[h]) {
                sum = sum + calo[h] * num[i].toFixed(1);
                document.getElementById("heat").innerHTML =
                    document.getElementById("heat").innerHTML +
                    calo[h].toFixed(1) +
                    " × " +
                    num[i] +
                    " cal<br>";
                console.log(calo[h] + " × " + num[i]);
                console.log(sum);
            }
        }
    }
    document.getElementById("heat").innerHTML =
        document.getElementById("heat").innerHTML +
        "<br>Total: " +
        String(sum.toFixed(1)) +
        " cal";
}

function draw() {}

function reloadPage() {
    window.location.reload();
}