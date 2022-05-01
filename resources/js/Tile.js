export default class Tile {
    letter = '';
    status = ''; // correct, present, absent
    /**
     *
     * @param currentGuess
     * @param theWord
     */
    updateStatus(currentGuess, theWord) {
        // this.status = theWord.includes(this.letter) ? 'present' : 'absent';

        // if(currentGuess.indexOf(this.letter) === theWord.indexOf(this.letter)) {
        //     this.status = 'correct';
        // }
    }

    /**
     *
     * @param key
     */
    fill(key) {
        this.letter = key.toLowerCase();
    }

    empty() {
        this.letter = '';
    }
}
