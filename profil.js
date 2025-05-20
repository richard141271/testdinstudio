document.addEventListener("DOMContentLoaded", () => {
  const data = localStorage.getItem("registrertBruker");
  if (!data) {
    document.getElementById("profil-info").innerHTML = "<p>⚠️ Ingen registrert bruker funnet.</p>";
    return;
  }
  const bruker = JSON.parse(data);
  document.getElementById("profil-navn").innerText = bruker.navn;
  document.getElementById("profil-epost").innerText = bruker.epost;
  document.getElementById("profil-telefon").innerText = bruker.telefon;
});

function loggUt() {
  if (confirm("Er du sikker på at du vil slette profilen og logge ut?")) {
    localStorage.removeItem("registrertBruker");
    location.reload();
  }
}