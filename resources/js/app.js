let grid = document.querySelector('#game');

// the number of guesses (3)
let guessesAllowed = 4;
let wordLength = 3;
// the length of the word (3)

let fragment = document.createDocumentFragment();

let generateGrid = () => {

Array.from({ length:guessesAllowed }).forEach(() => {
    let row = document.createElement('div');
    row.classList.add('row');

    Array.from({ length: wordLength }).forEach(() => {
        let tile = document.createElement('div');
        tile.classList.add('tile');

        row.appendChild(tile);
    });

    fragment.appendChild(row);
});

grid.append(fragment);

}

generateGrid();

// where each row contains 3 columns
// append to the grid


