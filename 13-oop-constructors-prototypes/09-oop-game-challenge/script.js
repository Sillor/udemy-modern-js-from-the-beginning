function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXp = function (xp) {
    this.points += xp;
    if (this.points >= 10) {
        this.points -= 10;
        this.lvl++;
    }
}

Player.prototype.describe = function () {
    return `Name: ${this.name}\nLevel: ${this.lvl}\nPoints: ${this.points}`;
}

let player1 = new Player('Bob');
let player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(1);
player2.gainXp(4);

console.log(player1.describe());
console.log(player2.describe());