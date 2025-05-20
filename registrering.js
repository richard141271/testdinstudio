document.addEventListener("DOMContentLoaded", () => {
  const skjema = document.getElementById("registreringsskjema");
  skjema.addEventListener("submit", (e) => {
    e.preventDefault();

    const navn = document.getElementById("navn").value.trim();
    const epost = document.getElementById("epost").value.trim();
    const telefon = document.getElementById("telefon").value.trim();
    const passord = document.getElementById("passord").value;

    const statusEl = document.getElementById("registrering-status");

    if (!navn || !epost || !telefon || !passord) {
      statusEl.innerText = "⚠️ Vennligst fyll ut alle felt.";
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

    statusEl.innerText = "✅ Registrering fullført!";
    statusEl.style.color = "lightgreen";
    skjema.reset();
  });
});