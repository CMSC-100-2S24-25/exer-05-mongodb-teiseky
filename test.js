const needle = require('needle');

const baseUrl = 'http://localhost:3000'; // Base URL for your server

// Test data for students
const students = [
  { stdnum: "123", fname: "Mary Jane", lname: "Watson", age: 20 },
  { stdnum: "124", fname: "Peter", lname: "Parker", age: 21 },
  { stdnum: "125", fname: "John", lname: "Doe", age: 19 },
  { stdnum: "126", fname: "Jane", lname: "Smith", age: 20 },
  { stdnum: "127", fname: "Bob", lname: "Johnson", age: 22 }
];

// add all 5 students
console.log("Testing POST /save-student...");
students.forEach((student, index) => {
  needle.post(
    `${baseUrl}/save-student`,
    student,
    { json: true },
    (err, res) => {
      if (err) {
        console.error(`Error saving student ${index + 1}:`, err);
      } else {
        console.log(`Saved ${student.fname} ${student.lname}:`, res.body);
      }
    }
  );
});

// get all students..
setTimeout(() => {
  console.log("\nTesting GET /members...");
  needle.get(`${baseUrl}/members`, (err, res) => {
    if (err) {
      console.error("Error fetching members:", err);
    } else {
      console.log("All members:", res.body);
    }
  });
}, 2000); 

// get user stdnum 123
setTimeout(() => {
  needle.get(`${baseUrl}/user?stdnum=123`, (err, res) => {
    if (err) {
      console.error("Error fetching user:", err);
    } else {
      console.log("User with stdnum 123:", res.body);
    }
  });
}, 3000);

// update mary jane, see in controller
setTimeout(() => {
  console.log("\nTesting POST /update...");
  needle.post(`${baseUrl}/update`, {}, { json: true }, (err, res) => {
    if (err) {
      console.error("Error updating:", err);
    } else {
      console.log("Update result:", res.body);
    }
  });
}, 4000);

// remvoe one student
setTimeout(() => {
  console.log("\nTesting POST /remove-user...");
  needle.post(
    `${baseUrl}/remove-user`,
    { stdnum: "124" },
    { json: true },
    (err, res) => {
      if (err) {
        console.error("Error removing user:", err);
      } else {
        console.log("Remove result:", res.body);
      }
    }
  );
}, 5000);

// 6. remove all students
setTimeout(() => {
  needle.post(`${baseUrl}/remove-all-user`, {}, { json: true }, (err, res) => {
    if (err) {
      console.error("Error removing all users:", err);
    } else {
      console.log("Remove all result:", res.body);
    }
  });
}, 6000);

