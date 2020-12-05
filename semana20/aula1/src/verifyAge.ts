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

  interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
  }
  
  interface ResultItem {
    allowed: string[];
    unallowed: string[];}

  export  function verifyAge(casino: Casino, users: User[]): Result{

        const allowed: User[] = [];
      const unallowed: User[] = [];


      for (const user of users) {
        if (casino.location === LOCATION.EUA) {
          if (user.age >= 21) {
            allowed.push(user);
          } else {
            unallowed.push(user);
          }
        } else if (casino.location === LOCATION.BRAZIL) {
          if (user.age >= 18) {
            allowed.push(user);
          } else {
            unallowed.push(user);
          }
          break;
        }
      }
    
      return {
        brazilians: {
          allowed: allowed
            .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((u) => u.name),
          unallowed: unallowed
            .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((u) => u.name),
        },
        americans: {
          allowed: allowed
            .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((u) => u.name),
          unallowed: unallowed
            .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((u) => u.name),
        },
      };

    }