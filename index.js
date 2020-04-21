// Your code here
class Polygon {
    constructor(arr) {
        this._sides = arr;
    }

    get countSides() {
        return this._sides.length;
    }

    get perimeter() {
        return this._sides.reduce((num, tot)=> num + tot, 0);
    }

}

class Triangle extends Polygon {
    get isValid() {
        if (!Array.isArray(this._sides)) return;
        if (this.count !== 3) return;
        let side1 = this._sides[0]
        let side2 = this._sides[1]
        let side3 = this._sides[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {
    
    get isValid() {
        if (!Array.isArray(this._sides)) return;
        if (this.count !== 4) return;
        let side1 = this._sides[0]
        let side2 = this._sides[1]
        let side3 = this._sides[2]
        let side4 = this._sides[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

    get area() {
        if (!Array.isArray(this._sides)) return;
        if (this.count !== 4) return;
        return this._sides[0] * this._sides[0]
      }
}