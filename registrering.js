const supabaseUrl = "https://sjsrtfydsvxwragamuvf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqc3J0Znlkc3Z4d3JhZ2FtdXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMTYwMjQsImV4cCI6MjA2Mzc5MjAyNH0.C03IFs5FZNvDUtOKo31jxaei-6ZWJWH3GqFvp38AsO8";
const database = supabaseUrl + "/rest/v1/brukere";

function aktiverRegistrering() {
  const skjema = document.getElementById("registreringsSkjema");
  const melding = document.getElementById("registreringMelding");

  // Sjekk for ?ref i URL
  const urlParams = new URLSearchParams(window.location.search);
  const vervetAv = urlParams.get("ref") || "";

  skjema.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      fornavn: document.getElementById("fornavn").value,
      etternavn: document.getElementById("etternavn").value,
      epost: document.getElementById("epost").value,
      telefon: document.getElementById("telefon").value,
      vervet_av: vervetAv || document.getElementById("vervetAv").value,
      kontonummer: document.getElementById("kontonummer").value,
      passord: document.getElementById("passord").value,
      opprettet: new Date().toISOString()
    };

    // Lagrer i localStorage
    localStorage.setItem("fornavn", data.fornavn);
    localStorage.setItem("etternavn", data.etternavn);
    localStorage.setItem("epost", data.epost);
    localStorage.setItem("telefon", data.telefon);
    localStorage.setItem("verver", data.vervet_av);
    localStorage.setItem("konto", data.kontonummer);

    try {
      const res = await fetch(database, {
        method: "POST",
        headers: {
          "apikey": supabaseKey,
          "Authorization": "Bearer " + supabaseKey,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        melding.textContent = "✅ Registrert!";
        melding.style.color = "lime";
        setTimeout(() => {
          visModul('modul-profil');
        }, 1000);
      } else {
        melding.textContent = "🚫 Feil ved registrering (Supabase).";
        melding.style.color = "red";
      }
    } catch (err) {
      melding.textContent = "⚠️ Nettverksfeil!";
      melding.style.color = "orange";
    }
  });
}