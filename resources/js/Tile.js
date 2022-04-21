export default class Tile {
    letter = '';
    status = ''; // correct, present, absent

    fill(key) {
        this.letter = key.toUpperCase();
    }

    empty() {
        this.letter = '';
    }
}
