 // --- BRAND SLIDESHOW LOGIC ---
        let currentSlide = 0;
        const totalSlides = document.querySelectorAll('.slide-item').length;
        const slideTrack = document.getElementById('slideTrack');
        const dots = document.querySelectorAll('.slide-dot');
        const progressBar = document.getElementById('progressBar');
        
        const slideDuration = 6000; 
        let progressInterval;
        let progressElapsed = 0;

        function updateSlidePosition() {
            slideTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.remove('bg-white/30');
                    dot.classList.add('bg-white', 'w-4'); 
                } else {
                    dot.classList.remove('bg-white', 'w-4');
                    dot.classList.add('bg-white/30');
                }
            });

            const activeSlideContents = document.querySelectorAll('.slide-item')[currentSlide].querySelectorAll('h2, p');
            document.querySelectorAll('.slide-item h2, .slide-item p').forEach(el => {
                el.classList.remove('animate-text-up');
                el.style.opacity = '0';
            });
            activeSlideContents.forEach((el, index) => {
                el.style.animationDelay = `${index * 0.15}s`;
                el.classList.add('animate-text-up');
            });

            resetProgressBar();
        }

        function moveSlide(direction) {
            currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
            updateSlidePosition();
            restartAutoplay();
        }

        function setSlide(index) {
            currentSlide = index;
            updateSlidePosition();
            restartAutoplay();
        }

        function startProgressBar() {
            progressElapsed = 0;
            clearInterval(progressInterval);
            const intervalStep = 50; 
            
            progressInterval = setInterval(() => {
                progressElapsed += intervalStep;
                const progressPercentage = (progressElapsed / slideDuration) * 100;
                progressBar.style.width = `${Math.min(progressPercentage, 100)}%`;
                
                if (progressElapsed >= slideDuration) {
                    moveSlide(1);
                }
            }, intervalStep);
        }

        function resetProgressBar() {
            progressBar.style.width = '0%';
            progressElapsed = 0;
        }

        function restartAutoplay() {
            startProgressBar();
        }


        // --- REALTIME COUNTDOWN ENGINE (UP TO MICROSECONDS) ---
        // Setup countdown target timeline exactly 7 days into the future for presentation consistency
        const targetTimeline = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);

        function updateCountdownClock() {
            // Using standard high-resolution performance counters context for precision framing
            const now = performance.timeOrigin + performance.now();
            const target = targetTimeline;
            const absoluteDifference = target - now;

            if (absoluteDifference <= 0) {
                document.getElementById('timer-days').innerText = "00";
                document.getElementById('timer-hours').innerText = "00";
                document.getElementById('timer-minutes').innerText = "00";
                document.getElementById('timer-seconds').innerText = "00";
                document.getElementById('timer-micros').innerText = "000000";
                return;
            }

            // Math segmentation layout
            const days = Math.floor(absoluteDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((absoluteDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((absoluteDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((absoluteDifference % (1000 * 60)) / 1000);
            
            // Extract trailing microsecond segments accurately
            const millisecondsFraction = absoluteDifference % 1000;
            const microseconds = Math.floor((millisecondsFraction % 1) * 1000) + Math.floor(millisecondsFraction * 1000);

            // Print visual updates onto display components strings
            document.getElementById('timer-days').innerText = String(days).padStart(2, '0');
            document.getElementById('timer-hours').innerText = String(hours).padStart(2, '0');
            document.getElementById('timer-minutes').innerText = String(minutes).padStart(2, '0');
            document.getElementById('timer-seconds').innerText = String(seconds).padStart(2, '0');
            document.getElementById('timer-micros').innerText = String(microseconds).padStart(6, '0');

            // Fire structural animation update recursively using animation frames loop (essential for microsecond syncing)
            requestAnimationFrame(updateCountdownClock);
        }


        // --- SCROLL ACTION COUNTER ENGINE ---
        function initCounters() {
            const counters = document.querySelectorAll('.counter');
            const speed = 140; 

            counters.forEach(counter => {
                const animate = () => {
                    const target = +counter.getAttribute('data-target');
                    const data = +counter.innerText;
                    const time = target / speed;

                    if (data < target) {
                        counter.innerText = Math.ceil(data + time);
                        setTimeout(animate, 15);
                    } else {
                        counter.innerText = target;
                    }
                };
                
                const observer = new IntersectionObserver((entries) => {
                    if(entries[0].isIntersecting) {
                        animate();
                        observer.disconnect(); 
                    }
                }, { threshold: 0.5 });
                
                observer.observe(counter);
            });
        }


        // --- PORTFOLIO FILTER LOGIC ---
        function filterProjects(category) {
            const buttons = document.querySelectorAll('.tab-btn');
            buttons.forEach(btn => {
                btn.classList.remove('bg-white', 'text-black', 'shadow-sm');
                btn.classList.add('text-gray-400', 'hover:text-white');
            });

            const activeBtn = document.getElementById(`btn-${category}`);
            activeBtn.classList.remove('text-gray-400', 'hover:text-white');
            activeBtn.classList.add('bg-white', 'text-black', 'shadow-sm');

            const cards = document.querySelectorAll('.project-card');
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'flex';
                    void card.offsetWidth; 
                    card.style.transform = 'scale(1)';
                    card.style.opacity = '1';
                } else {
                    card.style.transform = 'scale(0.95)';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        if (card.style.opacity === '0') card.style.display = 'none';
                    }, 400);
                }
            });
        }

        // Global System Initialization
        document.addEventListener('DOMContentLoaded', () => {
            updateSlidePosition();
            startProgressBar();
            initCounters();
            requestAnimationFrame(updateCountdownClock); // Boot the microsecond clock safely
        });

        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(15px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);

        
        // NAVIGATION MANAGER
        function navigateTo(targetPage) {
            document.querySelectorAll('.page-section').forEach(section => section.classList.remove('active-page'));
            const targetSection = document.getElementById(`page-${targetPage}`);
            if (targetSection) targetSection.classList.add('active-page');
            
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('nav-active'));
            const navLink = document.getElementById(`nav-${targetPage}`);
            if (navLink) navLink.classList.add('nav-active');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        function toggleFaqElement(element) {
            element.classList.toggle('active');
            const icon = element.querySelector('.material-symbols-outlined');
            if (element.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        }

        // DUAL THEME FRAMEWORK
        function toggleThemeMode() {
            const documentElement = document.documentElement;
            const icon = document.getElementById('themeToggleIcon');
            if (documentElement.classList.contains('dark')) {
                documentElement.classList.remove('dark');
                documentElement.classList.add('light');
                icon.innerText = 'light_mode';
                localStorage.setItem('eazzesam-theme', 'light');
            } else {
                documentElement.classList.remove('light');
                documentElement.classList.add('dark');
                icon.innerText = 'dark_mode';
                localStorage.setItem('eazzesam-theme', 'dark');
            }
        }

        // ACADEMY TERMS MANAGEMENT
        function openTermsModal() { document.getElementById('academyTermsModal').classList.remove('hidden'); }
        function closeTermsModal() { document.getElementById('academyTermsModal').classList.add('hidden'); }

        // ================= FIXED ACADEMY TYPING ENGINE =================
        const CHANNELS_TYPING_PROMPTS = [
            "let database = new Map(); database.set('Accra', 'Secure Node Firewall');",
            "const compileCode = (layer) => layer.filter(subnet => subnet.secure === true);",
            "function dispatchPacket(buffer) { return crypto.createHash('sha256').update(buffer).digest('hex'); }"
        ];

        let executionActiveIndex = 0;
        let timingStartReference = null;

        const dynamicPromptContainer = document.getElementById("typingPromptText");
        const interactiveInputBox = document.getElementById("typingGameField");
        const metricsScoreboard = document.getElementById("typingMetricsScoreboard");
        const wpmOutputDisplay = document.getElementById("wpmOutputDisplay");
        const structuralChapterLabel = document.getElementById("typingChapterLabel");

        function initializeTypingModule() {
            executionActiveIndex = 0;
            timingStartReference = null;
            interactiveInputBox.value = "";
            interactiveInputBox.disabled = false;
            metricsScoreboard.classList.add("hidden");
            interactiveInputBox.classList.remove("hidden");
            renderActiveTypingChapter();
        }

        function renderActiveTypingChapter() {
            structuralChapterLabel.innerText = `Chapter ${executionActiveIndex + 1}/${CHANNELS_TYPING_PROMPTS.length}`;
            const promptValue = CHANNELS_TYPING_PROMPTS[executionActiveIndex];
            
            // Build real-time target markup structure
            dynamicPromptContainer.innerHTML = promptValue.split("").map(character => {
                return `<span class="border-b border-transparent">${character}</span>`;
            }).join("");
            
            interactiveInputBox.value = "";
            interactiveInputBox.focus();
        }

        // Active key listener with absolute character tracking
        interactiveInputBox.addEventListener("input", () => {
            if (!timingStartReference) timingStartReference = new Date();

            const promptValue = CHANNELS_TYPING_PROMPTS[executionActiveIndex];
            const currentInputValue = interactiveInputBox.value;
            const textSpans = dynamicPromptContainer.querySelectorAll("span");

            let isChapterComplete = true;

            for (let i = 0; i < textSpans.length; i++) {
                const targetedChar = promptValue[i];
                const inputChar = currentInputValue[i];

                if (inputChar == null) {
                    textSpans[i].className = "border-b border-transparent";
                    isChapterComplete = false;
                } else if (inputChar === targetedChar) {
                    textSpans[i].className = "text-innovGreen bg-innovGreen/10 font-bold";
                } else {
                    textSpans[i].className = "text-rose-500 bg-rose-500/10 font-bold border-b-2 border-rose-600";
                    isChapterComplete = false;
                }
            }

            // Move cleanly to subsequent index or calculate WPM performance parameters
            if (isChapterComplete && currentInputValue.length === promptValue.length) {
                if (executionActiveIndex + 1 < CHANNELS_TYPING_PROMPTS.length) {
                    executionActiveIndex++;
                    renderActiveTypingChapter();
                } else {
                    calculateAndDisplaySpeedMetrics();
                }
            }
        });

        function calculateAndDisplaySpeedMetrics() {
            const timeEndReference = new Date();
            const totalElapsedTimeInMinutes = (timeEndReference - timingStartReference) / 60000;
            
            // Collect total typed characters across variables
            const accumulatedWordCharacters = CHANNELS_TYPING_PROMPTS.join(" ").length;
            const standardWordCalculatedTotal = accumulatedWordCharacters / 5;
            const finalWPMResultValue = Math.round(standardWordCalculatedTotal / totalElapsedTimeInMinutes);

            // Toggle view visibility states cleanly
            interactiveInputBox.blur();
            interactiveInputBox.disabled = true;
            interactiveInputBox.classList.add("hidden");
            dynamicPromptContainer.innerHTML = `<div class="text-innovGreen font-bold font-mono">ALL MODULE LEVELS CLEARED SUCCESSFULLY.</div>`;
            
            wpmOutputDisplay.innerText = finalWPMResultValue || 0;
            metricsScoreboard.classList.remove("hidden");
        }

        function restartTypingModule() {
            initializeTypingModule();
        }

        // Initialize engine automatically on load
        window.addEventListener("DOMContentLoaded", () => {
            initializeTypingModule();
            // Fallback for user storage theme configuration preferences
            const themeCache = localStorage.getItem('eazzesam-theme') || 'dark';
            document.documentElement.className = themeCache;
            document.getElementById('themeToggleIcon').innerText = themeCache === 'dark' ? 'dark_mode' : 'light_mode';
        });

       
        // ================= SECURE DATA TRANSMISSION PIPELINE =================
        async function dispatchFormPayload(event) {
            event.preventDefault();
            const submitBtn = document.getElementById('formSubmitBtn');
            const errorBox = document.getElementById('formErrorBox');
            const successOverlay = document.getElementById('formSuccess');

            errorBox.classList.add('hidden');
            submitBtn.disabled = true;
            submitBtn.innerText = "Transmitting Packet...";

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify({
                        access_key: "9e1e34dd-8c36-47a1-8bb9-704e2fd52c2e",
                        name: document.getElementById('formName').value.trim(),
                        phone: document.getElementById('formPhone').value.trim(),
                        email: document.getElementById('formEmail').value.trim(),
                        subject: `🔥 Eazzesam Site Submission: ${document.getElementById('formService').value}`,
                        message: document.getElementById('formMessage').value.trim()
                    })
                });
                const result = await response.json();
                if (response.status === 200 && result.success) {
                    successOverlay.classList.remove('hidden');
                } else {
                    throw new Error();
                }
            } catch (err) {
                errorBox.innerHTML = `<strong>🛑 Routing Failure:</strong> Please reach our desk via WhatsApp directly at 054 242 4592.`;
                errorBox.classList.remove('hidden');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerText = "Dispatch Packet";
            }
        }

        function resetContactForm() { 
            document.getElementById('contactForm').reset(); 
            document.getElementById('formSuccess').classList.add('hidden'); 
        }
