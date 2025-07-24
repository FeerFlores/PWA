// Contador simple usando localStorage
const visitasSpan = document.getElementById('visits');
let visitas = Number(localStorage.getItem('visitas') || 0);
visitas += 1;
localStorage.setItem('visitas', visitas);
visitasSpan.textContent = visitas;
