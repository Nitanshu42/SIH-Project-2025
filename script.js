// Modern smooth page transition
const enterButton = document.getElementById("enterButton");

// Add loading state management
let isTransitioning = false;

// Enhanced button interaction
enterButton.addEventListener("click", (e) => {
  if (isTransitioning) return;
  
  isTransitioning = true;
  
  // Add click effect
  enterButton.style.transform = "translateY(-1px) scale(0.98)";
  
  // Create ripple effect
  createRippleEffect(e);
  
  // Add loading state
  const originalText = enterButton.querySelector('.button-text').textContent;
  enterButton.querySelector('.button-text').textContent = "Launching...";
  enterButton.style.pointerEvents = "none";
  
  // Smooth transition after delay
  setTimeout(() => {
    // Fade out current page
    document.body.style.transition = "opacity 0.8s ease-out";
    document.body.style.opacity = "0";
    
    // Navigate after fade
    setTimeout(() => {
      window.location.href = "main.html";
    }, 800);
  }, 1000);
});

// Create ripple effect on button click
function createRippleEffect(e) {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement('div');
  
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  
  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s ease-out;
    pointer-events: none;
  `;
  
  // Add ripple animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
  button.appendChild(ripple);
  
  // Remove ripple after animation
  setTimeout(() => {
    ripple.remove();
    style.remove();
  }, 600);
}

// Add hover sound effect (optional)
enterButton.addEventListener("mouseenter", () => {
  if (!isTransitioning) {
    // You can add a subtle hover sound here if desired
    enterButton.style.transform = "translateY(-3px)";
  }
});

enterButton.addEventListener("mouseleave", () => {
  if (!isTransitioning) {
    enterButton.style.transform = "translateY(0)";
  }
});

// Parallax effect for floating elements
document.addEventListener("mousemove", (e) => {
  const floatingElements = document.querySelectorAll('.floating-planet, .asteroid');
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  
  floatingElements.forEach((element, index) => {
    const speed = (index + 1) * 0.5;
    const x = (mouseX - 0.5) * speed * 20;
    const y = (mouseY - 0.5) * speed * 20;
    
    element.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Add scroll indicator functionality
let scrollIndicatorVisible = true;

window.addEventListener("scroll", () => {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (window.scrollY > 50 && scrollIndicatorVisible) {
    scrollIndicator.style.opacity = "0";
    scrollIndicatorVisible = false;
  } else if (window.scrollY <= 50 && !scrollIndicatorVisible) {
    scrollIndicator.style.opacity = "0.7";
    scrollIndicatorVisible = true;
  }
});

// Preload main page for faster transition
const link = document.createElement('link');
link.rel = 'prefetch';
link.href = 'main.html';
document.head.appendChild(link);

// Add loading animation on page load
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1s ease-in";
  
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    if (!isTransitioning) {
      enterButton.click();
    }
  }
});

// Performance optimization: Reduce animations on low-end devices
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
  document.documentElement.style.setProperty('--animation-duration', '0.5s');
}