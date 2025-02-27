document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.createElement('button');
    toggleBtn.innerText = 'Toggle Dark Mode';
    document.body.appendChild(toggleBtn);
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
