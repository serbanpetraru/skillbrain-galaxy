const app = document.getElementById('app');
let DATA = null;
let currentRoute = 'home'; 
let currentIndex = 0; 

async function loadData(){
  try{
    const res = await fetch('./data.json');
    if(!res.ok) throw new Error('Nu am putut încărca data.json');
    DATA = await res.json();
    render();
  }
  
  catch(err){
    app.innerHTML = `<p style="color:tomato">Eroare la încărcare: ${err.message}</p>`;
    console.error(err);
  }
}

function setupNav(){
  document.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
      document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      currentRoute = btn.dataset.route;
      currentIndex = 0;
      render();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupNav();
  loadData();

  const logo = document.getElementById('logo-link');
  if (logo) {
    logo.addEventListener('click', e => {
      e.preventDefault(); // nu reîncarcă pagina
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('[data-route="home"]').classList.add('active');
      currentRoute = 'home';
      render();
    });
  }
});

function updateBackground() {
  document.body.className = '';
  if (currentRoute === 'home') document.body.classList.add('home-bg');
  if (currentRoute === 'destination') document.body.classList.add('destination-bg');
  if (currentRoute === 'crew') document.body.classList.add('crew-bg');
  if (currentRoute === 'technology') document.body.classList.add('tech-bg');
}

function render(){
  updateBackground();
  if(!DATA) { app.innerHTML = '<p>Se încarcă...</p>'; return; }
  if(currentRoute === 'home') return renderHome();
  if(currentRoute === 'destination') return renderDestinations();
  if(currentRoute === 'crew') return renderCrew();
  if(currentRoute === 'technology') return renderTechnology();
}

function renderHome() {
  app.innerHTML = `
    <section class="home">
      <div class="home-left">
        <p class="subtitle">SO, YOU WANT TO TRAVEL TO</p>
        <h1 class="h-intro">SPACE</h1>
        <p class="lead">Let's face it; if you want to go to space, you might as well go to outer space and not hover kind of on the edge of it. Well, sit back and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div class="home-right">
        <button id="explore-btn" class="explore-btn">EXPLORE</button>
      </div>
    </section>
  `;

  document.getElementById('explore-btn').addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-route="destination"]').classList.add('active');
    currentRoute = 'destination';
    currentIndex = 0;
    render();
  });
}

function renderDestinations(){
  const items = DATA.destinations;
  const selected = items[currentIndex];
  app.innerHTML = `
    <section class="dest">
      <div class="left-col">
        <div class="tabs" id="dest-tabs">
          ${items.map((it,idx)=>`<button class="tab ${idx===currentIndex?'active':''}" data-idx="${idx}">${it.name}</button>`).join('')}
        </div>
        <h2 style="font-family:'Bellefair',serif;font-size:48px;margin:12px 0">${selected.name}</h2>
        <p class="lead">${selected.description}</p>
        <div style="display:flex;gap:24px;margin-top:22px">
          <div>
            <small style="display:block;color:#9aa3d0">AVG. DISTANCE</small>
            <strong style="font-size:18px">${selected.distance}</strong>
          </div>
          <div>
            <small style="display:block;color:#9aa3d0">EST. TRAVEL TIME</small>
            <strong style="font-size:18px">${selected.travel}</strong>
          </div>
        </div>
      </div>
      <div class="right-col">
        <picture>
          <source srcset="${selected.images.webp}" type="image/webp">
          <img src="${selected.images.png}" alt="${selected.name}" style="max-width:320px;width:100%;height:auto">
        </picture>
      </div>
    </section>
  `;

  document.querySelectorAll('#dest-tabs .tab').forEach(btn=>{
    btn.addEventListener('click', e=>{
      currentIndex = Number(btn.dataset.idx);
      renderDestinations();
    });
  });
}

function renderCrew(){
  const items = DATA.crew;
  const sel = items[currentIndex];
  app.innerHTML = `
    <section class="crew">
      <div class="left-col">
        <div class="tabs" id="crew-tabs">
          ${items.map((it,idx)=>`<button class="tab ${idx===currentIndex?'active':''}" data-idx="${idx}" aria-label="Select ${it.role}">${idx+1}</button>`).join('')}
        </div>
        <h3 style="text-transform:uppercase;color:#9aa3d0">${sel.role}</h3>
        <h2 style="font-family:'Bellefair',serif;font-size:40px">${sel.name}</h2>
        <p class="lead">${sel.bio}</p>
      </div>
      <div class="right-col">
        <picture>
          <source srcset="${sel.images.webp}" type="image/webp">
          <img src="${sel.images.png}" alt="${sel.name}" style="max-width:360px;width:100%;height:auto">
        </picture>
      </div>
    </section>
  `;

  document.querySelectorAll('#crew-tabs .tab').forEach(btn=>{
    btn.addEventListener('click', e=>{
      currentIndex = Number(btn.dataset.idx);
      renderCrew();
    });
  });
}

function renderTechnology(){
  const items = DATA.technology;
  const sel = items[currentIndex];
  app.innerHTML = `
    <section class="tech">
      <div class="left-col">
        <div class="tabs" id="tech-tabs">
          ${items.map((it,idx)=>`<button class="tab ${idx===currentIndex?'active':''}" data-idx="${idx}">${(idx+1).toString().padStart(2,'0')}</button>`).join('')}
        </div>
        <h3 style="color:#9aa3d0">THE TERMINOLOGY...</h3>
        <h2 style="font-family:'Bellefair',serif;font-size:32px">${sel.name}</h2>
        <p class="lead">${sel.description}</p>
      </div>
      <div class="right-col">
        <picture>
          <source media="(min-width:800px)" srcset="${sel.images.portrait}">
          <img src="${sel.images.landscape}" alt="${sel.name}" style="max-width:480px;width:100%;height:auto">
        </picture>
      </div>
    </section>
  `;

  document.querySelectorAll('#tech-tabs .tab').forEach(btn=>{
    btn.addEventListener('click', e=>{
      currentIndex = Number(btn.dataset.idx);
      renderTechnology();
    });
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  setupNav();
  loadData();
});
