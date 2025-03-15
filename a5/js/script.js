document.addEventListener('DOMContentLoaded', () => {
    // Image data array with src and descriptions
    const carouselData = [
        {
            src: 'image/image1.jpg',
            alt: 'Beautiful view of Mount Fuji in Japan with clear skies and snow-capped peak',
            description: 'Mount Fuji: Japan's highest peak and most iconic landmark standing at 3,776 meters. This active volcano is known for its perfectly symmetrical cone shape and is often depicted with a snow capped peak. It's considered one of Japan's three sacred mountains and has been a pilgrimage site for centuries.'
        },
        {
            src: 'image/image2.jpeg',
            alt: 'Aerial view of Mexico City showing the dense urban landscape and surrounding mountains',
            description: 'Mexico City: The capital of Mexico and one of the most populous cities in the world. Built on the ruins of the ancient Aztec city of Tenochtitlan, it features a unique blend of modern skyscrapers, colonial architecture, and pre-Hispanic ruins. The city is surrounded by mountains and volcanoes creating its distinctive basin location.'
        },
        {
            src: 'image/image3.jpg',
            alt: 'Scenic view of Cape Town, South Africa with Table Mountain in the background and the ocean',
            description: 'Cape Town: Located on South Africa's southwest coast, Cape Town is known for its stunning harbor, beautiful beaches, and the flat topped Table Mountain that creates its dramatic backdrop. It's one of the most multicultural cities in the world and offers visitors a mix of natural beauty and urban experiences.'
        },
        {
            src: 'image/image4.jpg',
            alt: 'The Panthéon in Paris, France showing its impressive neoclassical architecture and dome',
            description: 'The Panthéon: Located in the Latin Quarter of Paris, France, this magnificent neoclassical monument features a distinctive dome and was originally built as a church dedicated to St. Genevieve. Now it functions as a mausoleum containing the remains of distinguished French citizens including Voltaire, Rousseau, and Marie Curie.'
        },
        {
            src: 'image/image5.jpg',
            alt: 'Australian landscape showing unique natural formations and characteristic outback scenery',
            description: 'Australian Outback: The vast, remote interior of Australia characterized by its red earth, unique rock formations, and sparse vegetation. This harsh but beautiful landscape covers much of the Australian continent and is home to distinctive flora and fauna that have adapted to its challenging conditions.'
        }
    ];

    // DOM Elements
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const carouselImage = document.getElementById('carousel-image');
    const imageDescription = document.getElementById('image-description');
    const timerDisplay = document.getElementById('timer');

    // Variables
    let currentIndex = 0;
    let timerCount = 0;
    let intervalId = null;

    // Function to update image and description
    function updateCarousel(index) {
        // Reset the index if it goes out of bounds
        if (index < 0) {
            index = carouselData.length - 1;
        } else if (index >= carouselData.length) {
            index = 0;
        }

        // Update current index
        currentIndex = index;

        // Update image and description
        carouselImage.src = carouselData[currentIndex].src;
        carouselImage.alt = carouselData[currentIndex].alt;
        imageDescription.textContent = carouselData[currentIndex].description;

        // Reset timer
        resetTimer();
    }

    // Function to handle next button click
    function goToNext() {
        updateCarousel(currentIndex + 1);
    }

    // Function to handle previous button click
    function goToPrev() {
        updateCarousel(currentIndex - 1);
    }

    // Timer functions
    function startTimer() {
        // Clear any existing interval
        if (intervalId) {
            clearInterval(intervalId);
        }

        timerCount = 0;
        timerDisplay.textContent = timerCount;

        // Set new interval
        intervalId = setInterval(() => {
            timerCount++;
            timerDisplay.textContent = timerCount;

            // Move to next image after 4 seconds
            if (timerCount >= 4) {
                goToNext();
            }
        }, 1000);
    }

    function resetTimer() {
        startTimer();
    }

    // Event listeners
    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);

    // Initialize carousel and timer
    updateCarousel(0);
    startTimer();
});
