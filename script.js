// Loader + scroll unlock
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.classList.add("opacity-0", "pointer-events-none");
    document.body.style.overflow = "auto";
  }, 3000);
});

// Dark Mode
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Ripple logic (handled via CSS)

// Parallax
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const parallax = document.querySelector('.parallax-bg');
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    tabContents.forEach(tc => tc.classList.add('hidden'));
    document.getElementById(`tab-${tab}`).classList.remove('hidden');

    tabBtns.forEach(b => b.classList.remove('bg-blue-500', 'text-white'));
    btn.classList.add('bg-blue-500', 'text-white');
  });
});
