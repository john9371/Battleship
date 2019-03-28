var shipNum = 0;
var ships = [[1, 1], [1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1], [1, 1], [1, 1][1, 1, 1], [1, 1], [1, 1, 1, 1, 1, 1]]
var settingUp = false;
// document.getElementById('').addEventListener("click", e => {
//     document.getElementById('holding').outerHTML = '';
// })
function setupJS(){
    for (var i = 1; i < 11; i++) {
        for (var j = 1; j < 11; j++) {
            document.getElementById("P-" + i + "-" + j).addEventListener("click", function (e) {
                if (shipNum != 10) {
                    placeship(i, j);
                    shipNum++
                }
            })
        }
    }
}
module.exports.setupJS = setupJS
function placeship(X, Y) {
    if (this.state.Rotation ==true ) {
        for (var i = 0; i < ships[shipNum].length; i++) {
            document.getElementById("P-" + (X + i) + "-" + Y).style.backgroundColor = 'blue';
        }
    } else {

    }

}
function fire(){

}
module.exports.fire = fire
document.addEventListener("keypress", function (e) {
    if (shipNum < 10) {
        movePlayer(e);
    }
}); function movePlayer(e) {
    let dir = 'hor';
    let width = ships[shipNum].length;
    let height = 1;
    let X = 1;
    let Y = 1;

    if (e.key === 'e') {
        for (var i = 1; i < ships[shipNum].length; i++) {
            if (dir === 'hor' && Y + ships[shipNum].length === 11) {
                document.getElementById(X + 1 + "-" + Y).style.backgroundColor = 'white';
                document.getElementById(X + "-" + (Y + 1)).style.backgroundColor = 'blue';
                width = 1;
                height = ships[shipNum].length;
                dir = 'vert';
            }
            if (dir === 'hor' && Y + ships[shipNum].length === 11) {
                document.getElementById(X + "-" + (Y + 1)).style.backgroundColor = 'white';
                document.getElementById(X + 1 + "-" + Y).style.backgroundColor = 'blue';
                height = ships[shipNum].length;
                width = ships[shipNum].length;
                dir = 'hor';
            }
        }
    }
    if (e.key === 'w') {
        if (Y - 1 >= 1) {
            document.getElementById(X + "-" + Y).style.backgroundColor = 'blue';
            document.getElementById(X + 1 + "-" + Y).style.backgroundColor = 'white';
            console.log(X + "-" + Y);
        }
    }
    if (e.key === 's') {
        if (Y + 1 + height < 11) {
            document.getElementById(X + "-" + Y).style.backgroundColor = 'blue';
            document.getElementById(X + "-" + Y - 1).style.backgroundColor = 'white';
        }
    }

    if (e.key === 'd') {
        if (X + 1 + width < 11) {
            document.getElementById(X + "-" + Y).style.backgroundColor = 'blue';
            document.getElementById(X + 1 + "-" + Y).style.backgroundColor = 'white';
        }
    }
    if (e.key === 'a') {
        if (X - 1 >= 0) {
            document.getElementById(X + "-" + Y).style.backgroundColor = 'blue';
            document.getElementById(X + 1 + "-" + Y).style.backgroundColor = 'white';
        }
    }
}