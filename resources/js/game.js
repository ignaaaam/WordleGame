import Tile from "./Tile";
import { threeWords, theWords } from "./3-letter-words";


export default {
    guessesAllowed: Math.floor(Math.random() * 4) + 2,
    theWord: threeWords[Math.floor(Math.random() * threeWords.length)],
    currentRowIndex: 0,
    state: "active",
    errors: false,
    message: "",

    letters: [
        "QWERTYUIOP".split(""),
        "ASDFGHJKL".split(""),
        ["Backspace", ..."ZXCVBNM".split(""), "Enter"],
    ],

    get currentRow() {
        return this.board[this.currentRowIndex];
    },

    get currentGuess() {
        return this.currentRow.map((tile) => tile.letter).join("");
    },

    get remainingGuesses() {
        return this.guessesAllowed - this.currentRowIndex - 1;
    },

    init() {
        this.board = Array.from({ length: this.guessesAllowed }, () => {
            return Array.from(
                { length: this.theWord.length },
                (item, index) => new Tile(index)
            );
        });
    },

    matchingTileForKey(key) {
        return this.board
            .flat()
            .filter((tile) => tile.status)
            .sort((t1, t2) => t2.status === "correct")
            .find((tile) => tile.letter === key.toLowerCase());
    },

    onKeyPress(key) {
        this.message = "";
        this.errors = false;

        if (/^[A-z]$/.test(key)) {
            this.fillTile(key);
        } else if (key === "Backspace") {
            this.emptyTile();
        } else if (key === "Enter") {
            this.submitGuess();
        }
    },

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
            if (tile.letter) {
                tile.empty();

                break;
            }
        }
    },

    submitGuess() {
        if (this.currentGuess.length < this.theWord.length) {
            return;
        }

        if (!threeWords.includes(this.currentGuess.toUpperCase())) {
            this.errors = true;
            this.message = "Invalid word...";

            return;
        }

        Tile.updateStatusesForRow(this.currentRow, this.theWord);

        if (this.currentGuess === this.theWord) {
            this.state = "complete";

            this.message = "You Win!";

            var count = 200;
            var defaults = {
                origin: { y: 0.7 },
            };

            function fire(particleRatio, opts) {
                confetti(
                    Object.assign({}, defaults, opts, {
                        particleCount: Math.floor(count * particleRatio),
                    })
                );
            }

            fire(0.25, {
                spread: 26,
                startVelocity: 55,
            });
            fire(0.2, {
                spread: 60,
            });
            fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8,
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2,
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 45,
            });
        } else if (this.remainingGuesses === 0) {
            this.state = "complete";

            this.message = `Game Over. You Lose. The word was ${this.theWord.toUpperCase()}`;
        } else {
            this.currentRowIndex++;

            //this.message = "Incorrect";
        }
    },
};
