class BuildReport {
  constructor(limitGB = 5) {
    this.limit = limitGB * 1024; // MB cinsinden
    this.modules = [];
  }

  addModule(name, sizeMB) {
    this.modules.push({ name, sizeMB });
  }

  generateReport() {
    let total = this.modules.reduce((sum, m) => sum + m.sizeMB, 0);
    console.log("📊 BTXOS Build Report");
    this.modules.forEach(m => {
      console.log(`- ${m.name}: ${m.sizeMB} MB`);
    });
    console.log(`Toplam Boyut: ${total} MB`);

    if (total > this.limit) {
      console.log("❌ 5 GB sınırı aşıldı!");
      alert("❌ Build Report: 5 GB sınırı aşıldı!");
    } else {
      console.log("✅ Boyut sınır içinde.");
      alert("✅ Build Report: Boyut sınır içinde.");
    }
  }
}

// Örnek kullanım:
const report = new BuildReport();
report.addModule("CompanionAI", 500);
report.addModule("SynthSound", 600);
report.addModule("CoreUI", 300);
report.addModule("QuestEngine", 400);
report.addModule("ArtifactVault", 700);
report.addModule("SecurityShield", 200);
report.addModule("EnergyMeter", 150);
report.generateReport()