function visProfil() {
  const data = JSON.parse(localStorage.getItem("registrertBruker"));
  const container = document.getElementById("profilinfo");

  if (!data) {
    container.innerHTML = "<p>Ingen data funnet.</p>";
    return;
  }

  container.innerHTML = `
    <p><strong>Navn:</strong> ${data.fornavn} ${data.etternavn}</p>
    <p><strong>E-post:</strong> ${data.epost}</p>
    <p><strong>Telefon:</strong> ${data.telefon || 'Ikke oppgitt'}</p>
    <p><strong>Vervet av:</strong> ${data.verv || 'Ingen'}</p>
    <p><strong>Konto:</strong> ${data.konto || 'Ikke registrert'}</p>
    <p><strong>Registrert:</strong> ${data.registrert}</p>
  `;
}