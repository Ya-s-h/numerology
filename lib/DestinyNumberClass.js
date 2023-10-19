class DestinyNumber {
  #destinyNumber = [];
  constructor(person) {
    this.person = person;
    for (let name of this.person.name) {
      this.person.#destinyNumber.push(this.calculateDestinyNumber(name));
    }
  }
  calculateDestinyNumber(name) {
    let destinyNumber = 0;
    // name = name.toUpperCase(); // Convert the name to uppercase to handle both cases

    for (let i = 0; i < name.length; i++) {
      let charCode = name.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        // Ensure character is between A and Z
        destinyNumber += charCode - 64; // Convert A-Z to 1-26
      }
    }

    // Keep reducing destinyNumber until it becomes a single digit or 11 or 22
    while (destinyNumber > 22 || (destinyNumber > 9 && destinyNumber !== 11)) {
      destinyNumber = this.#getSumOfDigits(destinyNumber);
    }

    return destinyNumber;
  }
  getDestinyNumbers() {
    return this.person.#destinyNumber;
  }
  #getSumOfDigits(num) {
    let sum = 0;
    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
}

module.exports = DestinyNumber;
