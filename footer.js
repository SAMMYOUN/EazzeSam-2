 
        function updateIndicator(element) {
            const indicator = document.getElementById('indicator');
            
            // Set the width and horizontal position of the slider to match the clicked button
            indicator.style.width = `${element.offsetWidth}px`;
            indicator.style.left = `${element.offsetLeft}px`;
        }

        function switchTab(element, url) {
            // 1. Move the background slider
            updateIndicator(element);

            // 2. Reset styles for all buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('text-black', 'dark:text-white');
                btn.classList.add('text-black/50', 'dark:text-white/50');
            });

            // 3. Apply active styles to the selected button
            element.classList.remove('text-black/50', 'dark:text-white/50');
            element.classList.add('text-black', 'dark:text-white');

            // 4. Update the content/hyperlink below
            document.getElementById('hyperlink-display').href = url;
            document.getElementById('url-text').innerText = url;
        }

        // Initialize indicator position on page load
        window.addEventListener('DOMContentLoaded', () => {
            const firstTab = document.querySelector('.tab-btn');
            updateIndicator(firstTab);
        });
        
        // Handle window resizing to keep the slider aligned
        window.addEventListener('resize', () => {
            const activeTab = document.querySelector('.tab-btn.text-black');
            if(activeTab) updateIndicator(activeTab);
        });
   