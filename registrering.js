document.addEventListener("DOMContentLoaded", () => {
  const skjema = document.getElementById("registreringsskjema");
  const statusEl = document.getElementById("registrering-status");

  // Hindre dobbel registrering
  const eksisterende = localStorage.getItem("registrertBruker");
  if (eksisterende) {
    const bruker = JSON.parse(eksisterende);
    statusEl.innerText = "✅ Du er allerede registrert som " + bruker.navn + ".";
    statusEl.style.color = "lightgreen";
    skjema.style.display = "none";
    return;
  }

  skjema.addEventListener("submit", (e) => {
    e.preventDefault();

    const navn = document.getElementById("navn").value.trim();
    const epost = document.getElementById("epost").value.trim();
    const telefon = document.getElementById("telefon").value.trim();
    const passord = document.getElementById("passord").value;
    const samtykke = document.getElementById("samtykke").checked;

    if (!navn || !epost || !telefon || !passord || !samtykke) {
      statusEl.innerText = "⚠️ Vennligst fyll ut alle felt og godta vilkårene.";
      statusEl.style.color = "orange";
      return;
    }

    if (!/^[0-9]{8}$/.test(telefon)) {
      statusEl.innerText = "⚠️ Telefonnummer må være 8 sifre.";
      statusEl.style.color = "orange";
      return;
    }

    if (passord.length < 6) {
      statusEl.innerText = "⚠️ Passord må være minst 6 tegn.";
      statusEl.style.color = "orange";
      return;
    }

    const bruker = { navn, epost, telefon, passord };
    localStorage.setItem("registrertBruker", JSON.stringify(bruker));

    statusEl.innerText = "✅ Registrering fullført! Du er nå innlogget som " + navn + ".";
    statusEl.style.color = "lightgreen";
    skjema.reset();

    // Automatisk naviger til profil
    setTimeout(() => {
      if (typeof visModul === "function") {
        visModul("modul-profil");
      }
    }, 1500);
  });
});