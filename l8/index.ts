class Carr {
    constructor(public color: string, private year: number) {

    }

    drive() {
        this.putInGear();
        this.pressPedal();
        this.turnWheel();
    }

    private putInGear() {
        console.log('putInGear()');
    }

    private pressPedal() {
        console.log('pressPedal()');
    }

    private turnWheel() {
        console.log('turnWheel()');
    }
}

// @ts-ignore
const myCar = new Carr('green', 2303);
console.log(myCar.color);
