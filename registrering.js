function registrerBruker() {
  const navn = document.getElementById("navn").value.trim();
  const epost = document.getElementById("epost").value.trim();
  const telefon = document.getElementById("telefon").value.trim();
  const passord = document.getElementById("passord").value;

  if (!navn || !epost || !telefon || !passord) {
    document.getElementById("registrering-status").innerText = "Vennligst fyll ut alle felt.";
    return false;
  }

  const bruker = { navn, epost, telefon, passord };
  localStorage.setItem("registrertBruker", JSON.stringify(bruker));
  document.getElementById("registrering-status").innerText = "✅ Registrering fullført!";
  return false; // Hindrer sideoppdatering
}