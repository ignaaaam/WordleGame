export default class Tile {
    letter = '';
    status = ''; // correct, present, absent

    updateStatus(currentGuess, theWord) {
        this.status = theWord.includes(this.letter) ? 'present' : 'absent';

        if(currentGuess.indexOf(this.letter) === theWord.indexOf(this.letter)) {
            this.status = 'correct';
        }
    }

    fill(key) {
        this.letter = key.toLowerCase();
    }

    empty() {
        this.letter = '';
    }
}
