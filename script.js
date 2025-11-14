// scripts.js — interatividade mínima: modal, nav highlighting e efeitos visuais
document.addEventListener('DOMContentLoaded', function () {
    // Modal "Sobre"
    const openAbout = document.getElementById('open-about');
    const modal = document.getElementById('modal-about');
    const closeAbout = document.getElementById('close-about');

    if (openAbout && modal) {
        openAbout.addEventListener('click', function (e) {
            e.preventDefault();
            modal.style.display = 'flex';
            // pequena animação de entrada
            modal.querySelector('.modal-content').style.transform = 'translateY(-10px)';
            setTimeout(() => {
                modal.querySelector('.modal-content').style.transform = 'translateY(0)';
            }, 10);
        });
    }
    if (closeAbout && modal) {
        closeAbout.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    // Fechar modal ao clicar fora
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) modal.style.display = 'none';
        });
    }

    // Realça o link ativo no menu baseado na URL
    const links = document.querySelectorAll('.main-nav .nav-link');
    links.forEach(link => {
        try {
            const url = link.getAttribute('href');
            if (url && window.location.pathname.endsWith(url)) {
                link.classList.add('active');
            }
        } catch (err) { /* ignore */ }
    });

    // Efeito de brilho intermitente nas sigils (somente visuais)
    const sigils = document.querySelectorAll('.sigil');
    if (sigils) {
        sigils.forEach((s, idx) => {
            let on = false;
            setInterval(() => {
                on = !on;
                s.style.opacity = on ? 0.08 : 0.04;
                s.style.filter = on ? 'blur(0.6px) brightness(1.1)' : 'blur(1px) brightness(0.9)';
            }, 4000 + idx * 300);
        });
    }

    // Simples lazy-load das imagens: trocar por data-src se desejar
    const imgs = document.querySelectorAll('img');
    imgs.forEach(img => {
        img.addEventListener('error', () => {
            // Substitui imagens faltantes por placeholder discreto
            img.src = 'images/placeholder-gray.jpg';
            img.style.objectFit = 'cover';
            img.style.filter = 'grayscale(0.1)';
        });
    });

    // Pequena função para animar entradas de cards
    const animateCards = () => {
        const cards = document.querySelectorAll('.card, .person-card, .villain-card');
        cards.forEach((c, i) => {
            c.style.opacity = 0;
            c.style.transform = 'translateY(8px)';
            setTimeout(() => {
                c.style.transition = 'all .45s cubic-bezier(0.2,0.9,0.3,1)';
                c.style.opacity = 1;
                c.style.transform = 'translateY(0)';
            }, 80 * i);
        });
    };
    animateCards();

    // Função para abrir perfis (caso queira usar no futuro via JS)
    window.openProfile = function(slug) {
        window.location.href = slug + '.html';
    };

    // Adiciona efeitos sutis ao hover dos botões (fallback JS)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.boxShadow = '0 12px 34px rgba(0,0,0,0.7)';
            btn.style.transform = 'translateY(-3px)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.boxShadow = '';
            btn.style.transform = '';
        });
    });

    // Pequeno contador de curiosidade (decorativo)
    let counter = 0;
    setInterval(() => {
        counter = (counter + 1) % 3;
        const subs = document.querySelectorAll('.subtitle');
        subs.forEach(s => {
            if (counter === 0) s.textContent = 'Caçadores, anjos e demônios — a luta entre o bem e o mal em uma estrada sem fim.';
            if (counter === 1) s.textContent = 'Narração sombria, humor ácido e batalhas épicas: a série que redefiniu o road-trip sobrenatural.';
            if (counter === 2) s.textContent = 'Família, destino e sacrifício — cada episódio é uma história que pesa nas escolhas dos personagens.';
        });
    }, 8000);
});
