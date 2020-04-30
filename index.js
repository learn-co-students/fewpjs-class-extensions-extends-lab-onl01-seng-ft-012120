// Your code here
class Polygon {
    constructor(sides){
        // for (i=0; i<sides.length; i++) {
        //     this.`side${i}` = sides[i];
        // }
        this.sides = sides;
       
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter(){
        // let sum = 0
        // for (i=0; i<this.sides.length; i++) {
        //     sum += this.sides[i];
        // }
        // return sum;
        let sum = this.sides.reduce(function(total, element) {
            return element + total;
        }, 0);
        return sum;
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides == 3){
            if ( ((this.sides[0] + this.sides[1]) > this.sides[2]) && ( (this.sides[2] + this.sides[1]) > this.sides[0] )  ) {
                return true;
            } else return false;
        } else { 
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if ((this.countSides == 4) && this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[0] === this.sides[3]) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        return (this.isValid ? this.sides[1] * this.sides[1] : false)
    }
}