// ==========================================
// 1. SISTEMA DE NAVEGAÇÃO DE ABAS
// ==========================================
function openTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

// ==========================================
// 2. FUNÇÃO CENTRAL DE ANIMAÇÃO DOS BADGES
// ==========================================
function flashBadge(badgeId) {
  const badge = document.getElementById(badgeId);
  if (!badge) return;
  badge.classList.add('flash');
  setTimeout(() => badge.classList.remove('flash'), 500);
}

// ==========================================
// 3. LISTENERS POR CATEGORIA
// ==========================================

// MOUSE (Slides 3-4)
const areaMouse = document.getElementById('area-mouse');
const mouseEvents = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mousemove', 'mouseout', 'mouseenter', 'mouseleave', 'contextmenu'];
mouseEvents.forEach(evt => {
  areaMouse.addEventListener(evt, (e) => {
    if(evt === 'contextmenu') e.preventDefault();
    flashBadge(`b-${evt}`);
  });
});

// TECLADO (Slide 5)
const areaTeclado = document.getElementById('area-teclado');
['keydown', 'keypress', 'keyup'].forEach(evt => {
  areaTeclado.addEventListener(evt, () => flashBadge(`b-${evt}`));
});

// FORMULÁRIO (Slide 6)
const form = document.getElementById('area-form');
const formInputs = form.querySelectorAll('input, select');
['submit', 'reset'].forEach(evt => {
  form.addEventListener(evt, (e) => { e.preventDefault(); flashBadge(`b-${evt}`); });
});
formInputs.forEach(input => {
  ['focus', 'blur', 'input', 'change', 'focusin', 'focusout'].forEach(evt => {
    input.addEventListener(evt, () => flashBadge(`b-${evt}`));
  });
});

// HTML5 (Slide 7)
const areaScroll = document.getElementById('area-scroll');
areaScroll.addEventListener('scroll', () => flashBadge('b-scroll'));
window.addEventListener('resize', () => flashBadge('b-resize'));

// DRAG & DROP (Slide 8)
const dragItem = document.getElementById('drag-item');
const dropZone = document.getElementById('drop-zone');

dragItem.addEventListener('dragstart', () => flashBadge('b-dragstart'));
dragItem.addEventListener('drag', () => flashBadge('b-drag'));
dragItem.addEventListener('dragend', () => flashBadge('b-dragend'));

dropZone.addEventListener('dragenter', (e) => { e.preventDefault(); dropZone.classList.add('hover'); flashBadge('b-dragenter'); });
dropZone.addEventListener('dragover', (e) => { e.preventDefault(); flashBadge('b-dragover'); });
dropZone.addEventListener('dragleave', () => { dropZone.classList.remove('hover'); flashBadge('b-dragleave'); });
dropZone.addEventListener('drop', (e) => { e.preventDefault(); dropZone.classList.remove('hover'); flashBadge('b-drop'); });

// CLIPBOARD (Slide 9)
const areaClip = document.getElementById('area-clipboard');
['copy', 'cut', 'paste'].forEach(evt => {
  areaClip.addEventListener(evt, () => flashBadge(`b-${evt}`));
});

// MÍDIA (Slide 10)
const areaMidia = document.getElementById('area-midia');
const mediaEvents = ['play', 'pause', 'timeupdate', 'volumechange', 'seeking', 'seeked', 'ended'];
mediaEvents.forEach(evt => {
  areaMidia.addEventListener(evt, () => flashBadge(`b-${evt}`));
});

// PROGRESSO (Slide 11) - Simulando um XMLHttpRequest
const btnLoad = document.getElementById('btn-load-img');
const progressBar = document.getElementById('progress-bar');

btnLoad.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  
  xhr.addEventListener('loadstart', () => { progressBar.style.width = '0%'; flashBadge('b-loadstart'); });
  xhr.addEventListener('progress', (e) => {
    if(e.lengthComputable) {
      const percentComplete = (e.loaded / e.total) * 100;
      progressBar.style.width = percentComplete + '%';
    }
    flashBadge('b-progress'); 
  });
  xhr.addEventListener('load', () => flashBadge('b-load'));
  xhr.addEventListener('loadend', () => { progressBar.style.width = '100%'; flashBadge('b-loadend'); });
  xhr.addEventListener('error', () => flashBadge('b-error'));
  xhr.addEventListener('abort', () => flashBadge('b-abort'));

  // Usando uma API pública que demora um pouquinho para simular progresso
  xhr.open('GET', 'https://httpbin.org/bytes/500000', true); 
  xhr.send();
});