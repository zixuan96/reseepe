class Picture {
    constructor(img) {
        this.img = img;
    }
    uploadPic(t) {
        let fileObj = t,
            windowURL = window.URL || window.webkitURL,
            dataURL,
            _img = document.getElementById(this.img);
        if (fileObj && fileObj.files && fileObj.files[0]) {
            dataURL = windowURL.createObjectURL(fileObj.files[0]);
            _img.setAttribute("src", dataURL);
        } else {
            dataURL = t.value;
            let imgObj = document.getElementById(this.img);
            imgObj.style.filter =
                "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            imgObj.filters.item(
                "DXImageTransform.Microsoft.AlphaImageLoader"
            ).src = dataURL;
        }
    }
}

document.getElementById("add-pic-btn").addEventListener("change", function () {
    let newPic = new Picture("add-pic-img");
    newPic.uploadPic(this);
});
