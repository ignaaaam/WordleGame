<div id="game">
    <template x-for="(row, index) in board">
        <div class="row" :class="{'current' : currentRowIndex === index, 'invalid' : currentRowIndex === index && errors}">
            <template x-for="tile in row">
                <div class="tile" :class="tile.status" x-text="tile.letter"></div>
            </template>
        </div>
    </template>
</div>

<output x-text="message"></output>