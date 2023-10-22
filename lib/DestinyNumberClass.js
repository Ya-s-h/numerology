class DestinyNumber {
  #destinyNumber = [];
  constructor(person) {
    this.person = person;
  }
  #calculateDestinyNumber(name) {
    let destinyNumber = 0;
    for (let i = 0; i < name.length; i++) {
      let charCode = name.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        destinyNumber += charCode - 64;
      }
    }
    while (destinyNumber > 22 || (destinyNumber > 9 && destinyNumber !== 11)) {
      destinyNumber = this.#getSumOfDigits(destinyNumber);
    }

    return destinyNumber;
  }
  getDestinyNumbers() {
    for (let name of this.person.name) {
      this.person.#destinyNumber.push(this.#calculateDestinyNumber(name));
    }
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
