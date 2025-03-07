const rows = 5;
const cols = 5;
const boardArray = Array.from({ length: rows }, () => new Array(cols).fill(0));

// changes each image to what order we need it.  
window.onload = () => {
    $('#00').prop('src', 'answers/flamingo.jpg');
    console.log("images replaced");
  };
  
console.log("board array created.")
console.log(boardArray);
function answerPressed(clickedImage){
    const xVal = clickedImage.charAt(0);
    const yVal = clickedImage.charAt(1);
    console.log(`xVal is ${xVal} and yVal is ${yVal}`);
    if ($("#" + clickedImage).hasClass("pressed")) {
        $("#" + clickedImage).removeClass("pressed");
        boardArray[xVal][yVal] = 0; // haven't checked this part yet
        console.log("board array value" + boardArray[xVal][yVal]);

    }
    else {
    $("#" + clickedImage).addClass("pressed");
    boardArray[xVal][yVal] = 1;  //haven't checked this part yet
    console.log("board array value" + boardArray[xVal][yVal]);
    }
    winCheck();
}

 
$("img").click(function() {
    var clickedImage = this.id;
    console.log("I clicked " + clickedImage);
    console.log(boardArray[2][2]);
    answerPressed(clickedImage);
    
})

function winCheck() {
    for (i = 0; i < 5; i++){
        var checkValueX = boardArray[i][0] + boardArray[i][1] + boardArray[i][2] + boardArray[i][3] + boardArray[i][4];
        console.log("Checked x value for i:" + i + "is" + checkValueX);
        if (checkValueX === 5) {
            alert("you win!");
            return;
        }
        var checkValueY = boardArray[0][i] + boardArray[1][i] + boardArray[2][i] + boardArray[3][i] + boardArray[4][i];
        console.log("Checked x value for i:" + i + "is" + checkValueY);
        if (checkValueY === 5) {
            alert("you win!");
            return;
        }
    }
    checkValueD1 = boardArray[0][0] + boardArray[1][1] + boardArray[2][2] + boardArray[3][3] + boardArray[4][4];
    if (checkValueD1 === 5) {
        alert("you win!");
        return;
    }
    checkValueD2 = boardArray[0][4] + boardArray[1][3] + boardArray[2][2] + boardArray[3][1] + boardArray[4][0];
    if (checkValueD2 === 5) {
        alert("you win!");
        return;
    }

}
