// Portafolio Mafer — interacción mínima
// 1 carpeta abierta a la vez, para no abrumar.
// Si quieres varias abiertas, quita la línea que esconde las demás.

function openWindow(id) {
  // Esconde todas las ventanas
  document.querySelectorAll('.window').forEach((w) => w.classList.add('hidden'));
  // Muestra solo la elegida
  const win = document.getElementById(id);
  if (!win) return;
  win.classList.remove('hidden');
  win.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Abrir ventana desde una carpeta
document.querySelectorAll('[data-open]').forEach((btn) => {
  btn.addEventListener('click', () => openWindow(btn.dataset.open));
});

// Cerrar ventana con la X
document.querySelectorAll('[data-close]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset.close).classList.add('hidden');
  });
});

// Botones y menú: View Work / Get in Touch / About / Skills / Contact
// El problema era que #works y #contact están DENTRO de ventanas
// ocultas, así que el navegador no podía bajar hasta ellos.
// Este código primero abre la ventana y luego baja hasta ella.
const sectionToWindow = {
  '#about': 'win-about',
  '#works': 'win-works',
  '#projects': 'win-projects',
  '#education': 'win-education',
  '#services': 'win-services',
  '#skills': 'win-services',
  '#contact': 'win-contact',
};

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = link.getAttribute('href');
    const winId = sectionToWindow[target];
    if (!winId) return;
    event.preventDefault();
    openWindow(winId);
  });
});
