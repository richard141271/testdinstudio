document.addEventListener("DOMContentLoaded", () => {
  const bruker = JSON.parse(localStorage.getItem("registrertBruker")) || {};
  const epost = bruker.epost || "din@epost.no";
  const vervelenke = `https://richard141271.github.io/testdinstudio/?ref=${encodeURIComponent(epost)}`;
  document.getElementById("vervelenke").value = vervelenke;
});

function kopierLenke() {
  const felt = document.getElementById("vervelenke");
  felt.select();
  felt.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(felt.value).then(() => {
    alert("✅ Lenken er kopiert!");
  });
}