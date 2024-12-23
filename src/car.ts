class Car {
    brand: string
    speed: number

    constructor(brand: string, speed: number) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(speed1:number): void {
        this.speed = this.speed + speed1
    }
}

const car = new Car('Toyota', 100)
console.log("Скорость до ускорения: " + car.speed)
car.accelerate(20)
console.log("Скорость после ускорения: " + car.speed)// After fixing: will print 120
