var area = document.querySelector('.area');

var w = 0;

var count = 0;

area.addEventListener('click', function(event) {
    if(w % 2 == 0) {
        event.target.innerHTML = 'X';
    } else {
        event.target.innerHTML = '0';
    }
    w++;
    check();
    count++
    console.log(count);
});

var boxes = document.querySelectorAll('.box');

var arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    
    [0,3,6],
    [1,4,7],
    [2,5,8],
    
    [0,4,8],
    [2,4,6]
]

function check() {
    for(var i = 0; i < arr.length;i++) {
        if(boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X' ) {
            alert("X - won");
            location.reload();
        }
        else if(boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0' ) {
            alert("0 - won");
            location.reload();
        }
        else if(count == 8) {
            alert("nobody - won");
            location.reload();
            return 0;
        }
    }
}