const EventEmitter = require("events");

// task 1

const studentSystem = new EventEmitter();

// studentJoined event
studentSystem.on("studentJoined", (studentName) => {
    console.log(`Student ${studentName} joined the session.`);
});

// courseSelected event
studentSystem.on("courseSelected", (courseName) => {
    console.log(`Course selected: ${courseName}`);
});

// sessionEnded event
studentSystem.on("sessionEnded", (sessionCode) => {
    console.log(`Session ended. Code: ${sessionCode}`);
});

// Trigger events
studentSystem.emit("studentJoined", "Rahul");
studentSystem.emit("courseSelected", "Full Stack Development");
studentSystem.emit("sessionEnded", 0);


// task 2

const application = new EventEmitter();

// input event
application.on("input", (text) => {
    console.log(`Entered text: ${text}`);
});

// buttonClick event
application.on("buttonClick", () => {
    console.log("Button was clicked.");
});

// formSubmit event
application.on("formSubmit", () => {
    console.log("Form submitted successfully.");
});

// Custom event: notification
application.on("notification", (message) => {
    console.log(`Notification: ${message}`);
});

// Trigger events
application.emit("input", "Hello Node.js");
application.emit("buttonClick");
application.emit("formSubmit");
application.emit("notification", "You have a new message.");



// task 3

console.log("1. Synchronous code before callbacks");

process.nextTick(() => {
    console.log("2. process.nextTick()");
});

setTimeout(() => {
    console.log("3. setTimeout()");
}, 0);

setImmediate(() => {
    console.log("4. setImmediate()");
});

console.log("5. Synchronous code after callbacks");



// task 4

const studentTracker = new EventEmitter();

// Login event
studentTracker.on("login", (studentName) => {
    console.log(`${studentName} logged in successfully.`);
});

// Course registration event
studentTracker.on("courseRegistration", (courseName) => {
    console.log(`Course registered: ${courseName}`);
});

// Notification event
studentTracker.on("notification", (message) => {
    console.log(`Notification: ${message}`);
});

// Logout event
studentTracker.on("logout", (studentName) => {
    console.log(`${studentName} logged out successfully.`);
});

// Trigger events
studentTracker.emit("login", "Rahul");

studentTracker.emit(
    "courseRegistration",
    "Full Stack Development"
);

studentTracker.emit(
    "notification",
    "Your course registration is confirmed."
);

studentTracker.emit("logout", "Rahul");