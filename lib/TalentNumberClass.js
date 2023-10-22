class TalentNumber {
  #talentNumber = 0;
  constructor(person) {
    this.person = person;
  }
  #_sumDigits(number) {
    let sum = 0;
    while (number) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum;
  }
  #calculateTalentNumber() {
    // let talentNumber = 0;
    this.#talentNumber += this.#_sumDigits(this.person.dateOfBirth);
    this.#talentNumber += this.#_sumDigits(this.person.monthOfBirth);
    this.#talentNumber += this.#_sumDigits(this.person.yearOfBirth);
  }
  getTalentNumber() {
    this.#calculateTalentNumber();
    return this.#talentNumber;
  }
}

module.exports = TalentNumber;
