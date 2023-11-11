
import game from './game.min.js';
import '../css/app.css';

document.addEventListener('alpine:init', () => {
    Alpine.data('game', () => game);
});
