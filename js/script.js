let container = document.querySelector('.container');
let reset = document.querySelector('#reset');

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
        squareGrid[i].addEventListener('mouseenter', () => {
            squareGrid[i].style.backgroundColor = "#484848";
            squareGrid[i].style.borderColor = "#484848";
        });
    }
}

function resetGrid() {
    let squareGrid = document.querySelectorAll('.grid-item');
    for(let i = 0; i < squareGrid.length; i++){
        squareGrid[i].style.backgroundColor = "white";
        squareGrid[i].style.borderColor ="#ededed";
    }
}

createGrid(16);
drawOnHover();
reset.addEventListener("click", () => {
    resetGrid();
});