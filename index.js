function Telephone() {
  this.phoneNumbers = [];
  this.observers = [];
}

function Telephone() {
  this.phoneNumbers = [];
  this.observers = [];

  this.AddPhoneNumber = function(number) {
    this.phoneNumbers.push(number);
  };
}

this.RemovePhoneNumber = function(number) {
  this.phoneNumbers = this.phoneNumbers.filter(num => num !== number);
};

this.addObserver = function(observer) {
  this.observers.push(observer);
};

this.removeObserver = function(observer) {
  this.observers = this.observers.filter(obs => obs !== observer);
};