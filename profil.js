function visProfilData() {
  const bruker = JSON.parse(localStorage.getItem("registrertBruker"));
  if (!bruker) return;

  document.getElementById("profil-navn").textContent = (bruker.fornavn || '') + " " + (bruker.etternavn || '');
  document.getElementById("profil-epost").textContent = bruker.epost || '';
  document.getElementById("profil-telefon").textContent = bruker.telefon || 'Ikke oppgitt';
  document.getElementById("profil-verv").textContent = bruker.verv || 'Ingen';
  document.getElementById("profil-konto").textContent = bruker.konto || 'Ikke oppgitt';
  document.getElementById("profil-registrert").textContent = bruker.registrert || 'Ukjent';
}

window.onload = visProfilData;