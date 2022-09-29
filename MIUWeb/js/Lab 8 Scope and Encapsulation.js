// Exercise 1:
// Define a filter function on the String object. The function accepts an array of strings that
// specifies a list of banned words. The function returns the string after removing all the
// banned words.

if (!String.prototype.filter) {
    String.prototype.filter = function (ban) {
        let arr = this.split(" ");
        let result = arr.filter(s=> s!=ban);
        result = result.join(" ");
        return result;
    }
}
console.log("This house is not nice!".filter('not'));

// Exercise 2:
// Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
// that works by repeatedly stepping through the list to be sorted
Array.prototype.bubbleSort = function () {
    let arr = this;
    let n = arr.length;
    for (let i = 0; i < n-1; i++)
        for (let j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1])
            {
                // swap arr[j+1] and arr[i]
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
    return arr;
}
console.log([6,4,0, 3,-2,1].bubbleSort());

//Exercise 3:
// Create an object called Teacher derived from a Person function constructor, and implement
// a method called teach that receives a string called subject, and prints out: [teacher's name]
// is now teaching [subject]. Create a Teacher object and call its teach method.
// Also do the same thing using Object.create. When using Object.create you will need a
// factory function instead of a function constructor in order to pass parameters such as
// ‘name’ to be set in the prototype.
function Persons(teacherName) {
    this.teacherName = teacherName;
    this.teach = function (subject) {
        console.log(this.teacherName + ' is now teaching ' + subject );
    }
}
Teacher = new Persons("Xing");
Teacher.teach("WAP");

// Exercise 4:
// Write code that will create person, student, and professor objects.

//Person objects have
// - name and age fields
// - a greeting method that prints out: “Greetings, my name is [name] and I am [age] years old.”
// - a salute method that prints out: “Good morning!, and in case I dont see you, good afternoon, good evening and good night!”

let Person = {
    'name' : 'John',
    'age' : 30,
    'greeting' : function () {
        return "Greetings, my name is " + this.name + " and I am " + this.age + " years old.";
    },
    "salute" : function () {
        return "Good morning!, and in case I dont see you, good afternoon, good evening and good night!";
    }
};

// Student objects inherit name, age, and salute from person. They also have a field
// ‘major’ and have their own greeting method. Their greeting is “Hey, my name is
// [name] and I am studying [major]. The greeting should be output to the console.
let Student = Object.create(Person);
Student.major = 'IT';
Student.greeting = function () {
  console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
};

// Professor objects inherit name, age, and salute from person. They also have a field
// ‘department’ and have their own greeting method. Their salutation is “Good day,
// my name is [name] and I am in the [department] department.” Output it to the
// console.
let Professor = Object.create(Person);
Professor.department = "Computer Science";
Professor.greeting = function () {
    console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
};

// Call both the greeting and salutation methods on each.
Professor.greeting();
Student.greeting();
