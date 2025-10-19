
class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(department) {
    if (!this.departments.includes(department)) {
      this.departments.push(department);
      console.log(`Added "${department}" to ${this.name}`);
    } else {
      console.log(`"${department}" already exists in ${this.name}`);
    }
  }

  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
      console.log(`Removed "${department}" from ${this.name}`);
    } else {
      console.log(`"${department}" not found in ${this.name}`);
    }
  }

  displayDepartments() {
    console.log(`\n${this.name} - Departments:`);
    if (this.departments.length === 0) {
      console.log("  No departments available");
    } else {
      this.departments.forEach((dept, index) => {
        console.log(`  ${index + 1}. ${dept}`);
      });
    }
    console.log(`Total: ${this.departments.length} department(s)\n`);
  }
}

const myUniversity = new University("GTU");


myUniversity.displayDepartments();


myUniversity.addDepartment("Computer Science");
myUniversity.addDepartment("Mathematics");
myUniversity.addDepartment("Physics");
myUniversity.addDepartment("Engineering");
myUniversity.addDepartment("Biology");


myUniversity.displayDepartments();


myUniversity.addDepartment("Computer Science");

myUniversity.removeDepartment("Physics");
myUniversity.removeDepartment("Mathematics");


myUniversity.displayDepartments();

myUniversity.removeDepartment("Chemistry");