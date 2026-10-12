const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

const setMenuOpen = (isOpen) => {
  if (!menuToggle || !navigation) return;

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  navigation.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
};

menuToggle?.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const closeLightbox = lightbox?.querySelector(".lightbox-close");

document.querySelectorAll(".photo-card").forEach((card) => {
  card.addEventListener("click", () => {
    const thumbnail = card.querySelector("img");
    if (!lightbox || !lightboxImage || !thumbnail) return;

    lightboxImage.src = card.dataset.full || thumbnail.src;
    lightboxImage.alt = thumbnail.alt;
    lightbox.showModal();
  });
});

closeLightbox?.addEventListener("click", () => lightbox?.close());

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
