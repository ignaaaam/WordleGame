import Tile from "./Tile";

export default {

        guessesAllowed: 3,
        wordLength: 3,
        currentRowIndex: 0,

        init() {
            this.board = Array.from({ length: this.guessesAllowed }, () => {
                return Array.from({ length: this.wordLength }, () => new Tile);
            });
        },

        onKeyPress(key) {
            if(/^[A-z]$/.test(key)) {
                this.fillTile(key);
            }
        },

        fillTile(key) {
            for (let tile of this.currentRow()) {
                if (! tile.letter){
                    tile.fill(key);

                    break;
                }
            }

            if (this.currentTileIndex === this.wordLength - 1) {
                this.currentRowIndex++;
                this.currentTileIndex = 0;
            } else {
                this.currentTileIndex++;
            }
        },

        currentRow() {
            return this.board[this.currentRowIndex];
        }
}
