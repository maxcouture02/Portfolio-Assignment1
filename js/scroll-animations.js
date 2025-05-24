// Appear/fade in animation
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: '0px'
    });

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach((element) => {
        observer.observe(element);
    });
});

// Translate animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const header  = document.querySelector('.name-header');
    const first   = document.querySelector('.first-name');
    const second  = document.querySelector('.last-name');
    const third   = document.querySelector('.text-start');
    const fourth  = document.querySelector('.text-end');
  
    // When scrollY == start  → progress = 0
    // When scrollY == start + headerHeight → progress = 1
    const start  = header.offsetTop;
    const height = header.offsetHeight;
    const maxTranslate = 250; // px
  
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      let progress = (y - start) / height;
      progress = Math.min(1, Math.max(0, progress));
  
      const amt = progress * maxTranslate;
      first .style.transform = `translateX(${ amt }px)`;
      third .style.transform = `translateX(${ amt }px)`;
      second.style.transform = `translateX(${-amt }px)`;
      fourth.style.transform = `translateX(${-amt }px)`;
    }, { passive: true });
  });
  