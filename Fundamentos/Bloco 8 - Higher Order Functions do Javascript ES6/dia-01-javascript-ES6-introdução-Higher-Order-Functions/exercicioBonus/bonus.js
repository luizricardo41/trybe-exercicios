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

const mageDamage = (mage) => {
  const { intelligence } = mage;
  const max = intelligence * 2;
  let mana = mage.mana;
  const damageMana = {};
  if (mana < 15) {
    return `Não possui mana suficiente`;
  } else {
  const mageAttack = Math.floor(Math.random() * (max - intelligence + 1)) + intelligence;
  mana -= 15;
  damageMana['mana'] = mana;
  damageMana['damage'] = mageAttack; 
  return damageMana;
  }
}

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const attack = warriorDamage(warrior);
    warrior.damage = attack;
    dragon.healthPoints -= attack;
  },
  mageTurn: (mageDamage) => {
    const mageObj = mageDamage(mage);
    const attack = mageObj.damage;
    mage.damage = attack;
    dragon.healthPoints -= attack;
    mage.mana -= 15;
  },
  dragonTurn: (dragonDamage) => {
    const attack = dragonDamage();
    dragon.damage = attack;
    mage.healthPoints -= attack;
    warrior.healthPoints -= attack;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());