const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".site-nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const prompts = {
  initial: `Help me create a professional portfolio website that highlights my military leadership,
behavioral health experience, AI Prompt Specialist training, and career goals. The website
should be clean, professional, and suitable for employers.`,
  revised: `Rewrite the website to emphasize the Forged Resilience brand rather than focusing
primarily on my personal biography. Use concise language, include a professional summary,
project highlights, skills, and LinkedIn as the primary contact method. Exclude personal
information and my resume for now.`,
  final: `Improve the overall website by refining the wording, organizing the sections logically,
creating a professional color palette inspired by Army digital camouflage, and ensuring it is
appropriate for employers while supporting the future growth of the Forged Resilience brand.`
};

document.querySelectorAll(".prompt-tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".prompt-tab").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    document.getElementById("prompt-text").textContent = prompts[button.dataset.target];
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
