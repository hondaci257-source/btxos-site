function loadDashboard() {
  const dash = document.getElementById("dashboard");
  dash.innerHTML = `
    <div class="panel">
      <h2>⚔️ Kod Kılıcı Terminal</h2>
      <p>BTXOS CoreUI aktif. Emir bekleniyor...</p>
    </div>
    <div class="panel">
      <h3>Görev Durumu</h3>
      <ul>
        <li>CompanionAI: ✅</li>
        <li>SynthSound: ✅</li>
        <li>CoreUI: 🔥 Aktif</li>
      </ul>
    </div>
  `;
  console.log("🖥️ CoreUI yüklendi.");
}
