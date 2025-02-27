document.addEventListener('DOMContentLoaded', () => {
    console.log('Animals Gallery Loaded');

    // Dark/Light Mode Toggle
    const darkModeBtn = document.getElementById('dark-mode');
    const lightModeBtn = document.getElementById('light-mode');

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.add('dark-mode');
    });

    lightModeBtn.addEventListener('click', () => {
        document.body.classList.remove('dark-mode');
    });

    // Search Functionality
    const searchInput = document.getElementById('search');
    const animalCards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();

        animalCards.forEach(card => {
            const imgAlt = card.querySelector('img').alt.toLowerCase();
            card.style.display = imgAlt.includes(searchText) ? 'block' : 'none';
        });
    });
});
