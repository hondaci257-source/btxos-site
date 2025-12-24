class EnergyMeter {
  constructor() {
    this.cpu = 0;
    this.ram = 0;
  }

  update(cpuUsage, ramUsage) {
    this.cpu = cpuUsage;
    this.ram = ramUsage;
    this.display();
  }

  display() {
    const cpuBar = "⚡".repeat(this.cpu / 10);
    const ramBar = "🔥".repeat(this.ram / 10);

    console.log(`CPU: [${cpuBar}] ${this.cpu}%`);
    console.log(`RAM: [${ramBar}] ${this.ram}%`);

    alert(`CPU: ${this.cpu}% | RAM: ${this.ram}%`);
  }
}

// Örnek kullanım:
const meter = new EnergyMeter();
meter.update(70, 55); // CPU %70, RAM %55
