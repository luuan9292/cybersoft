class Animal {
    constructor(name, leg, life) {
        this.name = name;
        this.leg = leg;
        this.life = true;
    }
    run() {
        console.log(`${this.name} is running`);
    }
    
}

class Mouse extends Animal {
    constructor(name, leg, life, color) {
        super(name, leg, life);
        this.color = "black";
    }
}

const Mickey = new Mouse('Mickey', 4, true, 'black');
console.log(Mickey);