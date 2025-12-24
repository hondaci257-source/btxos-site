class ArtifactVault {
  constructor() {
    this.storage = {
      images: [],
      sounds: [],
      texts: []
    };
  }

  addArtifact(type, name) {
    if(this.storage[type]) {
      this.storage[type].push(name);
      console.log(`📦 ${type} deposuna eklendi: ${name}`);
    } else {
      console.log("❌ Geçersiz artifact tipi.");
    }
  }

  listArtifacts(type) {
    if(this.storage[type]) {
      console.log(`📂 ${type} deposu:`, this.storage[type]);
      alert(`${type} deposu: ${this.storage[type].join(", ")}`);
    } else {
      console.log("❌ Geçersiz artifact tipi.");
    }
  }
}

// Örnek kullanım:
const vault = new ArtifactVault();
vault.addArtifact("images", "kodkilici.png");
vault.addArtifact("sounds", "rage.mp3");
vault.listArtifacts("images");
