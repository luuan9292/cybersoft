class Base {

    constructor(name, hp, atk, weapon, alive) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.weapon = weapon;
        this.alive = alive;
    }

    applyAttack(atk) {
        this.hp -= atk;
    }

    attack(enemy) {
        enemy.applyAttack(this.atk);
    }

    death() {
            this.alive = false;
            console.log(this.name + " was ...Died...");
    }

}

class Hero extends Base {

    constructor(name, hp, atk, def, weapon, alive) {
        super(name, hp, atk, weapon, alive);
        this.def = def;
    }

    applyAttack(atk) {
        this.hp -= (atk - this.def);
    }

    attack(enemy) {
        super.attack(enemy);
        this.hp += (this.atk / 2);
    }
}


let Red_Hero = new Hero("Hero", 800, 80, 40, "Duel-Blade", true);
let Dragon = new Base("Flame Dragon", 1000, 120, "Blue Flame", true);

let count = 0;
while(Red_Hero.alive === true && Dragon.alive === true) {
    Red_Hero.attack(Dragon);
    if(Dragon.hp <= 0) {
        Dragon.death();
        break;
    }
    Dragon.attack(Red_Hero);
    if(Red_Hero.hp <= 0){
        Red_Hero.death();
        break;
    }
    console.log("Turn " + ++count);
    console.log(Red_Hero);
    console.log(Dragon);
}

