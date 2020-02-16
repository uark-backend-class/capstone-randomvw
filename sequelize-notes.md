Sequelize Getters/Setters
    Think of getters/setters as custom functions
  A GETTER is a way to get data from our model in a 
  customizable way.



Student
  firstName
  lastName

myStudent.fullName () => {
  return this.firstName + " " + this.lastName;
}