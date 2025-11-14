// JS leve apenas para interação visual

document.addEventListener("DOMContentLoaded", () => {

    // Animação suave no scroll
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            const target = document.querySelector(event.target.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Efeito de destaque nos cards ao passar o mouse
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 0 20px white";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "0 0 10px black";
        });
    });

});
