// — Contador sencillo usando localStorage —
const visitasSpan = document.getElementById('visits');
let visitas = Number(localStorage.getItem('visitas') || 0);
visitas += 1;
localStorage.setItem('visitas', visitas);
visitasSpan.textContent = visitas;

// — Manejo del formulario —
const form = document.getElementById('contact-form');
const feedback = document.getElementById('submit-feedback');

form.addEventListener('submit', evt => {
  evt.preventDefault();  // evitar recarga

  // Leer valores
  const nombre  = form.name.value.trim();
  const email   = form.email.value.trim();
  const mensaje = form.message.value.trim();

  // Recuperar array de envíos previos (o crear uno nuevo)
  const envios = JSON.parse(localStorage.getItem('envios')) || [];
  envios.push({ nombre, email, mensaje, fecha: new Date().toISOString() });
  localStorage.setItem('envios', JSON.stringify(envios));

  // Feedback al usuario
  feedback.textContent = '¡Gracias por tu mensaje! Te responderemos pronto.';
  form.reset();
});
