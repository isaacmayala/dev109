document.addEventListener('DOMContentLoaded', function() {
            // Carousel variables
            const images = document.querySelectorAll('.carousel-image');
            const descriptionBox = document.getElementById('description');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const timerDisplay = document.getElementById('timer');
            
            let currentIndex = 0;
            let timerCount = 0;
            let intervalId;
            
            // Descriptions for each image
            const descriptions = [
                "Mount Fuji: Japan's highest peak and most iconic landmark standing at 3,776 meters. This active volcano is known for its perfectly symmetrical cone shape and is often depicted with a snow capped peak. It's considered one of Japan's three sacred mountains and has been a pilgrimage site for centuries.",
                "Mexico City: The capital of Mexico and one of the most populous cities in the world. Built on the ruins of the ancient Aztec city of Tenochtitlan, it features a unique blend of modern skyscrapers, colonial architecture, and pre-Hispanic ruins. The city is surrounded by mountains and volcanoes creating its distinctive basin location.",
                "Cape Town: Located on South Africa's southwest coast, Cape Town is known for its stunning harbor, beautiful beaches, and the flat topped Table Mountain that creates its dramatic backdrop. It's one of the most multicultural cities in the world and offers visitors a mix of natural beauty and urban experiences.",
                "The Panthéon: Located in the Latin Quarter of Paris, France, this magnificent neoclassical monument features a distinctive dome and was originally built as a church dedicated to St. Genevieve. Now it functions as a mausoleum containing the remains of distinguished French citizens including Voltaire, Rousseau, and Marie Curie.",
                "Australian Outback: The vast, remote interior of Australia characterized by its red earth, unique rock formations, and sparse vegetation. This harsh but beautiful landscape covers much of the Australian continent and is home to distinctive flora and fauna that have adapted to its challenging conditions.",
            ];
            
            // Function to update the display
            function updateDisplay() {
                // Hide all images
                for (let i = 0; i < images.length; i++) {
                    images[i].classList.remove('active');
                }
                
                // Show current image
                images[currentIndex].classList.add('active');
                
                // Update description
                descriptionBox.textContent = descriptions[currentIndex];
                
                // Reset timer
                resetTimer();
            }
            
            // Function to show next image
            function showNextImage() {
                currentIndex = (currentIndex + 1) % images.length;
                updateDisplay();
            }
            
            // Function to show previous image
            function showPrevImage() {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateDisplay();
            }
            
            // Function to update timer display
            function updateTimerDisplay() {
                timerDisplay.textContent = `Time: ${timerCount}s`;
            }
            
            // Function to reset timer
            function resetTimer() {
                clearInterval(intervalId);
                timerCount = 0;
                updateTimerDisplay();
                startTimer();
            }
            
            // Function to start timer
            function startTimer() {
                intervalId = setInterval(function() {
                    timerCount++;
                    updateTimerDisplay();
                    
                    // Auto advance slide after 4 seconds
                    if (timerCount >= 4) {
                        showNextImage();
                    }
                }, 1000);
            }
            
            // Event listeners
            prevBtn.addEventListener('click', showPrevImage);
            nextBtn.addEventListener('click', showNextImage);
            
            // Initialize timer
            startTimer();
        });
