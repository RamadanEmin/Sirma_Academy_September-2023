class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.isOn = false;
        this.quality = quality;
    }

    turnOn() {
        this.isOn = true;
        this.quality -= 1;
    }

    turnOff() {
        this.isOn = false;
        this.quality -= 1;
    }

    showInfo() {
        return JSON.stringify({
            producer: this.info.producer,
            age: this.info.age,
            brand: this.info.brand
        });
    }

    price() {
        return (800 - (this.info.age * 2) + (this.quality * 0.5));
    }
}

let info = { producer: "Asus", age: 2, brand: "Zenbook" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price());

info = { producer: "Lenovo", age: 1, brand: "Legion" }
laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
laptop.turnOn()
laptop.turnOff()
console.log(laptop.isOn)