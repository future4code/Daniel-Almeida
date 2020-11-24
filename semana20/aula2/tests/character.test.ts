import {validateCharacter, performAttack, recover} from "../src/character"

interface Character {
  name: string;
  life: number;
  strength: number;
  defense: number;
}

test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for life 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for strength 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 22,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for defense 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 22,
      strength: 33,
      defense: 0,
    });

    expect(result).toBe(false);
  });

  test("Should return false for defense negative value", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 22,
      strength: 33,
      defense: -90,
    });

    expect(result).toBe(false);
  });

  test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });

  test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const character1: Character = {
      name: "Scorpion",
      life: 10,
      defense: 200,
      strength: 600,
    };

    const character2: Character = {
      name: "Kitana",
      life: 20,
      defense: 400,
      strength: 800,
    };

    recover(character1, character2, validatorMock as any);

    expect(character1.life).toBe(1500);
    expect(character2.life).toBe(1500);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });