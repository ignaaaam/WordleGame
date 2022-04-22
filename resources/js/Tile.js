export default class Tile {
    letter = '';
    status = ''; // correct, present, absent

    fill(key) {
        this.letter = key.toLowerCase();
    }

    empty() {
        this.letter = '';
    }
}
