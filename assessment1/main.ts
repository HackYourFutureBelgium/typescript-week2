// Use type and mentioned in the name of the variable
// Assign an appropriate value
const aNumber: number = 123;
const aString: string = "text";
const aBigInt: bigint = 123456700000n;
const anArray: string[] = ["rahime", "ibrahim", "nil"];
const anUnknown: unknown = 1234;
const anObject: object = { key: "value" };
const aTuple: [string, number] = ["rahime", 10];
const anEnum: {} = {};

// Implement this function any type accordingly
function isEven(number: number): boolean {
  return number % 2 === 0;
}

// Type the following function and variable
type Person = {
  name: string;
};

type Developer = {
  role: string;
};

const jane: Person = {
  name: "Jane",
};

const joe: Developer = {
  role: "Devops",
};

const people: [Person, Developer] = [jane, joe];

function printPeople(people: [Developer, Person]): void {
  // Print the name of person or the role in this function
  people[0];
  people[1];
}

// Type the encrpyt function correctly
const encryptText = (plainText: string, shift: number) => {
  let cipherArr: any[] = [];
  let cipherLetter;

  plainText.split("").map((letter) => {
    let code = letter.charCodeAt(Number(letter));
    if (letter === " ") {
      return cipherArr.push(letter);
    }
    // Uppercase letters
    if (code >= 65 && code <= 90) {
      cipherLetter = String.fromCharCode(((code - 65 + shift) % 26) + 65);
    }
    // Lowercase letters
    else if (code >= 97 && code <= 122) {
      cipherLetter = String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    return cipherArr.push(cipherLetter);
  });
  return cipherArr.join("");
};

// Solve using a literal union type
let vegetable: "Cucumber" | "Eggplant" | "Cabbage"; // :Vegetable:
vegetable = "Cucumber";
vegetable = "Eggplant";
vegetable = "Cabbage";

// Solve the following exercise with an intersection type
type Complainer = {
  complains: () => void;
};

type Beerdrinker = {
  drinkBeer: () => void;
};

type ChocolateLover = {
  eatChocolate: () => void;
};

type Belgian = Complainer & Beerdrinker & ChocolateLover;
function doBelgianThings(belgian: Belgian): void {
  belgian.complains();
  belgian.drinkBeer();
  belgian.eatChocolate();
}

module.exports = {
  isEven,
  print,
  encryptText,
};
