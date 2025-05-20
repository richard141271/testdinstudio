document.addEventListener("DOMContentLoaded", () => {
  const brukerdata = JSON.parse(localStorage.getItem("registrertBruker")) || {};
  if (brukerdata.epost) {
    const baseUrl = "https://aiinnovate.no";
    const lenke = `${baseUrl}/?ref=${encodeURIComponent(brukerdata.epost)}`;
    document.getElementById("vervelenke").value = lenke;
  }

  const antall = Number(localStorage.getItem("rekrutterte")) || 0;
  document.getElementById("rekrutterte").innerText = antall;
  const total = antall * 50;
  document.getElementById("provisjon").innerText = `${total} kr`;
  document.getElementById("rang").innerText = antall >= 5 ? "Rekrutteringsmester" : antall > 0 ? "Medlem" : "Ingen";
});

function kopierLenke() {
  const felt = document.getElementById("vervelenke");
  felt.select();
  felt.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(felt.value).then(() => {
    alert("Lenken er kopiert til utklippstavlen!");
  });
}