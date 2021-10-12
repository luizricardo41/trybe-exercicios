const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const dragonAttack = Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;
  return dragonAttack;
}

const warriorDamage = (warrior) => {
  const { strength } = warrior;
  const { weaponDmg } = warrior;
  const max = strength * weaponDmg;
  const warriorAttack = Math.floor(Math.random() * (max - strength + 1)) + strength;
  return warriorAttack;
}

console.log(warriorDamage(warrior));