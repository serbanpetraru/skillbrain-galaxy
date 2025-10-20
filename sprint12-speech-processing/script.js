const adviceText = document.getElementById('advice');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

async function getAdvice() {
  adviceText.textContent = "Se încarcă...";
  adviceText.classList.remove('visible'); 
  
  try {
    const response = await fetch('https://api.adviceslip.com/advice?timestamp=' + new Date().getTime());
    const data = await response.json();
    adviceText.textContent = `"${data.slip.advice}"`;
    
    setTimeout(() => adviceText.classList.add('visible'), 100);
  } catch (error) {
    adviceText.textContent = "Eroare la obținerea sfatului. Încearcă din nou!";
  }
}

function copyAdvice() {
  const textToCopy = adviceText.textContent.trim();
  if (!textToCopy || textToCopy.startsWith("Apasă") || textToCopy.startsWith("Se încarcă")) {
    alert("Nu există nimic de copiat încă!");
    return;
  }

  navigator.clipboard.writeText(textToCopy)
    .then(() => alert("✅ Sfat copiat în clipboard!"))
    .catch(() => alert("❌ Nu s-a putut copia sfatul."));
}

generateBtn.addEventListener('click', getAdvice);
copyBtn.addEventListener('click', copyAdvice);
