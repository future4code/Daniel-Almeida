export interface Character {
    name: string;
    life: number;
    strength: number;
    defense: number;
  }

  export const validateCharacter = (input: Character): boolean => {
    if (
      !input.name ||
          input.life === undefined || 
      input.strength === undefined ||
      input.defense === undefined
    ) {
      return false;
    }
  
    if (input.life <=0 || input.strength <=0 || input.defense <=0) {
      return false;
    }
  
    return true;
  };

  // export const performAttack = (attacker: Character, defender: Character) => {
  //   if (!validateCharacter(attacker) || !validateCharacter(defender)) {
  //     throw new Error("Invalid character");
  //   }
  
  //   if (attacker.strength > defender.defense) {
  //     defender.life -= attacker.strength - defender.defense;
  //   }
  // };

  export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };

  // A inverção de dependencias faz com que a função receba um parametro como um funcção calback, facilitando a validação
  // Criar um mock  para o validator

  export const recover = (
    character1: Character,
    character2: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(character1) || !validator(character2)) {
      throw new Error("Invalid character");
    }
    
    character1.life = 1500;
    character2.life = 1500;
    };

    export const increaseCharacterStrength = (character: Character, newStrength: number): void => {
      if(newStrength <= character.strength) {
        throw new Error("Invalid strength");
      }
      character.strength = newStrength;


    }