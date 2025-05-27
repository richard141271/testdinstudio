function aktiverRegistrering() {
  const skjema = document.getElementById('registreringsSkjema');
  if (!skjema) return;

  skjema.addEventListener('submit', function (e) {
    e.preventDefault();
    const pass = document.getElementById('passord').value;
    const gjenta = document.getElementById('gjentaPassord').value;
    if (pass !== gjenta) {
      document.getElementById('registreringMelding').textContent = '🚫 Passordene er ikke like!';
      return;
    }
    localStorage.setItem('fornavn', document.getElementById('fornavn').value);
    localStorage.setItem('etternavn', document.getElementById('etternavn').value);
    localStorage.setItem('epost', document.getElementById('epost').value);
    localStorage.setItem('telefon', document.getElementById('telefon').value);
    localStorage.setItem('verver', document.getElementById('vervetAv').value);
    localStorage.setItem('konto', document.getElementById('kontonummer').value);
    localStorage.setItem('passord', pass);
    document.getElementById('registreringMelding').textContent = '✅ Registrert!';
    setTimeout(() => visModul('modul-profil'), 1000);
  });
}