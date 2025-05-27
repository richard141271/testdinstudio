function lastProfil() {
  const fornavn = localStorage.getItem('fornavn') || '';
  const etternavn = localStorage.getItem('etternavn') || '';
  const navnFull = `${fornavn} ${etternavn}`.trim();

  document.getElementById('profil-navn').textContent = fornavn || 'Innovator';
  document.getElementById('navn-full').textContent = navnFull;
  document.getElementById('profil-epost').textContent = localStorage.getItem('epost') || '-';
  document.getElementById('profil-telefon').textContent = localStorage.getItem('telefon') || '-';
  document.getElementById('profil-vervet').textContent = localStorage.getItem('verver') || '-';
  document.getElementById('profil-konto').textContent = localStorage.getItem('konto') || '-';
  document.getElementById('profil-dato').textContent = new Date().toLocaleDateString('no-NO');
}

function startNedtelling() {
  let sek = 3600;
  const el = document.getElementById('countdown');
  if (!el) return;
  setInterval(() => {
    const h = String(Math.floor(sek / 3600)).padStart(2, '0');
    const m = String(Math.floor((sek % 3600) / 60)).padStart(2, '0');
    const s = String(sek % 60).padStart(2, '0');
    el.textContent = `${h}:${m}:${s}`;
    if (sek > 0) sek--;
  }, 1000);
}