class Observer {
  notify(phoneNumber) {}
}

class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  AddPhoneNumber(number) {
    this.phoneNumbers.push(number);
  }

  RemovePhoneNumber(number) {
    this.phoneNumbers = this.phoneNumbers.filter(num => num !== number);
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(number) {
    for (const observer of this.observers) {
      observer.notify(number);
    }
  }

  DialPhoneNumber(number) {
    if (!this.phoneNumbers.includes(number)) {
      console.log("Phone number not found");
      return;
    }

    this.notifyObservers(number);
  }
