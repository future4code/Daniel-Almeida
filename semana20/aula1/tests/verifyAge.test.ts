import {verifyAge} from '../src/verifyAge'

enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
  }
  
  enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
  }
  
  interface User {
    name: string;
    age: number;
    nacionality: NACIONALITY;
  }
  
  interface Casino {
    name: string;
    location: LOCATION;
  }

  
  
  

    test("1 brazilian allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed).toEqual(["Astrodev"]);
  });

  test("1 american allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.americans.allowed).toEqual(["Astrodev"]);
  });

  test("1 american allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.americans.allowed).toEqual(["Astrodev"]);
  });
  test("1 american allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.americans.allowed).toEqual(["Astrodev"]);
  });

  test("1 brazilian allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
  });

  test("1 american allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.americans.unallowed.length).toBe(0);
  });

  test("No one allowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: "Astrodev EUA",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);

    expect(result.brazilians.unallowed).toContain("Astrodev BR");
    expect(result.americans.unallowed).toContain("Astrodev EUA");
  });

  test("2 american allowed and 2 brazilians unallowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: "Astrodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toBe(2);
  });