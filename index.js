// Your code here

class Polygon {
    constructor(array) {
        this.sideArray = array
    }

    get countSides() {
        return this.sideArray.length
    }

    get perimeter() {
        return this.sideArray.reduce((memo, e) => memo + e)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sideArray[0] + this.sideArray[1] > this.sideArray[2] &&
            this.sideArray[0] + this.sideArray[2] > this.sideArray[1] &&
            this.sideArray[1] + this.sideArray[2] > this.sideArray[0]) {
            return true 
        } else {
            return false 
        }
    }

}

class Square extends Polygon {
    get isValid() {
        if (this.sideArray[0] === this.sideArray[1] &&
            this.sideArray[0] === this.sideArray[2] &&
            this.sideArray[0] === this.sideArray[3]) {
                return true 
            } else {
                return false 
            }
    }
    get area() {
        return this.sideArray[0] ** 2
    }
}