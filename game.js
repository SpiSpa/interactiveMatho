

function answerPressed(clickedImage){
    if ($("#" + clickedImage).hasClass("pressed")) {
        $("#" + clickedImage).removeClass("pressed")
    }
    else {
    $("#" + clickedImage).addClass("pressed");
    }
}

$("img").click(function() {
    var clickedImage = this.id;
    console.log("I clicked " + clickedImage);
    answerPressed(clickedImage);
})
