# Student Management System

## Author
Sebastian Andrei P. Merdegia

## Code Description
This is a simple student management system built with Express.js, Mongoose, and MongoDB. It provides basic CRUD operations for managing student records in a MongoDB database.

## How to Use
1. Install MongoDB Compass and ensure MongoDB is running locally
2. Clone the repository
3. Run `npm install` to install dependencies
4. Start the server with `npm start`
5. Use the following endpoints to test with tools like curl or Postman:


### Example using curl:
```bash
# save student
curl -X POST http://localhost:3000/save-student \
-H "Content-Type: application/json" \
-d '{"stdnum":"123","fname":"Mary Jane","lname":"Watson","age":20}'

# get members
curl http://localhost:3000/members