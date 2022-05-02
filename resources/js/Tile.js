export default class Tile {
    letter = "";
    status = ""; // correct, present, absent

    constructor(position) {
        this.position = position;
    }

    static updateStatusesForRow(row, theWord) {
        for (let tile of row) {
            tile.updateStatus(theWord);
        }

        row.filter((tile) => tile.status === "present")
            .filter((tile) =>
                row.some(
                    (t) => t.letter === tile.letter && t.status === "correct"
                )
            )
            .forEach((tile) => (tile.status = "absent"));
    }

    updateStatus(theWord) {
        if (!theWord.includes(this.letter)) {
            return (this.status = "absent");
        }

        if (this.letter === theWord[this.position]) {
            return (this.status = "correct");
        }

        this.status = "present";
    }

    fill(key) {
        this.letter = key.toLowerCase();
    }

    empty() {
        this.letter = "";
    }
}
