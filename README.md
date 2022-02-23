# Javascript OOP Debrief

An activity for demonstrating class constructors and extending with parent and child subclasses

Today you work on objects, classes, and inheritance.  To do this, you will work independently on this project.  It should take you about 45 minutes.

For this project you will make three classes: one parent class and two child classes.

1. Your parent class should have:
    3 properties
    1 method

2. Your child classes should have:
    1 additional property each

3. One of your child classes should include an additional method

You can make your classes anything you want (e.g. Person, Vehicle, Media, Ship, School, etc.) there are no restrictions on what your classes are or what their methods do.  Get creative!

- Below is the sample JS from the opening sync session showing related structure for clarity
- An index file that links to the app.js file allows you to check your logic by logging values to the dev console in the browser.

```javascript
// Object Literal

const phone = {
  brand: 'Samsung',
  color: 'blue',
  model: 'Galaxy S10',
  ring: function() {
    console.log('The phone is ringing');
  }
};

// Constructor Function
function Dog(name, breed, furColor, size) {
  this.name = name,
  this.breed = breed,
  this.furColor = furColor,
  this.size = size;
  this.greet = function() {
    console.log('Bark bark!');
  }
};

// Call Constructor Function to create new instances of the Dog Object
const tracy = new Dog('Tracy', 'German Shepherd', 'Brown', 'Large');
const lulu = new Dog('Lulu', 'Cavalier King Charles Spaniel', 'Black and brown', 'Medium');

// Class Constructor
class Person {
  constructor(name, hairColor, job, eyeColor) {
    this.name = name,
    this.hairColor = hairColor,
    this.job = job,
    this.eyeColor = eyeColor;
  }
    greet() {
    console.log(`Hello, my name is ${this.name}! I have ${this.eyeColor} eyes.`);
  };
};
// Instatiate Class Constructor
const hema = new Person('Hema', 'Black', 'Junior Web Developer', 'Black');

// Class Constructor (child class)
class Athlete extends Person {
  constructor(name, hairColor, job, eyeColor, sport) {
    super(name, hairColor, job, eyeColor),
    this.sport = sport;
  }
  saySport() {
    console.log(`I play ${this.sport}.`);
  };
};

const jordan = new Athlete('Michael Jordan', 'Bald', 'NBA Player', 'Brown', 'Basketball');

jordan.saySport();
jordan.greet();

```

- FORK this repository onto your github

- Copy the https URL from your FORKED repo

- Once you are in the folder in the terminal where you store your projects, run `git clone` followed by the URL you copied from your forked copy of this github repository

- In VSCode, select `File` in the top right, and select `Open Folder` then find the folder you cloned named `OOP-Debrief-Activity` and open it, **OR**

<!-- - Alternatively you can run in the terminal `cd OOP-Debrief-Activity` and run `code -a .` to directly open the folder in the window or `code .` to open in a new window -->

- make sure and `git add .`, and `git commit -m "commit message"` after functional working changes to your code i.e. made the parent class with propeties and works error free, then at points along the way `git push origin main`.

- When finished with the activity, submit a pull request from your fork!

***Happy Coding!***
