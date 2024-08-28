const db = require("../models");
const { response_error, response_success, response_exception } = require('../helpers/RespondStatus');
const Student = db.students;
const Op = db.Sequelize.Op;

// Create and Save a new Student
exports.create = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.rollno) {
        response_error(res, "Content can not be empty!", 500);
    }

    const student = {
        name: req.body.name,
        email: req.body.email,
        rollno: req.body.rollno
    };
    
    // Save Student in the database
    Student.create(student)
        .then(data => {
            response_success(res, "Student has been created successfully", data);
        })
        .catch(err => {
            response_exception(res, err.message, 500);
        });
};

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Student.findAll({ where: condition })
        .then(data => {
            response_success(res, null, data);
        })
        .catch(err => {
            response_exception(res, err.message, 500);
        });
};

// Find a single Student with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Student.findByPk(id).then(data => {
        if (data) {
            response_success(res, null, data);
        } else {
            response_error(res, `Cannot find Student with id=${id}.`, 500);
        }
    }).catch(err => {
        response_exception(res, err.message, 500);
    });
};

// Update a Student by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Student.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            response_success(res, "Student was updated successfully.", null);
        } else {
            response_error(res, `Failed to update student`, 500);
        }
    }).catch(err => {
        response_exception(res, err.message, 500);
    });
};

// Delete a Student with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Student.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            response_success(res, "Student was deleted successfully.", null);
        } else {
            response_error(res, `Failed to delete student`, 500);
        }
    }).catch(err => {
        response_exception(res, err.message, 500);
    });
};

// Delete all Students from the database.
exports.deleteAll = (req, res) => {
    Student.destroy({
        where: {},
        truncate: false
        }).then(nums => {
            response_success(res, "Students were deleted successfully.", null);
        })
        .catch(err => {
            response_exception(res, err.message, 500);
        });
};