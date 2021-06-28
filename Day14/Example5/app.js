class Cow {
    set legs(num) {
        this.numOfLegs = num;
        if (this.numOfLegs !== 4)
            this.walk = false;
        else
            this.walk = true;
    }
    set walk(b) {
        this.canWalk = b;
    }
}
try {
    let obj = new Cow();
    obj.legs = 4;
    console.log(obj);
}
catch (error) {
}
