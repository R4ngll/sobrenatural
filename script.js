document.addEventListener("DOMContentLoaded", () => {

    // Fade in visual
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease-out";
        document.body.style.opacity = 1;
    }, 100);

    // ======================
    // LINK PARA PERSONAGENS
    // ======================
    const charButtons = document.querySelectorAll(".character-page-btn");

    charButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "characters.html";
        });
    });

    // ======================
    // LINKS DE PERSONAGENS INDIVIDUAIS
    // ======================

    const characterLinks = document.querySelectorAll(".character-link");

    characterLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = link.getAttribute("href");
            window.location.href = page;
        });
    });

    // ======================
    // EVITAR BUG EM LINKS
    // ======================

    const allLinks = document.querySelectorAll("a");

    allLinks.forEach(a => {
        a.style.pointerEvents = "auto";

        a.addEventListener("click", (e) => {
            const href = a.getAttribute("href");

            if (href && href.endsWith(".html")) {
                window.location.href = href;
            }
        });
    });

});
