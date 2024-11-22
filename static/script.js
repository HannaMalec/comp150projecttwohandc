// Adjust brightness using the overlay
function adjustBrightness(value) {
  const overlay = document.getElementById('brightness-overlay');
  if (overlay) {
    const opacity = (100 - value) / 100; // Calculate opacity based on brightness value
    overlay.style.opacity = opacity; // Set overlay opacity
  }
}

// Utility to update slider values and adjust dynamically
function updateSliderValue(sliderId, valueId, callback) {
  const slider = document.getElementById(sliderId);
  const valueDisplay = document.getElementById(valueId);

  slider.oninput = function () {
    valueDisplay.textContent = slider.value; // Update percentage display dynamically
    if (callback) callback(slider.value); // Trigger callback for additional effects
  };
}

// Load settings and initialize slider listeners
function loadSettings() {
  const sliders = [
    { sliderId: 'brightness', valueId: 'brightnessValue', callback: adjustBrightness },
    { sliderId: 'soundEffect', valueId: 'soundEffectValue' },
    { sliderId: 'jazzMusic', valueId: 'jazzMusicValue' },
    { sliderId: 'rainMusic', valueId: 'rainMusicValue' }
  ];

  sliders.forEach(({ sliderId, valueId, callback }) => {
    const slider = document.getElementById(sliderId);
    const valueDisplay = document.getElementById(valueId);
    const savedValue = localStorage.getItem(sliderId) || 50;

    // Set initial values
    slider.value = savedValue;
    valueDisplay.textContent = savedValue;

    // Apply brightness setting immediately on load
    if (sliderId === 'brightness' && callback) callback(savedValue);

    // Add real-time update listeners
    updateSliderValue(sliderId, valueId, callback);
  });
}

// Initialize the settings page
window.onload = function () {
  loadSettings();
};
