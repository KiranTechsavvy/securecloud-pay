// Load section on click
function loadSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  // Show selected section
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add('active');
  }

  // Update active nav item
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  event.target.classList.add('active');
}

// Simple transaction chart (using ASCII art for demo)
function initChart() {
  const canvas = document.getElementById('transactionChart');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    // Simple bar chart representation
    ctx.fillStyle = '#007bff';
    const data = [30, 45, 55, 40, 60, 75, 90];
    const width = canvas.width / data.length;
    data.forEach((val, i) => {
      ctx.fillRect(i * width, canvas.height - (val * 2), width - 5, val * 2);
    });
  }
}

// Form submission handler
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Transaction submitted successfully!');
    this.reset();
  });
});

// Initialize
window.addEventListener('load', function() {
  initChart();
  console.log('Dashboard loaded successfully');
});
