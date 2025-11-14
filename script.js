// SCRIPT PARA ARRUMAR DROPDOWN, ANIMAÇÕES E CLICKS

document.addEventListener("DOMContentLoaded", () => {

    // ⏳ Fade-in suave na entrada da página
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease-out";
        document.body.style.opacity = 1;
    }, 100);

    // ==========================
    // TRECHO NOVO — Links de personagens
    // ==========================

    const characterLinks = document.querySelectorAll(".character-link");
    characterLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const characterPage = link.getAttribute('href');
            window.location.href = characterPage;
        });
    });

    // ==========================
    // DROPDOWN CORRIGIDO
    // ==========================

    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(drop => {

        const submenu = drop.querySelector(".submenu");

        drop.addEventListener("mouseenter", () => {
            submenu.style.display = "flex";
            submenu.style.opacity = "1";
            submenu.style.pointerEvents = "auto"; // permite clique
        });

        drop.addEventListener("mouseleave", () => {
            submenu.style.opacity = "0";
            submenu.style.pointerEvents = "none"; // evita bloquear o menu
            setTimeout(() => {
                submenu.style.display = "none";
            }, 200);
        });
    });

    // ==========================
    // CORREÇÃO PRINCIPAL
    // — Links agora funcionam
    // — Nenhuma animação bloqueia clique
    // ==========================

    const menuLinks = document.querySelectorAll("a");

    menuLinks.forEach(link => {

        // Remove bloqueio de clique imposto por animações avançadas
        link.style.pointerEvents = "auto";

        // Garante que o clique sempre abre a página
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");

            if (href && href.endsWith(".html")) {
                window.location.href = href;
            }
        });

    });

    // ==========================
    // EFEITO SOBRENATURAL NO MENU (SEM BUGAR CLICKS)
    // ==========================

    const menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.textShadow = "0 0 8px #ffffff";
            item.style.transition = "0.2s";
        });

        item.addEventListener("mouseleave", () => {
            item.style.textShadow = "none";
        });
    });

});
