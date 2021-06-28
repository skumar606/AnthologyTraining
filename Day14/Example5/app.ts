class Cow {
    private numOfLegs: number;
    private canWalk: boolean;

    public set legs(num: number) {
        this.numOfLegs = num;
        if(this.numOfLegs!==4)
            this.walk = false;
        else
            this.walk = true;
    }

    public set walk(b: boolean) {
        this.canWalk = b;
    }
}

try {
    let obj = new Cow();
    obj.legs = 4;
    console.log(obj);
}
catch(error) {
    console.log(error);
}