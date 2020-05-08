// Your code here

class Polygon {
    constructor(array) {
        this.arr = array
    }
    
    get countSides() {
       return this.arr.length 
    }
    
    get perimeter() {
        let perim = 0
         for (let i = 0; i < this.arr.length; i++){
            perim += this.arr[i]
        }
        return perim
    }
}

class Triangle extends Polygon {
    get isValid() {
        if ((this.arr[0] + this.arr[1]) > this.arr[2] && (this.arr[1] + this.arr[2]) > this.arr[0] && (this.arr[0] + this.arr[2]) > this.arr[1]) {
            return true 
        } 
        
        return false 
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.arr[0] === this.arr[1] && this.arr[1] === this.arr[2] && this.arr[2] === this.arr[3]) {
            return true 
        }
        return false 
    }
    
    get area() {
        return this.arr[0] ** 2
    }
}