
import game from './game.min.js';


document.addEventListener('alpine:init', () => {
    Alpine.data('game', () => game);
});
