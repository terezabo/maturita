const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

function observeHiddenElements() {
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
}

observeHiddenElements();

const observerConfig = { childList: true, subtree: true };
const domObserver = new MutationObserver(() => {
  observeHiddenElements();
});

domObserver.observe(document.body, observerConfig);

