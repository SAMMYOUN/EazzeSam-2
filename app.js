tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        darkBg: '#000000',
                        cardBgDark: '#1c1c1e',
                        cardBgLight: '#ffffff',
                        appleGray: '#8e8e93',
                        techBlue: '#007aff',
                        innovGreen: '#34c759',
                    }
                }
            }
        }
    
   
   
   
   
   
   
     
        // Theme Switcher Engine
        (function initTheme() {
            const savedTheme = localStorage.getItem('eazzesam_theme') || 'dark';
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
                document.getElementById('themeToggleIcon').innerText = 'light_mode';
            } else {
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
                document.getElementById('themeToggleIcon').innerText = 'dark_mode';
            }
        })();

        function toggleThemeMode() {
            const isDark = document.documentElement.classList.contains('dark');
            if (isDark) {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                localStorage.setItem('eazzesam_theme', 'light');
                document.getElementById('themeToggleIcon').innerText = 'dark_mode';
            } else {
                document.documentElement.classList.remove('light');
                document.documentElement.classList.add('dark');
                localStorage.setItem('eazzesam_theme', 'dark');
                document.getElementById('themeToggleIcon').innerText = 'light_mode';
            }
        }

        // FAQ Interactive Controller Loop
        function toggleFaqElement(element) {
            const isActive = element.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('span').style.transform = 'rotate(0deg)';
            });
            if (!isActive) {
                element.classList.add('active');
                element.querySelector('span').style.transform = 'rotate(180deg)';
            }
        }

        // Terminal Resize Modifier Function
        function resizeTerminalCanvas(size) {
            const container = document.getElementById('sizableChatContainer');
            event.target.parentNode.querySelectorAll('button').forEach(btn => btn.className = "text-[10px] font-bold px-2.5 py-1 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10");
            event.target.className = "text-[10px] font-bold px-2.5 py-1 rounded-lg bg-techBlue text-white shadow-sm";

            if (size === 'compact') {
                container.style.height = "45vh";
            } else if (size === 'medium') {
                container.style.height = "70vh";
            } else if (size === 'expanded') {
                container.style.height = "85vh";
            }
        }

        // Navigation State Engine
        function navigateTo(pageId) {
            document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active-page'));
            document.querySelectorAll('header nav a').forEach(link => link.classList.remove('nav-active'));
            document.querySelectorAll('#mobileMenu a').forEach(link => link.className = "block py-2 text-sm text-gray-500 font-medium");

            const targetSection = document.getElementById(`page-${pageId}`);
            if(targetSection) {
                targetSection.classList.add('active-page');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            const activeNav = document.getElementById(`nav-${pageId}`);
            if(activeNav) activeNav.classList.add('nav-active');

            const activeMobNav = document.getElementById(`mob-nav-${pageId}`);
            if(activeMobNav) {
                activeMobNav.className = "block py-2 text-sm font-bold text-techBlue bg-gray-200/50 dark:bg-white/[0.05] px-3 rounded-xl";
            }
        }

        function openTermsModal() { document.getElementById('academyTermsModal').classList.remove('hidden'); }
        function closeTermsModal() { document.getElementById('academyTermsModal').classList.add('hidden'); }

        // Typing Speed Engine
        let typingStartTime;
        function resetTypingSpeedEngine() {
            document.getElementById('typingGameField').value = "";
            document.getElementById('typingWpmDisplay').innerText = "WPM: 0";
            typingStartTime = null;
        }

        function processLiveTypingInput() {
            const prompt = document.getElementById('typingPromptText').innerText;
            const input = document.getElementById('typingGameField').value;
            
            if (!typingStartTime && input.length > 0) typingStartTime = new Date();

            if (input === prompt) {
                const calculatedWpm = Math.round((prompt.split(' ').length) / ((new Date() - typingStartTime) / 60000));
                document.getElementById('typingWpmDisplay').innerText = `🎉 Complete! ${calculatedWpm} WPM`;
                typingStartTime = null;
            } else if (prompt.startsWith(input)) {
                if (typingStartTime && input.length > 3) {
                    const dynamicWpm = Math.round((input.split(' ').length) / ((new Date() - typingStartTime) / 60000));
                    if(isFinite(dynamicWpm)) document.getElementById('typingWpmDisplay').innerText = `WPM: ${dynamicWpm}`;
                }
            } else {
                document.getElementById('typingWpmDisplay').innerText = "⚠️ Deviation detected";
            }
        }

        function filterAcademyTracks() {
            const input = document.getElementById('moduleSearchField').value.toLowerCase();
            document.querySelectorAll('.course-card').forEach(card => {
                card.style.display = card.innerText.toLowerCase().includes(input) ? "flex" : "none";
            });
        }

        function toggleMobileMenu() { document.getElementById('mobileMenu').classList.toggle('hidden'); }

        // External API Integration Logic Matrix
        const API_CONFIG = {
            provider: "local", // Change to "openai" or "gemini" to redirect requests
            openaiKey: "YOUR_OPENAI_API_KEY",
            geminiKey: "YOUR_GEMINI_API_KEY"
        };

        async function handleDedicatedChatInput(e) {
            e.preventDefault();
            const field = document.getElementById('dedicatedField');
            const msg = field.value.trim();
            if(!msg) return;

            renderDedicatedMessage(msg, 'user');
            field.value = '';
            
            if (API_CONFIG.provider === "local") {
                setTimeout(() => { processInfotainmentBrainResponse(msg); }, 400);
            } else {
                await dispatchExternalApiQuery(msg);
            }
        }

        function triggerDedicatedReply(promptText) {
            renderDedicatedMessage(promptText, 'user');
            if (API_CONFIG.provider === "local") {
                setTimeout(() => { processInfotainmentBrainResponse(promptText); }, 400);
            } else {
                dispatchExternalApiQuery(promptText);
            }
        }

        async function dispatchExternalApiQuery(userMessage) {
            renderDedicatedMessage("⚡ Fetching context from external API parameters...", "system");
            
            try {
                if (API_CONFIG.provider === "openai") {
                    const response = await fetch("https://api.openai.com/v1/chat/completions", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${API_CONFIG.openaiKey}`
                        },
                        body: JSON.stringify({
                            model: "gpt-4o-mini",
                            messages: [{ role: "user", content: userMessage }]
                        })
                    });
                    const data = await response.json();
                    renderDedicatedMessage(data.choices[0].message.content, "system");
                } 
                else if (API_CONFIG.provider === "gemini") {
                    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_CONFIG.geminiKey}`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            contents: [{ parts: [{ text: userMessage }] }]
                        })
                    });
                    const data = await response.json();
                    renderDedicatedMessage(data.candidates[0].content.parts[0].text, "system");
                }
            } catch (error) {
                renderDedicatedMessage("❌ API Pipeline Error: Connection timed out or key invalid. Reverting to local storage loops.", "system");
                processInfotainmentBrainResponse(userMessage);
            }
        }

        function renderDedicatedMessage(text, sender) {
            const consoleBox = document.getElementById('dedicatedConsole');
            const block = document.createElement('div');
            if(sender === 'user') {
                block.className = "flex flex-col space-y-1 max-w-[75%] ml-auto items-end animate__animated animate__fadeInUp";
                block.innerHTML = `<div class="bg-techBlue text-white p-3 rounded-2xl rounded-tr-none shadow-sm font-medium text-sm">${text}</div>`;
            } else {
                block.className = "flex flex-col space-y-1 max-w-[80%] animate__animated animate__fadeInUp";
                block.innerHTML = `<div class="bg-gray-200 dark:bg-white/[0.05] text-black dark:text-white p-4 rounded-2xl rounded-tl-none leading-relaxed border border-gray-300 dark:border-transparent">${text}</div><span class="text-[9px] text-appleGray px-1">System Assistant Node</span>`;
            }
            consoleBox.appendChild(block);
            consoleBox.scrollTop = consoleBox.scrollHeight;
        }

        function processInfotainmentBrainResponse(query) {
            const clean = query.toLowerCase();
            let response = "";

            if (clean.includes('fact') && clean.includes('tech')) {
                response = "💡 **Global Tech Insights Repository:** Underwater cables carry 91% of modern internet traffic, not satellites.";
            } else if (clean.includes('joke') || clean.includes('entertain')) {
                response = "🎭 **System Entertainment Node:** Why do developers use dark mode? Because light attracts bugs!";
            } else if (clean.includes('ghana')) {
                response = "🌍 **Ghana Geographic Fact:** Lake Volta is the world's largest artificial reservoir by surface area.";
            } else {
                response = "✨ Local execution complete. Switch the `provider` parameter inside the script tag from `'local'` to `'openai'` or `'gemini'` to allow live external API parsing loops.";
            }
            renderDedicatedMessage(response, 'system');
        }

        function clearDedicatedChat() {
            document.getElementById('dedicatedConsole').innerHTML = `<div class="flex flex-col space-y-1 max-w-[85%]"><div class="bg-gray-200 dark:bg-white/[0.05] text-black dark:text-white p-4 rounded-2xl rounded-tl-none">Log canvas reset complete.</div></div>`;
        }

        // Contact Web3Forms Pipeline
        async function handleFormSubmission(e) {
            e.preventDefault();
            const errorBox = document.getElementById('formValidationErrorBox');
            const successOverlay = document.getElementById('formSuccess');
            const submitBtn = document.getElementById('formSubmitBtn');
            
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
                if (response.status === 200 && result.success) successOverlay.classList.remove('hidden');
                else throw new Error();
            } catch (err) {
                errorBox.innerHTML = `<strong>🛑 Routing Failure:</strong> Please reach our desk via WhatsApp directly at 054 242 4592.`;
                errorBox.classList.remove('hidden');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerText = "Dispatch Packet";
            }
        }

        function resetContactForm() { document.getElementById('contactForm').reset(); document.getElementById('formSuccess').classList.add('hidden'); }
    