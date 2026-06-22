  const quotes = [
            "the quick brown fox jumps over the lazy dog",
            "success is not final failure is not fatal it is the courage to continue that counts",
            "simplicity is the ultimate sophistication of modern design and functional code",
            "javascript rules the web while cascading style sheets make it look beautiful",
            "focus on the journey not the destination joy is found in the doing"
        ];

        const container = document.getElementById('words-container');
        const hiddenInput = document.getElementById('hidden-input');
        const wpmDisplay = document.getElementById('wpm');
        const accuracyDisplay = document.getElementById('accuracy');
        const timerDisplay = document.getElementById('timer');
        const restartBtn = document.getElementById('restart-btn');

        let words = [];
        let totalTyped = 0;
        let correctTyped = 0;
        let startTime = null;
        let timerInterval = null;
        let isPlaying = false;

        function initGame() {
            clearInterval(timerInterval);
            container.innerHTML = '';
            hiddenInput.value = '';
            wpmDisplay.textContent = '0';
            accuracyDisplay.textContent = '100%';
            timerDisplay.textContent = '0s';
            startTime = null;
            isPlaying = false;
            totalTyped = 0;
            correctTyped = 0;

            // Pick a random quote and split into words/chars
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            words = randomQuote.split(' ');

            words.forEach((wordStr, wIdx) => {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'word';
                
                wordStr.split('').forEach((charStr) => {
                    const charSpan = document.createElement('span');
                    charSpan.className = 'char';
                    charSpan.textContent = charStr;
                    wordSpan.appendChild(charSpan);
                });

                // Add space character span unless it's the last word
                if (wIdx < words.length - 1) {
                    const spaceSpan = document.createElement('span');
                    spaceSpan.className = 'char';
                    spaceSpan.innerHTML = '&nbsp;';
                    wordSpan.appendChild(spaceSpan);
                }
                
                container.appendChild(wordSpan);
            });

            // Set the very first character as current
            container.querySelectorAll('.char')[0].classList.add('current');
        }

        function handleTyping(e) {
            const chars = container.querySelectorAll('.char');
            const typedText = hiddenInput.value;
            
            if (!isPlaying && typedText.length > 0) {
                isPlaying = true;
                startTime = Date.now();
                timerInterval = setInterval(updateStats, 100);
            }

            totalTyped = typedText.length;
            correctTyped = 0;

            chars.forEach((charSpan, index) => {
                charSpan.classList.remove('current', 'correct', 'incorrect');
                
                if (index < typedText.length) {
                    // Normalize &nbsp; for space comparison
                    const expected = charSpan.innerHTML === '&nbsp;' ? ' ' : charSpan.textContent;
                    const actual = typedText[index];
                    
                    if (actual === expected) {
                        charSpan.classList.add('correct');
                        correctTyped++;
                    } else {
                        charSpan.classList.add('incorrect');
                    }
                }

                if (index === typedText.length) {
                    charSpan.classList.add('current');
                }
            });

            updateStats();

            // End game if the user has typed everything
            if (typedText.length >= chars.length) {
                clearInterval(timerInterval);
                isPlaying = false;
            }
        }

        function updateStats() {
            if (!startTime) return;
            const timeElapsed = (Date.now() - startTime) / 1000; // in seconds
            timerDisplay.textContent = `${Math.floor(timeElapsed)}s`;

            // Accuracy calculation
            if (totalTyped > 0) {
                const acc = Math.round((correctTyped / totalTyped) * 100);
                accuracyDisplay.textContent = `${acc}%`;
            }

            // WPM calculation: (Standard word length is 5 characters)
            if (timeElapsed > 0.5) {
                const wpm = Math.round((correctTyped / 5) / (timeElapsed / 60));
                wpmDisplay.textContent = wpm;
            }
        }

        // Event Listeners
        container.addEventListener('click', () => hiddenInput.focus());
        hiddenInput.addEventListener('input', handleTyping);
        restartBtn.addEventListener('click', initGame);
        
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') initGame();
            // Refocus hidden input if user just starts typing
            if (document.activeElement !== hiddenInput && e.key.length === 1) {
                hiddenInput.focus();
            }
        });

        // Start on load
        initGame();
        hiddenInput.focus();
   