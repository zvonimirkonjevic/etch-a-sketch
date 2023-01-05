let container = document.querySelector('.container');
let reset = document.querySelector('#reset');
let input = document.querySelector('#input');
let value = parseInt(document.getElementById('grid-size').value);
let uiHeight = container.offsetHeight;

function createGrid(dimension){
    let squareEdge = uiHeight / dimension;
    container.style.setProperty('--grid-rows', dimension);
    container.style.setProperty('--grid-cols', dimension);
    container.style.setProperty('--grid-size', squareEdge + 'px');

    for(let i = 0; i < dimension*dimension; i++){
        let square = document.createElement('div');
        container.appendChild(square).className = 'grid-item';
    }
}

function drawOnHover(){
    let squareGrid = document.querySelectorAll('.grid-item');
    for(let i = 0; i < squareGrid.length; i++){
        squareGrid[i].addEventListener('mouseenter', function(e) {
            if(e.shiftKey){
                squareGrid[i].style.backgroundColor = "#848484";
                squareGrid[i].style.transition = "all 125ms linear";
                squareGrid[i].style.borderColor = "#848484";
            }
            else if(e.altKey){
                squareGrid[i].style.cursor = "pointer";
            }
            else{
                squareGrid[i].style.backgroundColor = "#484848";
                squareGrid[i].style.transition = "all 125ms linear";
                squareGrid[i].style.borderColor = "#484848";
            }
        });
    }
}

function resetGrid() {
    reset.addEventListener('click', () => {
        let squareGrid = document.querySelectorAll('.grid-item');
        for(let i = 0; i < squareGrid.length; i++){
            squareGrid[i].style.backgroundColor = "white";
            squareGrid[i].style.borderColor ="#ededed";
        }
    });
}

function removeGrid(){
    let squareGrid = document.querySelectorAll('.grid-item');
    for(let i = 0; i < squareGrid.length; i++){
        container.removeChild(squareGrid[i]);
    }
}

function updateGrid(){
    input.addEventListener('click', () => {
        value = parseInt(document.getElementById('grid-size').value);
        if(value <= 100 && value > 1){
            removeGrid();
            createGrid(value);
            drawOnHover();
            resetGrid();
        }
    });
}

function etchASketch(){
    createGrid(value);
    updateGrid();
    drawOnHover();
    resetGrid();
}

etchASketch();