let results = "";

function opencal() {
    if ($("#rec").is(":hidden")) {
        $("#rec").show();
        $("#cal").css("opacity", 1);
        return;
    }
    if ($("#rec").is(":visible")) {
        $("#rec").hide();
        $("#cal").css("opacity", 0.4);
        return;
    }
}

function rec() {
    if (event.srcElement.innerText == "=") {
        return;
    }
    if (event.srcElement.innerText == "c") {
        results = "";
        display.innerText = "0";
        return;
    }
    results += event.srcElement.innerText;
    display.innerText = results;
}
function sum1() {
    calresults = eval(results);
    display.innerText = calresults;
}
