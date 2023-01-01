let container = document.querySelector('.container');

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

createGrid(16);