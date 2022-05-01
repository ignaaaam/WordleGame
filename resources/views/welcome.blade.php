<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>The Wordle Game</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="/css/app.css">
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script src="/js/app.js"></script>

</head>
<body>
    <main x-data="game"
          @keyup.window="onKeyPress($event.key)"
    >

        <h1 aria-label="TryCat">
            <img src="/images/trycat-logo.svg" alt="">
        </h1>
        
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
    </main>
</body>
</html>
