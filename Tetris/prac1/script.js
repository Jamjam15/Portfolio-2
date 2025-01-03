const grid = document.querySelector('.grid');
const squares = Array.from(grid.querySelectorAll('div'));
const width = 10;

const lTetromino = [
    [1, width+1, width*2+1, width*2],
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [0, width, width+1, width+2]
]

let currentPosition = 3;
let currentRotation = 0

function draw(){
    lTetromino[currentRotation].forEach(index => {
        squares[currentPosition + index].classList.add('tetromino');
    });
}

draw();