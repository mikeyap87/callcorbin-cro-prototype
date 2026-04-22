const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const contactForm = document.querySelector("[data-contact-form]");

function syncHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  header?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

document.querySelectorAll(".primary-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle?.setAttribute("aria-expanded", "false");
    header?.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const subject = encodeURIComponent(`Website prototype inquiry: ${data.get("goal") || "Corbin & Co"}`);
  const body = encodeURIComponent(
    [
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Goal: ${data.get("goal") || ""}`,
      "",
      `${data.get("message") || ""}`
    ].join("\n")
  );

  window.location.href = `mailto:corbin@callcorbin.ca?subject=${subject}&body=${body}`;
});
