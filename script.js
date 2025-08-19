// Menú responsive
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#menu-navegacion");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Animaciones de entrada al hacer scroll
const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

console.log("Frecuencia Mística cargada ✅ con nuevas secciones.");