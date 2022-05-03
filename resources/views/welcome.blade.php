<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Play Wordle with unlimited words! Guess words of 3 letters (more will be added in the future). Can you guess the hidden word in 5 tries?">
    <meta name="keywords" content="wordle, game, puzzle, word, words, letters, play, online, guess">
    <title>TryCat - The Wordle Game</title>
    <meta property="og:title" content="TryCat - The Wordle Game">
    <meta property="og:description" content="Play Wordle with unlimited words! Guess words of 3 letters (more will be added in the future). Can you guess the hidden word in 5 tries?">
    <meta property="og:locale" content="en">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://wordlethegame.com">
    <meta property="og:site_name" content="TryCat - The Wordle Game">
    <meta property="og:width" content="1024">
    <meta property="og:height" content="1024">
    <meta property="og:image" content="https://wordlethegame.com/images/wordlegame.png">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Trycat - The Wordle Game">
    <meta name="twitter:description" content="Play Wordle with unlimited words! Guess words of 3 letters (more will be added in the future). Can you guess the hidden word in 5 tries?">
    <meta name="twitter:image" content="https://wordlethegame.com/images/wordlegame.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png">
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

    
    <link rel="stylesheet" href="/css/app.css">
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script src="/js/app.js"></script>
   
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GVY294CEVN"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-GVY294CEVN');
    </script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2554731149063338"
    crossorigin="anonymous"></script>
</head>
<body>
    <main x-data="game"
          @keyup.window="onKeyPress($event.key)"
    >

        <h1 aria-label="TryCat">
            <img class="logo" src="/images/trycat-logo.svg" alt="trycat logo">
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

        <section class="section__how">
                <h1 class="heading">Wordle Game: Guess the Hidden Word</h1>
                <p class="rules">The rules are very simple: You need to guess the hidden word in 5 tries. To get started, just type any word on the first line. If the letter is guessed correctly and is in the correct place, it will be highlighted in green, if the letter is in the word, but in the wrong place - in yellow, and if the letter is not in the word, it will remain gray. Can you guess the hidden word in 5 tries?</p>
        </section>
        
        <section class="section__howto">
            <div class="container">
                <div class="wordle-text">
                    <h1 class="heading heading__title ">How to play the Wordle Game?</h1>
                    <ol class="howto__list">
                        <li class="list__item">
                            <h3>Type the first word</h3>
                            <p>To start just type a 3 letter word & press Enter to find out which letters match the hidden word.
                                you'll have 5 tries to guess the hidden word</p>
                            <img class="how-1" src="/images/how1.png" alt="Type the first word">
                        </li>
                        <li class="list__item">
                            <h3>Find out what letters are in the hidden word</h3>
                            <p>If any letters are marked in yellow, this means that this letter is in the hidden word, but doesn't match the exact location in this word. If any letter is marked in green, then it is in that word and is in the exact location. If the letter doesnt show any color, then it isn't in the hidden word.</p>
                            <img class="how-2" src="/images/how2.png" alt="">
                        </li>
                        <li class="list__item">
                            <h3>Try to guess the hidden word</h3>
                            <p>Now if you know a few letters with the exact location (green) and a few letters that are in the word (yellow) you can try to solve the hidden word and win the game!</p>
                            <img class="how-3" src="/images/how3.png" alt="">
                        </li>
                    </ol>
                </div>
            </div>
        </section>
        <section class="section__soon">
            <h1 class="heading heading__title soon">Coming Soon...</h1>
            <div class="soon">
                <h2 class="soon__heading soon">More languages</h2>
                <h2 class="soon__heading soon">Longer words</h2>
                <h2 class="soon__heading soon">Specific Word games</h2>
                <h2 class="soon__hedaing soon">Dictionary Improvement</h2>
            </div>
        </section>
    </main>
    <footer>
        <div class="footer-container">
            <p>Made with &hearts; by <a class="author-link" href="http://www.ignathedev.com" target="_blank"
                    rel="noopener noreferrer">Ignacio Amat</a></p>
    
            <div class="coffe-button">
                <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
                    data-name="bmc-button" data-slug="ignasiamatz" data-color="#5F7FFF" data-emoji="" data-font="Cookie"
                    data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#ffffff"
                    data-coffee-color="#FFDD00"></script>
            </div>
            <p class="not-affiliated">wordlethegame.com is not affiliated with "Wordle" by NYTimes in any way</p>
        </div>
    </footer>
</body>
</html>
