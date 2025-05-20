document.addEventListener("DOMContentLoaded", () => {
  const bruker = JSON.parse(localStorage.getItem("registrertBruker"));
  if (bruker) {
    document.getElementById("navn").textContent = bruker.fornavn + " " + bruker.etternavn;
    document.getElementById("epost").textContent = bruker.epost;
    document.getElementById("telefon").textContent = bruker.telefon || "-";
    document.getElementById("vervetAv").textContent = bruker.vervetAv || "-";
    document.getElementById("kontonummer").textContent = bruker.kontonummer || "-";
    document.getElementById("registrert").textContent = bruker.registrert;
  } else {
    document.getElementById("profilData").innerHTML = "<p>Ingen brukerdata funnet. Gå til registrering først.</p>";
  }
});

function loggUt() {
  if (confirm("Er du sikker på at du vil logge ut og slette profilen din?")) {
    localStorage.removeItem("registrertBruker");
    window.location.hash = "#registrering";
    visModul("modul-registrering");
  }
}