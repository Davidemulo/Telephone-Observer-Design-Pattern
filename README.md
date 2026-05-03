# Telephone Observer Design Pattern

## Overview

This project is an implementation of the **Observer Design Pattern** using a simple Telephone system.

The `Telephone` class manages phone numbers and notifies registered observers whenever a valid number is dialed.

---

## Design Pattern Used

### Observer Pattern

The Observer Pattern defines a one-to-many relationship between objects so that when one object changes state, all its dependents are notified automatically.

In this project:

- **Telephone** → Subject (publisher)
- **Observers** → Subscribers (listeners)

---

## Features

- Add phone numbers  
- Remove phone numbers  
- Dial only valid phone numbers  
- Add observers dynamically  
- Remove observers  
- Notify all observers when a number is dialed  

---

## Project Structure

```
Telephone
├── phoneNumbers (Array)
├── observers (Array)
├── AddPhoneNumber()
├── RemovePhoneNumber()
├── addObserver()
├── removeObserver()
├── notifyObservers()
└── DialPhoneNumber()
```

---

## Observers

### 1. PrintPhoneNumberObserver
Prints the phone number when notified.

### 2. DialMessageObserver
Prints a message:

Now Dialling <phoneNumber>

---

## How to Run

### 1. Clone repository

git clone https://github.com/Davidemulo/Telephone-Observer-Design-Pattern

### 2. Run file using Node.js

node index.js

---

## Example Usage
```
const telephone = new Telephone();

const observer1 = new PrintPhoneNumberObserver();
const observer2 = new DialMessageObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.AddPhoneNumber("+2349031824914");
telephone.DialPhoneNumber("+2349031824914");
```
---

## Expected Output

+2349031824914  
Now Dialling +2349031824914
