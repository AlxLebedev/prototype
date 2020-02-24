
export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.protection = 40;
}

Character.prototype.damage = function (points) {
  this.health -= points * (1 - this.protection / 100);
};
