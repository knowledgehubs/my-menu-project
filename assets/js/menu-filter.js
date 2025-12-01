document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.cat-btn');
  const sections = document.querySelectorAll('.menu-section');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. Activate Button
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.cat;

      // 2. Filter Sections
      sections.forEach(sec => {
        if (category === 'all' || sec.dataset.category === category) {
          sec.style.display = 'block';
        } else {
          sec.style.display = 'none';
        }
      });
      
      // 3. Scroll to top slightly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});
