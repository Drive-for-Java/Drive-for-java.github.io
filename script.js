// Init AOS
document.addEventListener("DOMContentLoaded", function() {
  AOS.init({ once: true, offset: 50, duration: 800 });
  initTheme();
});

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check Storage or System Preference
  const savedTheme = localStorage.getItem('theme');
  const sysTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  
  const currentTheme = savedTheme || sysTheme;
  html.setAttribute('data-theme', currentTheme);
  updateParticles(currentTheme);

  // Toggle Event
  toggleBtn.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateParticles(newTheme);
  });
}

function updateParticles(theme) {
  const color = theme === 'dark' ? '#00f2ff' : '#4f46e5';
  const opacity = theme === 'dark' ? 0.4 : 0.6;
  
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": color },
      "shape": { "type": "circle" },
      "opacity": { "value": opacity, "random": true },
      "size": { "value": 3, "random": true },
      "line_linked": {
        "enable": true, "distance": 150, "color": color, "opacity": 0.2, "width": 1
      },
      "move": { "enable": true, "speed": 2, "direction": "none", "out_mode": "out" }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
  });
}