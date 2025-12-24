class CompanionAI {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  greet() {
    let message = "";
    switch(this.mood) {
      case "rage":
        message = `⚔️ ${this.name}: Kod Kılıcı öfkeyle açıldı! Görevleri hemen başlat!`;
        break;
      case "calm":
        message = `🌙 ${this.name}: Sessiz bir güçle BTXOS seni bekliyor...`;
        break;
      case "victory":
        message = `🏆 ${this.name}: Zafer zamanı! BTXOS hazır, senin komutlarını bekliyor!`;
        break;
      default:
        message = `👾 ${this.name}: BTXOS CompanionAI aktif.`;
    }
    console.log(message);
    alert(message);
  }
}

// Örnek kullanım:
const kodKilic = new CompanionAI("Kod Kılıcı", "rage");
kodKilic.greet();

