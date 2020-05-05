// Your code here
class Polygon{
    constructor(array){
      this.sides = array  
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        return this.sides.reduce((memo, s) => memo + s);
    }


}

class Triangle extends Polygon{
    get isValid(){
        if ((this.sides[0] + this.sides[1] < this.sides[2])||(this.sides[1] + this.sides[2] < this.sides[0])){
            return false;
        } 
        else return true;
    }
}

class Square extends Polygon{
    get isValid(){
        let side1 = this.sides[0]
        return this.sides.every(side => side === side1);
    }
    get area(){
        return this.sides[0]**2;
    }
}