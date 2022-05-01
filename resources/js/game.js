import Tile from "./Tile";
import words from './words';

export default {

    guessesAllowed: 3,
    theWord: 'cat',
    currentRowIndex: 0,
    state: 'active',
    errors: false,
    message: '',
    /**
     *
     * @returns {Tile[]}
     */
    get currentRow() {
        return this.board[this.currentRowIndex];
    },
    /**
     *
     * @returns {string}
     */
    get currentGuess() {
        return this.currentRow.map(tile => tile.letter).join('');
    },
    /**
     *
     * @returns {number}
     */
    get remainingGuesses() {
        return this.guessesAllowed - this.currentRowIndex - 1;
    },

    init() {
        this.board = Array.from({length: this.guessesAllowed}, () => {
            return Array.from({length: this.theWord.length}, () => new Tile);
        });
    },
    /**
     *
     * @param key
     */
    onKeyPress(key) {
        this.message = '';
        this.errors = false;

        if (/^[A-z]$/.test(key)) {
            this.fillTile(key);
        } else if (key === 'Backspace') {
            this.emptyTile();
        } else if (key === 'Enter') {
            this.submitGuess();
        }
    },
    /**
     *
     * @param key
     */
    fillTile(key) {
        for (let tile of this.currentRow) {
            if (!tile.letter) {
                tile.fill(key);

                break;
            }
        }
    },
    emptyTile() {
        for (let tile of [...this.currentRow].reverse()) {
            if(tile.letter) {
                tile.empty();

                break;
            }
        }
    },
    /**
     *
     * @returns {string}
     */
    submitGuess() {
        if (this.currentGuess.length < this.theWord.length) {
            return;
        }

        if (! words.includes(this.currentGuess.toUpperCase())) {
            this.errors = true;
            return this.message = 'Invalid word...';
        }

        // if (! await this.checkDictionary(this.currentGuess)) {
        //     this.errors = true;
        // }

        this.currentRow.forEach(( tile, index) => {
            if (! this.theWord.includes(tile.letter)) {
                return tile.status = 'absent';
            }

            if (this.letter === this.theWord[index]){
                return tile.status = 'correct';
            }

            tile.status = 'present';
        });

        this.currentRow.forEach((tile, index) => {
            if (tile.status !== 'present') return;

            if (this.currentRow.some(t => t.letter === tile.letter && t.status === 'correct')) {
                tile.status = 'absent';
            }
        });

        if (this.currentGuess === this.theWord) {
            this.state = 'complete';

            return this.message = 'You Win!';
        }

        if (this.remainingGuesses === 0) {
            this.state = 'complete';

            return this.message = 'Game Over. You Lose';
        }
        this.currentRowIndex++;

        return this.message = 'Incorrect';
    }
}
