module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rollno: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
  
    return Student;
};