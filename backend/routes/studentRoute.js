module.exports = (app) => {
    const students = require("../controllers/Student.js");
  
    var router = require("express").Router();
  
    // Create a new Student
    router.post("/create", students.create);
  
    // Retrieve all Students
    router.get("/", students.findAll);
  
    // Retrieve a single Student with id
    router.get("/:id", students.findOne);
  
    // Update a Student with id
    router.put("/update/:id", students.update);
  
    // Delete a Student with id
    router.delete("/delete/:id", students.delete);
  
    // Delete all Students
    // router.delete("/", students.deleteAll);
  
    app.use('/api/students', router);
  };