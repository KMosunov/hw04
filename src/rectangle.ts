class Rectangle {
    constructor () {
    }

    getArea(width:number, height:number): number {
        return width * height
    }
}

const rect = new Rectangle()
console.log(rect.getArea(5,10)) // After fixing: will print 50
