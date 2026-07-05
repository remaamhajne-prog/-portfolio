const revealItems = document.querySelectorAll(
  ".hero__copy, .portrait-card, .about-band, .profile-band, .snapshot article, .project-photo, .timeline article, .goals-grid article"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.04, rootMargin: "0px 0px -8% 0px" }
);

revealItems.forEach((item, index) => {
  item.classList.add("reveal");
  item.style.transitionDelay = `${index * 90}ms`;
  observer.observe(item);
});

