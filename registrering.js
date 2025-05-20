document.addEventListener("DOMContentLoaded", () => {
  const skjema = document.getElementById("registreringsSkjema");
  if (skjema) {
    skjema.addEventListener("submit", e => {
      e.preventDefault();
      const pass1 = document.getElementById("passord").value;
      const pass2 = document.getElementById("gjentaPassord").value;
      if (pass1 !== pass2) {
        document.getElementById("registreringMelding").textContent = "Passordene matcher ikke.";
        return;
      }

      const bruker = {
        fornavn: document.getElementById("fornavn").value,
        etternavn: document.getElementById("etternavn").value,
        epost: document.getElementById("epost").value,
        telefon: document.getElementById("telefon").value,
        vervetAv: document.getElementById("vervetAv").value,
        kontonummer: document.getElementById("kontonummer").value,
        registrert: new Date().toLocaleString()
      };
      localStorage.setItem("registrertBruker", JSON.stringify(bruker));
      window.location.hash = "#profil";
      visModul('modul-profil');
    });
  }
});