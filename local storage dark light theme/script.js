const toggleBtn = document.getElementById('modeToggle');
const body = document.body;

// Apply saved theme on page load
const savedMode = localStorage.getItem('theme');
if (savedMode) {
  body.classList.add(savedMode);
} else {
  body.classList.add('light-mode'); // default theme
}

// Toggle and save theme
toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.replace('dark-mode', 'light-mode');
    localStorage.setItem('theme', 'light-mode');
  } else {
    body.classList.replace('light-mode', 'dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  }
});
