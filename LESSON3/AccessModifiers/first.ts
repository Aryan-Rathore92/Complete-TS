/* 
 1. what is Access Modifiers 
 2. Public --> Everywhere is accessiable
 3. Private --> Only avaliable within the main/current class
 4. Protected --> Only avaliable within child class and main/current class
*/
// Access Modifiers tell us which property or method where will be accessiable in code/classess

class Student {
  private name: string;
  protected district: string;
  mobileNo: number;
  isPresent = false;
  regular = false;

  constructor(name: string, district: string, mobileNo: number) {
    this.name = name;
    this.district = district;
    this.mobileNo = mobileNo;
  }

  setStudentPresentValue() {
    this.isPresent = true;
  }

  checkStudentDeatils() {
    if (this.isPresent) {
      return `Student name is ${this.name} and district is ${this.district} and mobile no is ${this.mobileNo}`;
    } else {
      return `Student is not present`;
    }
  }
}

var myClgStudent = new Student("Aryan", "MZN", 1234567890);
// myClgStudent.setStudentPresentValue();
// console.log(myClgStudent.checkStudentDeatils());
console.log(myClgStudent);

class Teacher extends Student {
  constructor() {
    super("sarthak", "MZN", 1919191919); // super --> does call to the parent class constructor
  }

  getDistrict() {
    return this.district;
  }

  getMobileNo() {
    return this.mobileNo;
  }
}

var TeacherDeatils = new Teacher();
console.log(TeacherDeatils.getDistrict());
console.log(TeacherDeatils.getMobileNo());
