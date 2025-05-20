document.addEventListener("DOMContentLoaded", () => {
  const skjema = document.getElementById("registreringsskjema");
  if (skjema) {
    skjema.addEventListener("submit", e => {
      e.preventDefault();
      const data = {
        navn: document.getElementById("fornavn").value + " " + document.getElementById("etternavn").value,
        epost: document.getElementById("epost").value,
        telefon: document.getElementById("telefon").value,
        vervetAv: document.getElementById("vervetAv").value,
        kontonummer: document.getElementById("kontonummer").value,
        passord: document.getElementById("passord").value,
      };
      if (!document.getElementById("godtaVilkår").checked) {
        document.getElementById("registreringsmelding").innerText = "⚠️ Du må godta vilkårene.";
        return;
      }
      if (data.passord !== document.getElementById("passord2").value) {
        document.getElementById("registreringsmelding").innerText = "⚠️ Passordene matcher ikke.";
        return;
      }
      localStorage.setItem("registrertBruker", JSON.stringify(data));
      document.getElementById("registreringsmelding").innerText = "✅ Du er nå registrert!";
      visModul('modul-profil');
    });
  }
});