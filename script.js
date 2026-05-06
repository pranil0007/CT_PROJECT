const EXAMPLES = [
  {
    lang:'HTML',
    prompt:'Build a responsive SaaS landing page'
  },
  {
    lang:'Python',
    prompt:'Write a Python data analysis script'
  },
  {
    lang:'React',
    prompt:'Build a React Todo App'
  }
];

let code = '';
let lang = 'HTML';

function navClick(el){
  document.querySelectorAll('.nav-item')
  .forEach(item => item.classList.remove('active'));

  el.classList.add('active');
}

function onType(el){
  let value = el.value;

  if(value.length > 2000){
    value = value.slice(0,2000);
    el.value = value;
  }

  document.getElementById('charCount')
  .textContent = value.length + ' / 2000';
}

function toggleEx(e){
  e.stopPropagation();

  document.getElementById('exDrop')
  .classList.toggle('open');
}

document.addEventListener('click', () => {
  document.getElementById('exDrop')
  .classList.remove('open');
});

function pickEx(i){

  const ex = EXAMPLES[i];

  const ta = document.getElementById('promptInput');

  ta.value = ex.prompt;

  onType(ta);

  document.getElementById('langSelect').value = ex.lang;

  document.getElementById('exDrop')
  .classList.remove('open');
}

function generate(){

  const prompt = document.getElementById('promptInput')
  .value.trim();

  if(!prompt){
    toast('Please enter project description');
    return;
  }

  lang = document.getElementById('langSelect').value;

  document.getElementById('stPH').innerHTML = `
    <div class="ph-icon">✓</div>
    <div class="ph-title">
      Code generated successfully for ${lang}
    </div>
  `;

  toast('Code Generated!');
}

function toast(msg){

  const t = document.getElementById('toast');

  t.innerText = msg;

  t.style.display = 'block';

  setTimeout(() => {
    t.style.display = 'none';
  }, 2000);
}