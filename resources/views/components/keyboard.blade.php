<div id="keyboard" @click.stop="$event.target.matches('button') && onKeyPress($event.target.textContent)">
    <template x-for="row in letters">
        <div class="row">
            <template x-for="key in row">
                <button 
                    class="key"
                    :class="matchingTileForKey(key)?.status" 
                    type="button" 
                    x-text="key">
                </button>
            </template>
        </div>
    </template>
</div>