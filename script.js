/* script.js
   Interatividade: menu móvel, formulário (simulado), realces e pequenas animações.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Toggle nav (mobile)
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      if (mainNav.classList.contains('open')) {
        navToggle.textContent = '✕';
        mainNav.style.display = 'block';
      } else {
        navToggle.textContent = '☰';
        mainNav.style.display = '';
      }
    });
  }

  // Simple contact form behavior
  const sendBtn = document.getElementById('sendBtn');
  const resetBtn = document.getElementById('resetBtn');
  const nameInput = document.getElementById('nameInput');
  const messageInput = document.getElementById('messageInput');

  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      const name = nameInput ? nameInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';
      if (!name || !message) {
        alert('Por favor, preencha nome e mensagem antes de enviar.');
        return;
      }

      sendBtn.textContent = 'Enviando...';
      sendBtn.disabled = true;
      setTimeout(() => {
        sendBtn.textContent = 'Enviar';
        sendBtn.disabled = false;
        alert('Mensagem recebida! Obrigado — este é um site de fã (simulação).');
        if (nameInput) nameInput.value = '';
        if (messageInput) messageInput.value = '';
      }, 800);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (nameInput) nameInput.value = '';
      if (messageInput) messageInput.value = '';
    });
  }

  // Active link highlight (basic)
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
    if (link.href === location.href || link.href === location.pathname) {
      link.classList.add('active');
    }
  });

  // Fade-in on scroll for cards and sections
  const observers = document.querySelectorAll('.card, .profile-card, .character-card, .villain-card, .gallery-grid figure');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.transform = 'translateY(0)';
        e.target.style.opacity = '1';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  observers.forEach(el => {
    el.style.transform = 'translateY(8px)';
    el.style.opacity = '0';
    el.style.transition = 'all 560ms cubic-bezier(.2,.9,.2,1)';
    io.observe(el);
  });

  // Keyboard shortcut: "P" to Personagens
  document.addEventListener('keydown', (ev) => {
    if (ev.key.toLowerCase() === 'p') {
      window.location.href = 'personagens.html';
    }
  });

  // Small hover ripple for buttons (progressive enhancement)
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
      btn.style.boxShadow = '0 14px 40px rgba(0,0,0,0.6)';
    });
    btn.addEventListener('mouseleave', (e) => {
      btn.style.boxShadow = '';
    });
  });
});
