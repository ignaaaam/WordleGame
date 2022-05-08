<!doctype html>
<html lang="en" translate="no">
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

    <script src="https://kit.fontawesome.com/97b71d5e31.js" crossorigin="anonymous"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

    
    <link rel="stylesheet" href="css/app.css">
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
        <main>
            <h1 aria-label="TryCat">
                <a href="{{ url('/') }}">
                    <img class="logo" src="/images/trycat-logo.svg" alt="trycat logo">
                </a>
                
            </h1>
            <h1 class="not-found-text">Woops... Something went wrong</h1>

            <a class="back-link" href="{{ url('/') }}"><i class="fa-solid fa-arrow-left-long"></i> Go back </a>
        </main>
    </body>
    <x-layouts.footer></x-layouts.footer>
</html>
