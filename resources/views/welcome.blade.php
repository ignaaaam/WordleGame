<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>The Wordle Game</title>
    <link rel="stylesheet" href="/css/app.css">
    <script src="//unpkg.com/alpinejs" defer></script>
    <script src="/js/app.js" ></script>

</head>
<body>
    <div
        id="game"
        x-data="game"
        @keyup.window="onKeyPress($event.key)"
    >
            <template x-for="row in board">
                <div class="row">
                    <template x-for="tile in row">
                        <div class="tile" x-text="tile.letter"></div>
                    </template>
                </div>
            </template>
    </div>
</body>
</html>