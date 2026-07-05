const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const heroLeadForm = document.querySelector("[data-hero-lead-form]");
const heroAddressField = document.querySelector(".hero-headline-field");
const heroAddressInput = document.querySelector("#hero-address");
const heroStatus = document.querySelector("[data-hero-status]");
const homeValueForm = document.querySelector("[data-home-value-form]");
const homeValueAddressInput = document.querySelector("#value-address");
const homeValueStatus = document.querySelector("[data-home-value-status]");
const contactForm = document.querySelector("[data-contact-form]");
const contactMessage = contactForm?.querySelector("[name='message']");
const contactGoal = contactForm?.querySelector("[name='goal']");
const searchParams = new URLSearchParams(window.location.search);
const carriedAddress = searchParams.get("address")?.trim() || "";

function syncHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

function syncHeroAddressField() {
  const hasValue = heroAddressInput instanceof HTMLInputElement && heroAddressInput.value.trim().length > 0;
  heroAddressField?.classList.toggle("has-value", hasValue);
}

syncHeroAddressField();
heroAddressInput?.addEventListener("input", syncHeroAddressField);
heroAddressInput?.addEventListener("blur", syncHeroAddressField);

if (homeValueAddressInput instanceof HTMLInputElement && carriedAddress && !homeValueAddressInput.value.trim()) {
  homeValueAddressInput.value = carriedAddress;
}

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

heroLeadForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const address = heroAddressInput instanceof HTMLInputElement ? heroAddressInput.value.trim() : "";

  if (!address) {
    heroStatus.textContent = "Add your street address to continue.";
    heroAddressInput?.focus();
    return;
  }

  heroStatus.textContent = "Taking you to the full local price-range form.";
  const target = new URL("/home-evaluation/", window.location.origin);
  target.searchParams.set("address", address);
  window.location.href = target.toString();
});

homeValueForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!(homeValueForm instanceof HTMLFormElement)) {
    return;
  }

  if (!homeValueForm.reportValidity()) {
    return;
  }

  const data = new FormData(homeValueForm);
  const draft = Object.fromEntries(data.entries());
  sessionStorage.setItem("corbin-home-value-draft", JSON.stringify(draft));

  if (homeValueStatus) {
    homeValueStatus.textContent = "Opening Corbin's full home value form in a new tab so you can continue toward your local price range.";
  }

  window.open("https://callcorbin.ca/home-evaluation/", "_blank", "noopener");
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const subject = encodeURIComponent(`Website inquiry: ${data.get("goal") || "Corbin & Co"}`);
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
