/* ==========================================================
   WebPro Lomé — script de la page vitrine
   ========================================================== */

// Numéro WhatsApp principal (format international, sans + ni espaces)
const WHATSAPP_NUMBER = '22899315092';

// ----- Menu mobile -----
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
});

// Fermer le menu quand on clique sur un lien
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    nav.classList.remove('open');
  });
});

// ----- Bordure de l'en-tête au défilement -----
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// ----- Boutons "Choisir ce pack" : présélectionne le pack dans le formulaire -----
const packSelect = document.getElementById('packSelect');
document.querySelectorAll('[data-pack]').forEach(btn => {
  btn.addEventListener('click', () => {
    packSelect.value = btn.dataset.pack;
  });
});

// ----- Formulaire de contact → message WhatsApp -----
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.target);

  let message = `Bonjour, je viens de votre site WebPro Lomé.\n\n`;
  message += `👤 Nom : ${data.get('nom')}\n`;
  if (data.get('activite')) message += `🏪 Activité : ${data.get('activite')}\n`;
  message += `📦 Besoin : ${data.get('pack')}\n`;
  if (data.get('message')) message += `\n💬 ${data.get('message')}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});

// ----- Animation d'apparition des blocs -----
const revealTargets = document.querySelectorAll('.card, .demo, .price, .steps li, .faq details');
revealTargets.forEach(el => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('visible'));
}

// ----- Année automatique dans le pied de page -----
document.getElementById('year').textContent = new Date().getFullYear();
