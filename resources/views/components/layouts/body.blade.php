<body>
    <main x-data="game"
          @keyup.window="onKeyPress($event.key)"
    >

        <h1 aria-label="TryCat">
            <a href="{{ url('/') }}">
                <img class="logo" src="/images/trycat-logo.svg" alt="trycat logo">
            </a>
            
        </h1>
        
        <x-game></x-game>
        <div class="learn-container">
            <a href="#section-play">
                <span class="learn-text">Learn how to play</span>
                <img class="arrow" src="/images/arrow-32.png" alt="arrow">
            </a>
        </div>

        <x-keyboard />

        <iframe class="prime-iframe1" src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=22&l=ur1&category=pw&banner=1TS7TCAWVBJWGNBTWF02&f=ifr&linkID=0c96f835c11e2e9cc1b61279c9bd3175&t=ignathedev-21&tracking_id=ignathedev-21" width="250" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
        <iframe class="prime-iframe2" src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=13&l=ur1&category=pw&banner=156QRCST8H1YEB0GVER2&f=ifr&linkID=65aabbf832e42c7c98faaec224f69efe&t=ignathedev-21&tracking_id=ignathedev-21" width="468" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
        <iframe class="prime-iframe3" src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=pw&banner=0EY4WWAVQJ8VYDJQHT02&f=ifr&t=ignathedev-21&tracking_id=ignathedev-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none; margin-top: 1rem;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>

        <section class="section__how" id="section-how">
                <h1 class="heading">Wordle Game: Guess the Hidden Word</h1>
                <p class="rules">The rules are very simple: You need to guess the hidden word in 5 tries. To get started, just type any word on the first line. If the letter is guessed correctly and is in the correct place, it will be highlighted in green, if the letter is in the word, but in the wrong place - in yellow, and if the letter is not in the word, it will remain gray. Can you guess the hidden word in 5 tries?</p>
        </section>
        
        <section class="section__howto" id="section-play">
            <div class="container">
                <div class="wordle-text">
                    <h1 class="heading heading__title ">How to play the Wordle Game?</h1>
                    <ol class="howto__list">
                        <li class="list__item">
                            <h3>Type the first word</h3>
                            <p>To start just type a 3 letter word & press Enter to find out which letters match the hidden word.
                                you'll have 5 tries to guess the hidden word</p>
                            <img class="how-1" src="/images/how1.webp" alt="Type the first word">
                        </li>
                        <li class="list__item">
                            <h3>Find out what letters are in the hidden word</h3>
                            <p>If any letters are marked in yellow, this means that this letter is in the hidden word, but doesn't match the exact location in this word. If any letter is marked in green, then it is in that word and is in the exact location. If the letter doesnt show any color, then it isn't in the hidden word.</p>
                            <img class="how-2" src="/images/how2.webp" alt="Find out what letters are in the hidden word">
                        </li>
                        <li class="list__item">
                            <h3>Try to guess the hidden word</h3>
                            <p>Now if you know a few letters with the exact location (green) and a few letters that are in the word (yellow) you can try to solve the hidden word and win the game!</p>
                            <img class="how-3" src="/images/how3.webp" alt="guess the hidden word">
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
        <iframe class="video-iframe1" src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=22&l=ur1&category=prime_video&banner=13AGZ2WR14JSQE7P1402&f=ifr&linkID=8ab236e77d3e09d21453e64c629c7222&t=ignathedev-21&tracking_id=ignathedev-21" width="250" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
        <iframe class="video-iframe2" src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=12&l=ur1&category=prime_video&banner=093TP09QSWSGKXVP9S82&f=ifr&linkID=65813d1143bae535f7f4fc876ee41a45&t=ignathedev-21&tracking_id=ignathedev-21" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
        <iframe class="video-iframe3" src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=prime_video&banner=1WM3P83JBRAEDHZ74YR2&f=ifr&linkID=22d39bac0acbe05da26012619a65489b&t=ignathedev-21&tracking_id=ignathedev-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
    </main>
</body>