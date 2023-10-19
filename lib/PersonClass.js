class Person {
  constructor(builder) {
    this.name = builder.name
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .map((part) => part.toUpperCase());

    this.dateOfBirth = builder.dateOfBirth;
    this.monthOfBirth = builder.monthOfBirth;
    this.yearOfBirth = builder.yearOfBirth;
  }
}

class PersonBuilder {
  constructor(name) {
    this.name = name;
  }
  date(date) {
    this.dateOfBirth = date;
    return this;
  }
  month(month) {
    this.monthOfBirth = month;
    return this;
  }
  year(year) {
    this.yearOfBirth = year;
    return this;
  }
  save() {
    return new Person(this);
  }
}

module.exports = { PersonBuilder, Person };
